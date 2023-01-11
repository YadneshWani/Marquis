import React from "react";

import {View,Text} from 'react-native';
import { BottomSheet } from "react-native-btr";

const Actions=()=>{
    return(
           <BottomSheet
             visible={false}
           >
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:"#ffffff"}}>
                    <Text>Action Menu</Text>
                </View>
            </View>
            
           </BottomSheet>
       
    )
}
export default Actions;