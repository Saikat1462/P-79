import React,{Component} from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native'
export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>

                <View style={styles.imageBar}>    
                <Image source={require("../assets/main-icon.png")} style={styles.image}/>
                </View>
                
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                }}>
                    <Text style={styles.routeText}>DailyPic</Text>
                    <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}/>
                </TouchableOpacity >

                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate("SpaceCrafts")
                }}>
                    <Text style={styles.routeText}>SpaceCraft</Text>
                    <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}>
                    <Text style={styles.routeText}>StarMap</Text>
                    <Image source={require("../assets/star_map.png")} style={styles.iconImage}/>
                </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
} 

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    imageBar:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center'
    },
    routeCard:{
        flex:0.15,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
        borderWidth:2,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:"black",
        marginTop:20,
        paddingLeft:30
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    },
    bgDigit:{
        position:'absolute',
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:'absolute',
        height:120,
        width:120,
        resizeMode:'contain',
        top:-30,
        right:20,
    },image:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        marginTop:50
    }
})