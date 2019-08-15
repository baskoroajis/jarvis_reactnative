import React, {Component} from 'react'
import {StyleSheet, View, Text,FlatList} from 'react-native'
import CellItem from './SparePartItemList'
import  dummyData from '../dummies/SparePartList.json'

export default class SparePartListPage extends Component{

    state = {
        data : dummyData
    };
    
    _moveToDetailPage(item){
        this.props.navigation.navigate(
			'ProductDetail', {productDetail: item});
    }

    _renderItem = ({item}) =>{
        //{item.images[0].url}
        var imgUrl  = "http://jarvis.dev.mobayar.com/images/products/1564545631655.jpg";
        // if (typeof item.images[0].url !== 'undefined') {
        //     // color is undefined
        //     imgUrl = item.images[0].url
        // }
        return <CellItem name={item.name} price={item.price} image={imgUrl} onPress={() =>this._moveToDetailPage(item)}></CellItem>
    }

    render(){
        return (
            <View  style={styles.listContainerStyle}>
                <FlatList renderItem={this._renderItem} data={this.state.data} numColumns="2"
                style={styles.flatListStyle}
               />   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainerStyle : {
        alignItems: "stretch",
        justifyContent: "center",
        paddingTop: 10
        // paddingTop : "5"
    },

    flatListStyle : {
       margin : 10,
       
    }
})