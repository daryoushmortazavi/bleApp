import React, {useState, useEffect, useContext} from 'react';
import { BleManager, Device } from 'react-native-ble-plx';
import { requestLocationPermission } from '../../utils/permission';
import { View, ActivityIndicator, Button } from 'react-native';
import { GlobalContext } from '../../context/Provider';
import devicesAction from '../../context/actions/devicesAction';
import styles from '../../components/container/styles';

const UserAction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const manager = new BleManager();
    const { deviceDispatch, deviceState } = useContext(GlobalContext);

    useEffect(() => {
        const subscription = manager.onStateChange(state => {
            if (state === "PoweredOn") {
              subscription.remove();
            }
          }, true);
    }, [])

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

    return (
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
    )
}

export default UserAction;