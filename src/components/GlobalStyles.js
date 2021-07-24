
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background:{
        flex: 1, 
        backgroundColor: "#fff",   
        justifyContent: "flex-end",
        //alignItems: "center",
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    area0:{
        flex: 0.2, 
        backgroundColor: "#9ff",   
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    area1:{
        flex: 1, 
        backgroundColor: "#fde",   
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    area1LL:{
        flex: 1.9, 
        marginTop: 60,
        alignItems: "flex-start",
    },
    area1LR:{
        flex: 0.7, 
        marginTop: 60,
        alignItems: "flex-start",
    },
    area1R:{
        flex: 1.8, 
        justifyContent: "center",
        alignItems: "center",
    },
    area2:{
        flex: 2.5, 
        backgroundColor: "#fdc",   
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    area2LL:{
        flex: 2, 
        alignItems: "flex-start",
    },
    area2LR:{
        flex: 1.5, 
        marginRight: 10,
        alignItems: "flex-start",
    },
    area20:{
        flex: 1, 
        backgroundColor: "#fdc",   
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    area20LL:{
        flex: 2, 
        marginTop: 60,
        alignItems: "flex-start",
    },
    area20LR:{
        flex: 0.5, 
        marginTop: 60,
        alignItems: "flex-start",
    },
    area20R:{
        flex: 2, 
        justifyContent: "center",
        alignItems: "center",
    },
    titles:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        top: 5,
    },
    titlesNoMargin:{
        fontSize: 18,
        fontWeight: "bold",
    },
    occupancyTitle:{
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 5,
        width: 300,
        height: 40,
    },
    checkbox: {
        alignSelf: "flex-start",
    },
    icons:{
        width: 120,
        height: 120,
    },
    showError: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 10,
        textAlign: 'center'
    }
})
