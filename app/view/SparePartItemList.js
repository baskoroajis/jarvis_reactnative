import {View,Text, StyleSheet, Image,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
// import {  } from 'react-native-gesture-handler';

const cellItem = (props) =>{
    return ( 
            <TouchableWithoutFeedback onPress={props.onPress}>
                 <View style={styles.cellContainerCell} >
                    <View style={styles.imageContainerStyle}>
                        <Image style={styles.imgThumbnail} source={{uri: props.image}}></Image>
                    </View>
                    <Text style={styles.textProductNameStyle} >{props.name}</Text>
                    <Text style={styles.textPriceStyle} >{"Rp. "+props.price}</Text>
                 </View>
             
            </TouchableWithoutFeedback>
            

        // </View>
    
    );
};

export default cellItem


const styles = StyleSheet.create({
    cellContainerCell : {
        alignItems : "stretch",
        flex : 1,
        // backgroundColor : "#621312",
        margin : 5,
        marginLeft : 10,
        marginRight : 10

    },
    
    imageContainerStyle : {
        flexGrow : 1,
        height : 165,
        borderRadius : 5,
        borderColor : "#c7c7c7",
        borderWidth : 1,
        
    },  
    textProductNameStyle : {
        marginTop : 11,
        marginLeft : 8,
        fontSize : 15,
        fontWeight : "bold",
    },
    textPriceStyle : {
        color : "#ff5811",
        marginTop : 2,
        marginBottom : 11,
        marginLeft : 8,
        fontSize : 14,
      
        
    },
    
    imgThumbnail : {
        flex : 1
    }
})