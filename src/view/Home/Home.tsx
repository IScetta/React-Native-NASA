import { View, StyleSheet} from "react-native"
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../components/types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home =() =>{
    const [todayImage, setTodayImage] = useState<PostImage>({})
    const [lastFiveDaysImage, setLasFiveDaysImage] = useState<PostImage[]>([])


    useEffect(()=>{
        const loadTodayImage = async()=>{
            try {
                const todayImageRes = await fetchApi();
                setTodayImage(todayImageRes)
            } catch (error) {
                setTodayImage({})
            }
        }

        const loadLast5DaysImage = async ()=>{
            try {
                const date = new Date();
                const todayDate = format(date, `yyyy-MM-dd`)
                const fiveDaysAgoDate = format(sub(date,{days:5}),"yyyy-MM-dd")
                
                const lastFiveDaysImageRes = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`)
                setLasFiveDaysImage(lastFiveDaysImageRes)
            } catch (error) {
                console.error(error)
            }
        }

        loadTodayImage().catch(null)
        loadLast5DaysImage().catch(null)
    },[])


    return(
        <View style={styles.container}>
            <Header/>
            <TodayImage {...todayImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImage}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor:"rgba(7,26,93,255)",        
    }
})

export default Home;