import React from 'react';
import { ScrollView, View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { useEffect, useContext } from 'react';
import styles from './styles';
import UserAction from '../../screens/devices/userActions';
import { GlobalContext } from '../../context/Provider';
import devicesAction from '../../context/actions/devicesAction';
import loginAction from '../../context/actions/loginAction';

const DeviceContainer = ({style, children}) => {
    const { deviceDispatch, deviceState: {devices} } = useContext(GlobalContext);
    const {authDispatch, authState: {isLoggedIn}} = useContext(GlobalContext);

    const disconnectDevice = (device) => {
        try{
            // // const isDeviceConnected = await device.isConnected();
            // if (isDeviceConnected){
            //     device.cancelConnection();
            //     console.log('Came ')
            // }
            devicesAction(device, 'DISCONNECT')(deviceDispatch);
        }catch(err){
            console.error('Error in disconnectDevice ', err.stack);
        }
    }

    const renderDevices = () => {
        try{
            let resultedDevices = [];
            if(devices.length){
                devices.forEach(device => {
                    device.connect(); // we can use this when we needed
                    resultedDevices.push(
                        <View style={styles.deviceHolder} key={device.id}>
                            <Button title="disconnect" onPress={_ => disconnectDevice(device)} />
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

    return (
        <Modal visible={isLoggedIn} animationType='slide'>
            <View style={styles.deviceWrapper}>
                <TouchableOpacity style={styles.logout} underlayColor='white' onPress={_ => {
                    loginAction('LOGOUT')(authDispatch);
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <UserAction />
                <ScrollView>
                    <View>{renderDevices()}</View>
                </ScrollView>
            </View>
        </Modal>
        
    )
};

export default DeviceContainer;