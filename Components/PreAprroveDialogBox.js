import React, {useState} from "react";

import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Modal } from "react-native-paper";



const Once = [
    {
      id: "1",
      name: "Contacts",
    },
    {
      id: "2",
      name: "Rencent Invites",
    },
    {
      id: "3",
      name: "Enter Manually",
    },
]
const PreAprroveDialogBox=()=>{
    const [modalVisible, setModalVisible] = useState(false); 
    return(
        // <Modal
        //     animationType="slide"
        //     transparent={true}
        //     visible={modalVisible}
                    
        //     onRequestClose={() => {
        //     Alert.alert("Modal has been closed.");
        //     setModalVisible(!modalVisible);
                    
        //     }} 
        // >
        <View style={styles.container}>
            
            <View style={{flexDirection:"row",marginTop:8,justifyContent:"space-between"}}>
                <TouchableOpacity>
                    <Text style={{marginLeft:10,color:'#6E6E6E'}}>Once</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{marginLeft:50,color:'#6E6E6E'}}>Frequently</Text>
                </TouchableOpacity>
            
                <TouchableOpacity>
                    <EvilIcons style={{marginLeft:100}}name="close" size={24} color="black"  />
                </TouchableOpacity>
            
            </View>
            <Text style={{color:'#D9D9D9'}}>________________________________________</Text>
            <View>
                <Text style={{color:'#6E6E6E'}}>Allow my guest once <Text style={{color:'#1F66BA',textDecorationLine:"underline"}}>Today</Text></Text>
                <Text style={{marginTop:14,color:'#1F66BA',textDecorationLine:"underline",alignSelf:"center"}}>Advanced Options</Text>
                <Text style={{marginTop:9,color:'#6E6E6E',alignSelf:"center"}}>SELECT GUEST FROM</Text>
            </View>
            <Text style={{color:'#D9D9D9'}}>________________________________________</Text>
            <FlatList
      //numColumns={1}
                 keyExtractor={(item)=>item.id}
                 data={Once} 
                 renderItem={({item}) => (
                <View>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}  >
                         <Text style={styles.item}>{item.name}</Text>    
                         <MaterialIcons  style={{marginTop:0,marginRight:18}}name="arrow-forward-ios" size={18} color="#434F39" />                 
                    </TouchableOpacity>
                    <Text style={{color:'#D9D9D9'}}>________________________________________</Text>
                </View>
                
                 )}
             />
        </View>
        // </Modal>
    )
}

export default PreAprroveDialogBox

const styles = StyleSheet.create({
    container: {
        width:300,
        height:300,
      backgroundColor: 'white',
      borderRadius:12,  
      alignItems:"center",
      marginTop:150,
      margin:50,
      
      

    },
    item:{
        color:'black',        
        justifyContent:"space-between",        
        marginLeft:22,    
    }
});