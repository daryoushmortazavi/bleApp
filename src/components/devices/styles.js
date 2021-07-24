import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
    deviceHolder: {
        backgroundColor: colors.grey,
        marginTop: 12,
        borderRadius: 5,
        padding: 12,
        flexDirection: 'row-reverse'
    },
    info: {
        flex: 1
    },
    subInfo: {
        flexDirection: 'row'
    },
    coords:{
        marginLeft: 10,
        color: colors.primary
    },
    closeIcon: {
        marginLeft: 10
    }
})