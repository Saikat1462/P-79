import React,{Component} from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, Platform, Dimensions } from 'react-native'
import axios from "axios";

export default class DailyPicScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            apod:{}
        }
    }

    componentDidMount(){
        this.getAPOD()
    }

    getAPOD = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=OBNnXxUwE1XfZSFXHpe3uhI9vlgcaCJezIsJ79aO")
        .then(response=>{
            this.setState({apod:response.data})
        })
        .catch(error=>{
            Alert.alert(error.messages)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground
                source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy pictures of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer}
                    onpress={()=>Linking.openURL(this.state.apod.url).catch(err=>console.error("Couldn't load page",err))}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../assets/play-video.png')} style={{width:50, height:50}}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explantionText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    explantionText:{
        color:"white"
    },
    iconContainer:{
        flex:0.1
    }
});