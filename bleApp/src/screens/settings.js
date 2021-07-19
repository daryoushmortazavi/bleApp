import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';
import Header from './header';
import {useNavigation} from '@react-navigation/native';
import { GlobalContext } from '../context/Provider';

const Settings = () => {
    const {setOptions, toggleDrawer} = useNavigation();
    const { authState: {data} } = useContext(GlobalContext);

    useEffect(() => {
        console.log('came here')
        setOptions({
            headerStyle: {
                backgroundColor: '#ccccf8'
            },
            headerTitle: () => <Header toggleDrawer={toggleDrawer} data={data}/>
        });
    }, [])

    return(
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings;