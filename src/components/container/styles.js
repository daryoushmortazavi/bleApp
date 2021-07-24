import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
    wrapper: {
        padding: 50
    },
    actionBtn: {
        width: '40%',
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
    },
    loginImg: {
        height: 150,
        width: 250,
        alignSelf: 'center',
        marginTop: 50
    },

    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
        marginBottom: 50
    },

    userName: {
        fontSize: 16
    },
    
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        height: "100%"
    },

    rightWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '30%',
    },

    menuIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    sideWrapper: {
        width: '100%',
        height: '100%',
        marginTop: 70
    },

    textStyle: {
        fontSize: 20,
        color: '#5050f0'
    },

    smOpts : {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8'
    },

    profileWrapper: {
        height: '100%'
    },

    pHeaderWrapper: {
        backgroundColor: 'lightgrey',
        height: '40%',
        display: 'flex'
    },

    imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '89%'
    },

    profileImg: {
        width: 150,
        height: 150,
        borderRadius: 150
    },

    coordsIpt: {
        backgroundColor: 'white',
        color: 'black'
    }
})