import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SETTINGS } from '../constants/routeNames';
import Settings from '../screens/settings';


const DeviceNav = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={SETTINGS}>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default DeviceNav;