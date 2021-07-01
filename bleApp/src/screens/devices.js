import React, {useState, useEffect, useContext, useCallback} from 'react';
import { BleManager, Device } from 'react-native-ble-plx';
import { requestLocationPermission } from '../utils/permission';
import { View, ActivityIndicator, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../context/Provider';
import devicesAction from '../context/actions/devicesAction';
import loginAction from '../context/actions/loginAction';
import styles from '../components/container/styles';
import DeviceContainer from '../components/container/deviceContainer';
import { createStackNavigator } from '@react-navigation/stack';

const Devices = () => {
    const [isLoading, setIsLoading] = useState(false);
    const manager = new BleManager();
    const { deviceDispatch, deviceState: {devices}, authDispatch, authState: {isLoggedIn, data} } = useContext(GlobalContext);

    useEffect(() => {
        const subscription = manager.onStateChange(state => {
            if (state === "PoweredOn") {
              subscription.remove();
            }
          }, true);
    }, [])

    const disconnectDevice = (async (device) => {
        try{
            // const isDeviceConnected = await device.isConnected();
            // console.log('device ', isDeviceConnected);
            // if (isDeviceConnected){
            //     device.cancelConnection();
            // }
            devicesAction(device, 'DISCONNECT')(deviceDispatch);
        }catch(err){
            console.error('Error in disconnectDevice ', err.stack);
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
                            <Button title="Connect" onPress={_ => disconnectDevice(device)} />
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
          setIsLoading(true);
    
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
            setIsLoading(false);
          }, 5000);
        }
    };

    const HomeStack = createStackNavigator();
    return (
        // <HomeStack.Navigator>
        <DeviceContainer isLoggedIn={isLoggedIn}>
            <View style={styles.headerCont}>
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
            </View>

            <View style={styles.actionBtn}>
                <Button
                    title="Clear devices"
                    onPress={() => devicesAction('', 'CLEAR')(deviceDispatch)}
                />
                {isLoading ? (
                    <View>
                        <ActivityIndicator color={'teal'} size={25} />
                    </View>
                ) : (
                    <Button title="Scan devices" onPress={scanDevices} />
                )}
            </View>
            
            <ScrollView>
                <View>{renderDevices()}</View>
            </ScrollView>
            
        </DeviceContainer>
        // </HomeStack.Navigator>
    )
};

export default Devices;