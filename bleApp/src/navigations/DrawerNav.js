import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DEVICES, SETTINGS, LOGOUT } from '../constants/routeNames';
import DeviceNav from './DeviceNav';
import Settings from '../screens/settings';
import SideMenu from '../screens/sideMenu';

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
        </Drawer.Navigator>
    )
}

export default DrawerNav;