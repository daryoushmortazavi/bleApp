import React from 'react';
import { View, Modal } from 'react-native';
import styles from './styles';

const DeviceContainer = ({isLoggedIn, style, children}) => {
    return (
        // <Modal visible={isLoggedIn} animationType='slide'>
            <View style={styles.deviceWrapper}>{children}</View>
        // </Modal>
    )
};

export default DeviceContainer;