import { View, Text, Image, StyleSheet } from "react-native"; 


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.imageLogo} source={require("../../../assets/Nasa-logo-png.png")}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12
    },
    leftContainer:{
        flex: 1,
        alignItems: "flex-start"

    },
    title:{
        fontSize:20,
        color: "#fff"
    },
    rightContainer:{
        flex: 1,
        alignItems: "flex-end"
    },
    imageLogo:{
        width: 60,
        height:60,
    }
})

export default Header;