import React, {useState, useEffect, useContext} from 'react';
import { BleManager, Device } from 'react-native-ble-plx';
import { requestLocationPermission } from '../utils/permission';
import { View, ActivityIndicator, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../context/Provider';
import devicesAction from '../context/actions/devicesAction';
import styles from '../components/container/styles';
import DeviceContainer from '../components/container/deviceContainer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Header from './header';
import axiosInstance from '../utils/axiosInstance';
import envs from '../config/env';

const Devices = () => {
    const [isLoading, setIsLoading] = useState(false);
    const manager = new BleManager();
    const { deviceDispatch, deviceState: {devices, isScanning}, authDispatch, authState: {isLoggedIn, data} } = useContext(GlobalContext);
    const {setOptions, toggleDrawer} = useNavigation();

    useEffect(() => {
        const subscription = manager.onStateChange(state => {
            if (state === "PoweredOn") {
              subscription.remove();
            }
        }, true);

        setOptions({
            headerStyle: {
                backgroundColor: '#ccccf8'
            },
            headerTitle: () => <Header toggleDrawer={toggleDrawer} scanDevices={scanDevices} data={data}/>
        });
    }, [])

    const addDevice = (async (device) => {
        try{
            // const isDeviceConnected = await device.isConnected();
            // console.log('device ', isDeviceConnected);
            // if (isDeviceConnected){
            //     device.cancelConnection();
            // }
            devicesAction(device, 'ADD')(deviceDispatch);
            console.log('ENV ', envs.BACKEND_URL);
            axiosInstance.post('basicInfo', {dId: device.id, dName: device.name}).then(() => {
                console.log('Info Saved Successfully!!')
            }).catch((err) => {
                console.log('Error ', err.stack);
            })
        }catch(err){
            console.error('Error in addDevice ', err.stack);
        }
    });

    const renderDevices = () => {
        try{
            let resultedDevices = [];
            if(devices.length){
                devices.forEach(device => {
                    // const isConnect = await device.connect(); // we can use this when we needed
                    resultedDevices.push(
                        <View style={styles.deviceHolder} key={device.id}>
                            <Button title="Add" onPress={_ => addDevice(device)} />
                            <View style={styles.info}>
                                <Text>{device.id}</Text>
                                <Text>{device.name}</Text>
                            </View>
                        </View>
                    )
                });
            }
            return resultedDevices;
        }catch(err){
            console.error('Error in renderDevices ', err.stack);
        }
    }

    async function scanDevices(){
        const permission = await requestLocationPermission();
        if(permission){
            devicesAction(true, 'SCANNING')(deviceDispatch);
            setIsLoading(true)
    
          // scan devices
          manager.startDeviceScan(null, null, (error, scannedDevice) => {
            if (error) {
              console.warn(error);
            }
    
            // if a device is detected add the device to the list by dispatching the action into the reducer
            if (scannedDevice) {
                console.log('Scanned Dev ', scannedDevice.id);
                devicesAction(scannedDevice, 'DEVICES')(deviceDispatch);
            }
          });
    
          // stop scanning devices after 5 seconds
          setTimeout(() => {
            manager.stopDeviceScan();
            devicesAction(false, 'SCANNING')(deviceDispatch);
            setIsLoading(false)
          }, 5000);
        }
    };

    return (
        <DeviceContainer isLoggedIn={isLoggedIn}>
            {/* <View style={styles.headerCont}>
                <TouchableOpacity style={styles.logout} underlayColor='white' onPress={_ => {
                    if(devices.length){
                        devices.forEach(device => {
                            disconnectDevice(device);
                        })
                    }
                    loginAction('LOGOUT')(authDispatch);
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.userName}>{data.userName}</Text>
                </View>
            </View> */}

            <View style={styles.actionBtn}>
               {(devices.length !== 0) && <Button
                    title="Clear devices"
                    onPress={() => devicesAction('', 'CLEAR')(deviceDispatch)}
                />}
                {isLoading && 
                    <View>
                        <ActivityIndicator color={'teal'} size={25} />
                    </View>
                }
            </View>
            
            <ScrollView>
                <View>{renderDevices()}</View>
            </ScrollView>
            
        </DeviceContainer>
    )
};

export default Devices;