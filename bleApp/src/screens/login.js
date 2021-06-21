import React, {useState, useContext} from 'react';
import { Text, View, Image } from 'react-native';
import AuthContainer from '../components/container/authContainer';
import Input from '../components/input';
import CustomButton from '../components/customButton';
import styles from '../components/container/styles';
import { GlobalContext } from '../context/Provider';
import loginAction from '../context/actions/loginAction';

const Login = () => {
    const [uVal, onNameChange] = useState('');
    const [pVal, onPassChange] = useState('');
    const [errorText, setErrorText] = useState('')
    const { authDispatch, authState: {error, loading, data} } = useContext(GlobalContext);


    const loginToApp = () => {
        if(uVal && pVal){
            setErrorText('')
            loginAction()(authDispatch);
        }else{
            setErrorText('These fields are required')
        }
        
    }

    return (
        <AuthContainer>
            <Image source={require('../assets/images/login.png')} style={styles.loginImg}></Image>
            <View>
                <Text style={styles.title}>Welcome to RN-BLE APP</Text>
                <Input 
                    label="Username" 
                    securedTextEntry = {false}
                    onChangeText={text => {
                        onNameChange(text);
                        setErrorText('')
                    }}
                    value = {uVal}
                    placeholder = 'Enter Username'
                    iconPosition="right"
                    error={errorText}
                />
                <Input 
                    label="Password" 
                    securedTextEntry = {true}
                    placeholder = 'Enter Password'
                    onChangeText={text => {
                        onPassChange(text)
                        setErrorText('')
                    }}
                    value = {pVal}
                    icon={<Text>Hide</Text>}
                    error={errorText}
                    iconPosition="right"/>

                <CustomButton primary title="Submit" onPress={loginToApp} />
            </View>
        </AuthContainer>
    )
};

export default Login;