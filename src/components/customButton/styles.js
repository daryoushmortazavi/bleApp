import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: 16
    },

    loaderSection: {
        flexDirection: 'row'
    },

    error:{
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    }
})