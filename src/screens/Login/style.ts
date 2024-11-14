import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        padding: 25,
    },

    logoImage: {
        alignSelf: "center",
        width: 60,
        height: 60,
    },

    title: {
        fontSize: 35,
        color: "#FFFFFF",
        marginBottom: 24,
        marginTop: 15,
        fontWeight: "bold",
        textAlign: "center",
    },

    subtitle: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "left",
        marginBottom: 10,
        marginTop: 15,
        fontWeight: "bold",
    },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: "100%",
        backgroundColor: "#fff",
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
