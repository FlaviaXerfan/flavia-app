import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({

    highlightBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#333",
        width: "49%",
        borderRadius: 5,
        marginBottom: 8,
    },

    highlightImage: {
        width: 60,
        height: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    highlightText: {
        color: "#FFFFFF",
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
    },
})