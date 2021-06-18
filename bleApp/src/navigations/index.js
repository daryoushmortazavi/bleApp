import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNav';
import HomeNavigation from './HomeNav';
import { GlobalContext } from '../context/Provider';

const AppNavigation = () => {
    const {authState: {isLoggedIn}} = useContext(GlobalContext);
    
    return (
        <NavigationContainer>
            {(isLoggedIn) ? <HomeNavigation/> : <AuthNavigation/>}
        </NavigationContainer>
    )
}

export default AppNavigation;