import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, SIGNUP } from '../constants/routeNames';
import Login from '../screens/login';
// import SignUp from '../screens/signup';

const AuthNavigation = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            {/* <AuthStack.Screen name={SIGNUP} component={SignUp}></AuthStack.Screen> */}
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;