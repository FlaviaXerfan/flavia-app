import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxInput: {
        width: "100%",
    },

    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: "100%",
        backgroundColor: "#fff",
    },

    boxIcon: {
        position: "absolute",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        width: 40,
    },

    loginButton: {
        width: "100%",
        backgroundColor: "#1DB954",
        padding: 16,
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 30,
    },

    loginButtonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },

    textPassaword: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 15,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },

    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
});
