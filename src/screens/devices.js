import React, {useState, useEffect, useContext} from 'react';
import { BleManager } from 'react-native-ble-plx';
import { requestLocationPermission } from '../utils/permission';
import { View, ActivityIndicator, Button, ScrollView, TextInput } from 'react-native';
import { GlobalContext } from '../context/Provider';
import devicesAction from '../context/actions/devicesAction';
import styles from '../components/container/styles';
import DeviceContainer from '../components/container/deviceContainer';
import {useNavigation} from '@react-navigation/native';
import Header from './header';
import Device from '../components/devices/index';
import Modal from 'react-native-modal';
import axiosInstance from '../utils/axiosInstance';

const Devices = () => {
    const [isLoading, setIsLoading] = useState(false);
    const manager = new BleManager();
    const { deviceDispatch, deviceState: {devices, isScanning}, authDispatch, authState: {isLoggedIn, data} } = useContext(GlobalContext);
    const {setOptions, toggleDrawer} = useNavigation();
    const [cordinatesVal, setCordinatesVal] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentDevice, setCurrentDevice] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
   

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
            headerTitle: () => <Header toggleDrawer={toggleDrawer} data={data}/>
        });
    }, [])

    const addCoordinates = () => {
        try{
            devicesAction(cordinatesVal, 'SET_COORDS')(deviceDispatch);
            if(cordinatesVal){
                handleDevice('ADD');
            }
            
        }catch(err){
            console.error('Error in addCoordinates ', err.stack);
        }
    }

    const cancelModal = () => {
        try{
            
            
        }catch(err){
            console.error('Error in cancelModal ', err.stack);
        }
    }

    const handleDevice = (async (type) => {
        try{
            devicesAction(currentDevice, type)(deviceDispatch);
            let reqObj = {
                toAdd: type === 'ADD',
                dId: currentDevice.id
            };
            if(type === 'ADD'){
                reqObj['dName'] = currentDevice.name;
                reqObj['coords'] = cordinatesVal;
            }
            axiosInstance.post('ble/addTag', reqObj).then(() => {
                console.log('Info Saved Successfully!!');
            }).catch((err) => {
                console.error('Error ', err);
            })
        }catch(err){
            console.error('Error in handleDevice ', err);
        }
    });

    const handleToggle = (device, type) => {
        try{
            setCurrentDevice(device);
            if(type === 'ADD') toggleModal();
            else handleDevice();
        }catch(err){
            console.error('Error in handleToggle ', err.stack);
        }
    }

    const renderDevices = () => {
        try{
            let resultedDevices = [];
            if(devices.length){
                devices.forEach(device => {
                    resultedDevices.push(
                        <Device device={device} handleToggle={handleToggle}/>
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
               <Button
                    title="Scan devices"
                    onPress={() => {
                        // devicesAction('', 'CLEAR')(deviceDispatch);
                        if(!isScanning){
                            scanDevices();
                        }
                    }}
                />
                {isLoading && 
                    <View>
                        <ActivityIndicator color={'teal'} size={25} />
                    </View>
                }
            </View>
            
            <ScrollView>
                {devices.length != 0 && <View>{renderDevices()}</View>}
            </ScrollView>
            <Modal isVisible={isModalVisible}>
                <View>
                    <TextInput style={styles.coordsIpt}
                        onChangeText={(text) => {
                            setCordinatesVal(text);
                        }} 
                        value={cordinatesVal}
                    ></TextInput>
                    <Button title="Cancel" onPress={() => {
                        toggleModal();
                    }} />
                    <Button title="Add" onPress={() => {
                        addCoordinates();
                        toggleModal();
                    }} />
                </View>
            </Modal>
        </DeviceContainer>
    )
};

export default Devices;