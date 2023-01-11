import React from "react";

import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const persons = [
    {
      id: "1",
      name: "Swimming Pool",
      time:'7am-8pm'
    },
    {
      id: "2",
      name: "Club House",
      time:'7am-8pm'
    },
    {
      id: "3",
      name: "Gym",
      time:'7am-8pm'
    },
    {
      id: "4",
      name: "Indoor Games",
      time:'7am-8pm'
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
const Amemities=()=>{
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
                        <View>
                         <Text style={styles.item}>{item.name}</Text>  
                         <Text style={{marginLeft:22,fontSize:12,color:'#6E6E6E'}}>Timing: {item.time}</Text>
                         </View>         
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
        // marginBottom:18,
        
    }
});
export default Amemities