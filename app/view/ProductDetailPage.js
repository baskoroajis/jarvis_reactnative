import React,{Component} from 'react'
import {Text, StyleSheet,View,Image} from 'react-native'


export default class ProductDetailPage extends Component{

    render(){
        return(
        <View style={styles.viewContainerStyle}>
            <Image style={styles.imageProductStyle} source={{uri: "http://jarvis.dev.mobayar.com/images/products/1564545631655.jpg"}}></Image>
            <Text style={styles.textProductnameStyle}>Jarvis</Text>
            <View style = {styles.separatorStyle}></View>
            <View style ={styles.desriptionContainerStyle}>
                <Text style={styles.textInfoProductStyle}>Info Produk</Text>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Motor</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Batrei</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Max Speed</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Max Distance</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Max Load</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
                <View style={styles.descriptionItemContainerStyle}>  
                    <Text style={styles.textInfoTitle}>Tire</Text> 
                    <Text style={styles.textInfoDetail}>350 Watt</Text> 
                </View>
            </View>
            <View style = {styles.separatorStyle}></View>
            <View>
                
            </View>
        </View>
        )
        
    }
}


styles = StyleSheet.create({
    viewContainerStyle : {
        flex : 1,
        padding : 10
        
    },
    imageProductStyle : {
        height : 200,
        width : 350,
        alignSelf : "center"
    },
    textProductnameStyle :{
        fontSize : 20,
        fontWeight : "bold",
        marginLeft: 15,
        color : "#27293f"
    },
    separatorStyle :{
        height : 1.2,
        backgroundColor : "#c7c7c7",
        marginLeft : 30,
        marginRight : 30,
        marginTop : 15,
        marginBottom : 15,
        // paddingRight : 30,
        opacity : 0.5
        
    },
    desriptionContainerStyle: {
        marginLeft: 15,
    },
    descriptionItemContainerStyle : {
        flexDirection:"row",
        alignItems:"flex-start",
        flexGrow : 1,
        marginTop : 5,
        marginBottom : 5,
    },
    textInfoTitle : {
        flex : 0.5,
        fontSize : 17,
       
    },
    textInfoDetail : {
        alignSelf : "flex-end",
        flex : 0.5,
        fontSize : 17,
        backgroundColor:"#ffffff"

    },
    textInfoProductStyle : {
        fontSize : 20,
        fontWeight : "bold",
        color : "#27293f",
        marginBottom : 20,
    }
    
    
})