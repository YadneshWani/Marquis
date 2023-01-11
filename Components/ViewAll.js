import React from "react";

import {View,Text,StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ViewAll=()=>{
    return(
        <ScrollView>
        <View style={styles.container} >
            <View style={{flexDirection:"row",marginTop:17,marginLeft:24,marginBottom:17,alignSelf:'left'}}>
                <Text style={{color:'#6E6E6E'}}>Filter</Text>
                <AntDesign  style={{marginRight:12,marginLeft:3,marginTop:2}}name="caretdown" size={12} color="black" />
                <Text style={{color:'#6E6E6E'}}>Date</Text>
                <AntDesign style={{marginLeft:3,marginTop:2}} name="caretdown" size={12} color="black" />
            </View>


            <View style={styles.items}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Delivery</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:14,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>LEFT</Text>
                            <Text style={{marginLeft:20,marginTop:0,color:'#6E6E6E',width:52,height:14,fontSize:12}}>12:00 am</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View><Text style={{width:40,height:14,marginTop:14,marginLeft:12,color:'#6E6E6E'}}>Name</Text></View>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:58,height:14,marginTop:14,marginLeft:6,color:'#6E6E6E'}}>ZOMATO</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" />
                    <Text style={{color:'#6E6E6E',marginLeft:7,}}>ALLOWED BY You</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:74}}>
                   <MaterialIcons name="local-phone" size={24} color="#00DB92" />
                    <Text style={{marginRight:45,color:'#6E6E6E',fontWeight:'700',marginTop:8}}>Wrong Entry</Text>
                </View>
            </View >




            <View style={styles.items}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Delivery</Text>
                        <View style={styles.DeniedTag}>
                            <Text style={{marginLeft:6,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DENIED</Text>
                            <Text style={{marginLeft:15,marginTop:0,color:'#6E6E6E',width:52,height:14,fontSize:12}}>12:00 am</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View><Text style={{width:40,height:14,marginTop:14,marginLeft:12,color:'#6E6E6E'}}>Name</Text></View>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:58,height:14,marginTop:14,marginLeft:6,color:'#6E6E6E'}}>ZOMATO</Text></View>
                </View>

                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" />
                    <Text style={{color:'#6E6E6E',marginLeft:7,}}>ALLOWED BY You</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:74}}>
                   <MaterialIcons name="local-phone" size={24} color="#00DB92" />
                    <Text style={{marginRight:45,color:'#6E6E6E',fontWeight:'700',marginTop:8}}>Wrong Entry</Text>
                </View>
            </View>  




            <View style={styles.items}>
            <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Delivery</Text>
                        <View style={styles.DeniedTag}>
                            <Text style={{marginLeft:6,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DENIED</Text>
                            <Text style={{marginLeft:15,marginTop:0,color:'#6E6E6E',width:52,height:14,fontSize:12}}>12:00 am</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View><Text style={{width:40,height:14,marginTop:14,marginLeft:12,color:'#6E6E6E'}}>Name</Text></View>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:58,height:14,marginTop:14,marginLeft:6,color:'#6E6E6E'}}>ZOMATO</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" />
                    <Text style={{color:'#6E6E6E',marginLeft:7,}}>ALLOWED BY You</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:74}}>
                   <MaterialIcons name="local-phone" size={24} color="#00DB92" />
                    <Text style={{marginRight:45,color:'#6E6E6E',fontWeight:'700',marginTop:8}}>Wrong Entry</Text>
                </View>
            </View>



            <View style={styles.items}>
            <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Delivery</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:14,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>LEFT</Text>
                            <Text style={{marginLeft:20,marginTop:0,color:'#6E6E6E',width:52,height:14,fontSize:12}}>12:00 am</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View><Text style={{width:40,height:14,marginTop:14,marginLeft:12,color:'#6E6E6E'}}>Name</Text></View>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:58,height:14,marginTop:14,marginLeft:6,color:'#6E6E6E'}}>ZOMATO</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Octicons name="person" size={16} color="black" />
                    <Text style={{color:'#6E6E6E',marginLeft:7,}}>ALLOWED BY You</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:74}}>
                   <MaterialIcons name="local-phone" size={24} color="#00DB92" />
                    <Text style={{marginRight:45,color:'#6E6E6E',fontWeight:'700',marginTop:8}}>Wrong Entry</Text>
                </View>
            </View>


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
    tag:{
        width:54,
        height:15,
        borderRadius:12,
        backgroundColor:'#6E6E6E',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row",
    },
    
    DeniedTag:{
        width:54,
        height:15,
        borderRadius:12,
        backgroundColor:'#FFC639',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row",
    },
    smallItemProfile:{
        width:28,
        height:28,
        backgroundColor:'#D9D9D9',
        borderRadius:100,
        marginLeft:6,
        marginRight:6,
        marginTop:10,
    }
});
export default ViewAll