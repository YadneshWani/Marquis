import React,{useRef} from "react";

import {View,Text} from 'react-native';
import { BottomSheet } from "react-native-btr";

const ActionBottomSheet=()=>{
    const sheetRef=useRef<BottomSheet>(null);
    const snapPoints=["40%"];
    return(
           <BottomSheet
           enablePanDownToClose={true}
            snapPoints={snapPoints}
             visible={true}
           >
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:"#ffffff"}}>
                    <Text>Action Menu</Text>
                </View>
            </View>
            
           </BottomSheet>
       
    )
}
export default ActionBottomSheet;