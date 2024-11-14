import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191414",
        padding: 16,
        
    },

    header: {
        display: "flex",
        padding: 0,
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 60,
    },

    headerIcons: {
        flexDirection: "row",
    },

    headerUserImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#555",
        marginRight: 5,
    },

    headerCategoryBtn: {
        backgroundColor: "#333",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 5,
    },

    headerCategoryBtn1: {
        backgroundColor: "#1ed760",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 5,
    },

    headerCategoryText: {
        color: "#fff",
    },

    headerCategoryText1: {
        color: "#000",
    },

    
    highlightsSection: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    
    
    newReleaseContainer: {
        marginTop: 0,
        padding: 16,
        margin: -15,
    },

    newReleaseArtistInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },

    newReleaseArtistImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },

    newReleaseArtistText: {
        color: "#AAAAAA",
        fontSize: 14,
    },

    newReleaseArtistName: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },

    newReleaseBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1D1D1D",
        borderRadius: 5,
        marginBottom: 8,
    },

    newReleaseImage: {
        width: 120,
        height: 120,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 12,
    },

    newReleaseInfo: {
        flex: 1,
    },

    newReleaseTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    newReleaseDescription: {
        color: "#AAAAAA",
        fontSize: 12,
    },

    newReleaseIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 12,
        marginRight: 15,
    },


    playlistContainer: {
        paddingLeft: 20,
        paddingBottom: 20,
    },

    card: {
        width: 150,
        marginRight: 15,
    },

    cardImage: {
        width: "100%",
        height: 150,
    },

    cardTitle: {
        color: "#aaa",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 10,
    },

    cardArtists: {
        color: "#aaa",
        fontSize: 12,
    },

    sectionTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 10,
    },


    musicRow: {
        position: "absolute",
        bottom: 70,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#540c08",
        padding: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        marginBottom: -9,
    },

    musicRowImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 12,
    },

    musicRowInfo: {
        flex: 1,
    },

    musicRowTitle: {
        color: "#FFFFFF",
        fontSize: 16,
    },

    musicRowArtist: {
        color: "#AAAAAA",
        fontSize: 12,
    },

    playRowButton: {
        padding: 8,
    },

    iconRowButton: {
        marginLeft: 20,
    },

    
    navigationBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
    },

    navItem: {
        alignItems: "center",
    },

    navText: {
        color: "#FFFFFF",
        fontSize: 12,
        marginTop: 0,
    },
});
