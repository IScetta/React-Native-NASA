import { FC } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native"
import { PostImage as PostImageType } from "../types";
import PostImage from "../PostImage";


const LastFiveDaysImages:FC<{ postImages? :PostImageType[]}> = ({postImages})=>{


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Last Five Day</Text>
            <ScrollView style={styles.content}>
                {postImages?.map((postImage,index)=>(
                    <PostImage key={index} {...postImage}/>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical:8,

    },
    title:{
        color:"#fff",
        fontSize:16,
        marginBottom:18,
    },
    content:{
        paddingHorizontal:24,
    }

})

export default LastFiveDaysImages;