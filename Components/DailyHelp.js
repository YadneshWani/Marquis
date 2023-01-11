import React from "react";

import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const persons = [
    {
      id: "1",
      name: "Maid",
    },
    {
      id: "2",
      name: "Watchman",
    },
    {
      id: "3",
      name: "Dilevery Person",
    },
    {
      id: "4",
      name: "Lorem Ipsum",
    },
    {
      id: "5",
      name: "Lorem Ipsum",
    },
    {
        id:"6",
        name:"Lorem Ipsum"
    }
]
const DailyHelp=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.ListItem}>
            <FlatList
      //numColumns={1}
                 keyExtractor={(item)=>item.id}
                 data={persons} 
                 renderItem={({item}) => (
                <View>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}  >
                         <Text style={styles.item}>{item.name}</Text>    
                         <MaterialIcons  style={{marginTop:18,marginRight:18}}name="arrow-forward-ios" size={24} color="#434F39" />                 
                    </TouchableOpacity>
                    <Text style={{color:'#D9D9D9'}}>_____________________________________________</Text>
                </View>
                
                 )}
             />
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#DEE7D7',
      alignItems:"center"
    },
    ListItem:{
        width:338,
        height:420,
        backgroundColor:'white',
        borderRadius:12,
        marginTop:12,
    },
    item:{
        fontSize:18,
        color:'#6E6E6E',
        lineHeight:18,
        justifyContent:"space-between",
        marginTop:18,
        marginLeft:22,
        marginBottom:18,
        
    }
});
export default DailyHelp