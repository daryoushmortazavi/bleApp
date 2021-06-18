import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
    wrapper: {
        padding: 50
    },
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
    actionBtn: {
        width: '80%',
        marginBottom: 10,
        alignSelf: 'center'
    },
    deviceWrapper: {
        marginTop: 20
    },
    logout: {
        width: '40%',
        marginBottom: 10,
        margin: 10
    }
})