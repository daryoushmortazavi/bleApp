import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../assets/themes/colors';
import styles from './styles';

const CustomButton = ({title, disabled, loading, primary, secondary, danger, onPress}) => {



    const getBgColor = () => {
        try{
            if(disabled) return colors.grey // More priority

            if(primary) return colors.primary
            else if(secondary) return colors.secondary
            else if(danger) return colors.danger
        }catch(err){
            console.error('Error in getBgColor ', err.stack);
        }
    }

    return (
        <TouchableOpacity disabled={disabled} style={[styles.wrapper, {backgroundColor: getBgColor()}]} onPress={onPress}>
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator  color={primary ? colors.secondary : colors.primary}/>}
                {title && <Text style={{color: disabled ? colors.black : colors.white, paddingLeft: loading ? 5 :0}}>{title}</Text>}
            </View>
            
        </TouchableOpacity>
    )
}

export default CustomButton;