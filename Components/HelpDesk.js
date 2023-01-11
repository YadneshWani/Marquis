import React from "react";

import {View,Text,StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HelpDesk=()=>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View  >
            <View style={{flexDirection:"row",marginTop:17,marginLeft:24,marginBottom:17,alignSelf:'left'}}>
                <Text style={{color:'#6E6E6E'}}>Type</Text>
                <AntDesign  style={{marginRight:12,marginLeft:3,marginTop:2}}name="caretdown" size={12} color="black" />
                <Text style={{color:'#6E6E6E'}}>Category</Text>
                <AntDesign style={{marginLeft:3,marginTop:2}} name="caretdown" size={12} color="black" />
                <Text style={{color:'#6E6E6E',marginLeft:8}}>Status</Text>
                <AntDesign style={{marginLeft:3,marginTop:2}} name="caretdown" size={12} color="black" />
            </View>


            <View style={styles.items}>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={styles.itemText}>Car Parking</Text>
                        <View style={{flexDirection:"row"}}>
                            <View style={styles.newTag}>
                                <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>NEW</Text>
                            </View>
                            <View style={styles.urgentTag}>
                                <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>URGENT</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:6}}>
                                <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:60,height:14,fontSize:12}}>12:00 am</Text>
                                <Text style={{marginLeft:0,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Request ID 7</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons name="error-outline" size={22} color="black" style={{marginLeft:12,marginTop:8}}/>
                    <Text style={{width:150,height:16,marginTop:10,marginLeft:6,color:'#6E6E6E'}}>Lorem ipsum, dolor ci et</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" style={{marginLeft:16,marginTop:8}}/>
                    <Text style={{color:'#6E6E6E',marginLeft:6,marginTop:10}}>RAISED BY Your Name</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4,fontSize:16,color:'#6E6E6E',fontWeight:'700'}}>Resolve</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        
                        <Text style={{marginLeft:4,marginTop:4,fontSize:16,color:'#6E6E6E',fontWeight:'700'}}>Comment</Text>
                    </View>
                </View>
            </View >



            <View style={styles.items}>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={styles.itemText}>Car Parking</Text>
                        <View style={{flexDirection:"row"}}>
                            <View style={styles.resolveTag}>
                                <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>RESOLVED</Text>
                            </View>
                            <View style={styles.urgentTag}>
                                <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>URGENT</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:6}}>
                                <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:60,height:14,fontSize:12}}>12:00 am</Text>
                                <Text style={{marginLeft:0,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Request ID 7</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons name="error-outline" size={22} color="black" style={{marginLeft:12,marginTop:8}}/>
                    <Text style={{width:150,height:16,marginTop:10,marginLeft:6,color:'#6E6E6E'}}>Lorem ipsum, dolor ci et</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" style={{marginLeft:16,marginTop:8}}/>
                    <Text style={{color:'#6E6E6E',marginLeft:6,marginTop:10}}>RAISED BY Your Name</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4,fontSize:16,color:'#6E6E6E',fontWeight:'700'}}>Resolve</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        
                        <Text style={{marginLeft:4,marginTop:4,fontSize:16,color:'#6E6E6E',fontWeight:'700'}}>Comment</Text>
                    </View>
                </View>
            </View >
            <TouchableOpacity>
                <View style={styles.raiseComment}>
                    <Text style={{alignSelf:"center",margin:10,color:'#FFFFFF',fontWeight:'700',fontSize:16}}>RAISE COMMENT</Text>
                </View>
            </TouchableOpacity>
    
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#DEE7D7',  
      alignItems:"center",
      
      

    },
    items:{
        width:352,
        height:170,
        backgroundColor:'white',
        borderRadius:12,
        marginTop:8,
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
    newTag:{
        width:40,
        height:15,
        borderRadius:12,
        backgroundColor:'#FBBF24',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row",
    },

    urgentTag:{
        width:60,
        height:15,
        borderRadius:12,
        backgroundColor:'#FF3D71',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row", 
    },
    resolveTag:{
        width:75,
        height:15,
        borderRadius:12,
        backgroundColor:'#0CAB7B',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row", 
    },
    raiseComment:{
        width:174,
        height:41,
        borderRadius:12,
        backgroundColor:'#6E815F',
        margin:80,
        marginTop:250,
    }
});
export default HelpDesk