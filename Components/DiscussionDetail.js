import React from "react";
import {View,StyleSheet} from 'react-native';
const DiscussionDetail=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.DiscussionContainer}>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#DEE7D7',  
        alignItems:"center",


    },
    DiscussionContainer:{
        width:328,
        height:254,
        borderRadius:12,
        backgroundColor:"white",
        
    }

})
export default DiscussionDetail