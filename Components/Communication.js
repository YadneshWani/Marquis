import React from "react";

import {View,Text,StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Communication=()=>{
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
                        <Text style={styles.itemText}>Discussion Subject</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DISCUSSION</Text>
                            <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>AUthor Name</Text>
                            <Text style={{marginLeft:8,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Date</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:124,height:16,marginTop:18,marginLeft:6,color:'#6E6E6E'}}>Comment Display</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Text style={{color:'#6E6E6E',marginLeft:38,}}>1 Comment</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="commenting-o" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="share" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Share</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4}}>Hide</Text>
                    </View>
                </View>
            </View >




            <View style={styles.items}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Discussion Subject</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DISCUSSION</Text>
                            <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>AUthor Name</Text>
                            <Text style={{marginLeft:8,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Date</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:124,height:16,marginTop:18,marginLeft:6,color:'#6E6E6E'}}>Comment Display</Text></View>
                </View>

                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Text style={{color:'#6E6E6E',marginLeft:38,}}>1 Comment</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="commenting-o" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="share" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Share</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4}}>Hide</Text>
                    </View>
                </View>
            </View>  




            <View style={styles.items}>
            <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Discussion Subject</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DISCUSSION</Text>
                            <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>AUthor Name</Text>
                            <Text style={{marginLeft:8,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Date</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:124,height:16,marginTop:18,marginLeft:6,color:'#6E6E6E'}}>Comment Display</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Text style={{color:'#6E6E6E',marginLeft:38,}}>1 Comment</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="commenting-o" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="share" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Share</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4}}>Hide</Text>
                    </View>
                </View>
            </View>



            <View style={styles.items}>
            <View style={{flexDirection:"row"}}>
                    <View style={styles.itemProfile}></View>
                    <View>
                        <Text style={styles.itemText}>Discussion Subject</Text>
                        <View style={styles.tag}>
                            <Text style={{marginLeft:8,color:'white',fontWeight:'700',fontSize:11,alignSelf:"center"}}>DISCUSSION</Text>
                            <Text style={{marginLeft:14,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>AUthor Name</Text>
                            <Text style={{marginLeft:8,marginTop:0,color:'#6E6E6E',width:80,height:14,fontSize:12}}>Date</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.smallItemProfile}></View>
                    <View><Text style={{width:124,height:16,marginTop:18,marginLeft:6,color:'#6E6E6E'}}>Comment Display</Text></View>
                </View>
                <View style={{marginLeft:12,flexDirection:"row"}}>
                    <Text style={{color:'#6E6E6E',marginLeft:38,}}>1 Comment</Text>
                </View>
                <Text style={{color:'#D9D9D9'}}>_______________________________________________</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:72}}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="commenting-o" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Comment</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="share" size={24} color="#6E6E6E" />
                        <Text style={{marginLeft:4,marginTop:4}}>Share</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginLeft:4,marginTop:4}}>Hide</Text>
                    </View>
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
        width:90,
        height:15,
        borderRadius:12,
        backgroundColor:'#1379D7',
        marginTop:5,
        marginLeft:8,
        flexDirection:"row",
    },
    
    smallItemProfile:{
        width:28,
        height:28,
        backgroundColor:'#D9D9D9',
        borderRadius:100,
        marginLeft:12,
        marginRight:6,
        marginTop:10,
    }
});
export default Communication