import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DEVICES, SETTINGS, PROFILE } from '../constants/routeNames';
import DeviceNav from './DeviceNav';
import Settings from './SettingsNav';
import SideMenu from '../screens/sideMenu';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator 
            drawerType="slide" 
            drawerContent={({navigation}) =>
                <SideMenu navigation={navigation}/>
        }>
            <Drawer.Screen name={DEVICES} component={DeviceNav} />
            <Drawer.Screen name={SETTINGS} component={Settings} />
            <Drawer.Screen name={PROFILE} component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNav;