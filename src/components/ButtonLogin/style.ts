import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    styleButton: {
        flexDirection: 'row',
        width: "100%",
        height: 60,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },

    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },

    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});
