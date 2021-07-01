import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DEVICES } from '../constants/routeNames';
import HomeNav from './HomeNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator drawerType="slide">
            <Drawer.Screen name={'HOME'} component={HomeNav} />
        </Drawer.Navigator>
    )
}

export default DrawerNav;