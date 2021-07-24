import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DEVICES } from '../constants/routeNames';
import Devices from '../screens/devices';


const DeviceNav = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={DEVICES}>
            <HomeStack.Screen name={DEVICES} component={Devices}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default DeviceNav;