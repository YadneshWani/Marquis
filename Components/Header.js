import React from "react";
import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function Header() {
    return (
    
        <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderTitle}>BA/704</Text>
                <View style={{flexDirection:'row'}}>
                    <Feather style={{marginTop:10,marginRight:10}}name="search" size={24} color="black" />
                    <TouchableOpacity>
                        
                        <View style={styles.SOSButton}>
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={18} color="white" />
                            <Text style={{fontWeight:'700',color:'white',}}>SOS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    
    
    );
  }

  const styles=StyleSheet.create({
    HeaderContainer:{
        width:'100%',
        height:49,
        backgroundColor:'white',
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    HeaderTitle:{
        fontSize:20,
        fontWeight:'700',
        marginTop:10,
        marginLeft:8,
        //alignSelf:'left'
        
        
    },
    SOSButton:{
        width:54,
        height:28,
        backgroundColor:'#FF3D71',
        borderRadius:4,
        alignContent:"flex-end",
        marginTop:9,
         marginRight:15,
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"row"
        
    }

  });

  export default Header