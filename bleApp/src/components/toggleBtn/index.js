import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';


const ToggleBtn = ({handleDevice, device}) => {
    const [btnName, setBtnName] = useState('Add');

    const _onPress = () => {
        try{
            if(btnName === 'Add'){
                setBtnName('Remove')
            }else{
                setBtnName('Add')
            }
            handleDevice(device, btnName.toUpperCase());
        }catch(err){
            console.error('Error in _onPress ', err.stack);
        }
    }

    return(
        <Button title={btnName} onPress={e => _onPress(device, e)} />
    )
}

export default ToggleBtn;