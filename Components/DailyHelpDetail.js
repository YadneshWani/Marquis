import React, { cloneElement } from "react";
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import call from 'react-native-phone-call';
const DailyHelpDetail=({route})=>{

    // console.log("from Daily Help Details" + route.params.contact);
    return(
        <View style={styles.container}>
            
            <View style={styles.detailContainer}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <Text style={styles.itemText}>{route.params.name}</Text>
                    <TouchableOpacity onPress={()=>{
                        const contact=route.params.contact.toString();
                        const arg={
                            number:contact,
                            prompt: true,
                        }
                        call(arg).catch(console.error)
                    
                    
                    }}>
                    <MaterialIcons name="local-phone" size={28} color="#00DB92" style={{margin:15}} /> 
                    </TouchableOpacity>    
                </View>
                <View> 
                        <Text style={{marginLeft:78,marginTop:-23}}>{route.params.contact}</Text>
                </View>

                <View style={{borderWidth:0.5,borderColor:'#D9D9D9',width:380,marginLeft:-15,marginTop:30}}></View>
                <Text style={{fontSize:18,color:"#6E6E6E",fontWeight:'500',marginLeft:20,marginTop:8}}>Work in 2 Houses</Text>
                <TouchableOpacity>
                    <View style={styles.householdButton}>
                        <Text style={{fontSize:18,color:"white",fontWeight:'700',alignItems:"center",marginTop:14}}>Add to Household</Text>
                    </View>
                </TouchableOpacity>
 
                
                
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
      detailContainer:{
        backgroundColor:"white",
        width:350,
        height:250,
        borderRadius:12,
        marginTop:12,
      },
      itemProfile:{
        width:58,
        height:58,
        backgroundColor:'#D9D9D9',
        borderRadius:100,
        marginLeft:12,
        marginTop:7,
    },
    itemText:{
        fontWeight:'700',
        lineHeight:18,
        fontSize:18,
        marginTop:20,
        marginLeft:8,
    },
    householdButton:{
        width:220,
        height:52,
        alignItems:"center",
        backgroundColor:"#6E815F",
        borderRadius:12,
        alignSelf:"center",
        marginTop:40
    }
});


export default DailyHelpDetail