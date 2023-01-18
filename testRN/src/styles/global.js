import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff8f0",
        alignItems: "center",
    },
    button: {
        height: 200,
        alignItems: "center",
        backgroundColor: "#fff8f0"
    },
    logo: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        color: "#2D4654",
        fontSize: 35,
        fontWeight: "bold",
        paddingVertical: 40,
    },
    text: {
        fontWeight: 'bold',
        color: '#2D4654',
    },
    card: {
        width: '100%',
        backgroundColor: "#fff8f0",
        alignItems: "center",
    },
    modalContent: {
        flex: 1,
        backgroundColor: "#fff8f0",
    },
    multiButtons: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        width: '90%',

        borderColor: '#d9d5d0',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,

        fontSize: 18,
        marginVertical: 5,

    },
});
