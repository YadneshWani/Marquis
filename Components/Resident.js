import React from "react";

import {View,Text, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownResident from "./DropDownResident";

const Resident=()=>{

const data=[
    {
        id:1,
        title:'1st Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:2,
        title:'2nd Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:3,
        title:'3rd Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:4,
        title:'4th Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:5,
        title:'5th Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:6,
        title:'6th Floor',
        name:'Lorem Ipsum',
        total:5
    },
];

    return(
        <SafeAreaView style={styles.container}>
            <View >
                <View style={styles.HeaderStyle}>
                    <View style={styles.Profile}>
                        
                    </View>
                    <View>
                        <Text style={{fontSize:24,fontWeight:'500',marginTop:12,marginLeft:12}}>Your Name</Text>
                        <Text style={{fontSize:24,fontWeight:'500',marginLeft:12,color:'#434F39'}}>BA/704</Text>
                        <Text style={{fontWeight:'400',marginLeft:12,fontSize:14}}>Resident</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>(
                        <DropDownResident title={item.title} name={item.name} id={item.id}/>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#DEE7D7',  
      alignItems:"center",
      
      

    },
    HeaderStyle:{
        width:342,
        height:110,
        backgroundColor:'white',
        borderRadius:12,
        marginBottom:20,
        flexDirection:"row",
    },
    Profile:{
        width:70,
        height:70,
        backgroundColor:'#D9D9D9',
        borderRadius:100,
        marginLeft:12,
        marginTop:12,
    },
})
export default Resident;


