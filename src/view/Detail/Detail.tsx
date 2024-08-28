import { Text, View,StyleSheet, Image, ScrollView } from "react-native"
import { useRoute } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../components/types";
import Header from "../../components/Header";



const Detail = ()=>{
    const { params:{title,url,explanation,date} } =useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: url}}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.containerExplanation}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor:"rgba(7,26,93,255)",        
    },
    content:{
        flex: 1,
        backgroundColor: "#2c449d",    
        borderRadius:32,
        marginVertical:24,
        padding:16,
    },
    image:{
        width:"100%",
        height:"50%",
        borderColor:"#fff",
        borderRadius:32,
        borderWidth:2,
        marginBottom:16,
    },
    title:{
        color:"#fff",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:16,
    },
    date:{
        color:"#fff",
        fontSize:16,
    },
    containerExplanation:{
        marginVertical:16,

    },
    explanation:{
        color:"#fff",
        fontSize:16,
    },
     
})

export default Detail