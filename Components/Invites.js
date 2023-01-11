import React from "react";
import QRCode from 'react-native-qrcode-svg';
import QRCodeDisplay from '../assets/Images/QRCodeDisplay.png';
import {View,Text,StyleSheet, ImageBackground} from 'react-native';

const Invites=()=>{
    return(
        <View>
            <View style={styles.container}>
                <Text style={{fontWeight:'700',alignSelf:"center",fontSize:18,marginTop:67}}>User Name</Text>
                <Text style={{alignSelf:"center",fontSize:18,marginTop:4}}>has invited you to </Text>
                <Text style={{fontWeight:'700',alignSelf:"center",fontSize:18,marginTop:4}}>Flat No.102</Text>
                <Text style={{fontWeight:'700',alignSelf:"center",fontSize:18,marginTop:4}}>Society Name</Text>
                <Text style={{alignSelf:"center",marginTop:4}}>on <Text style={{fontWeight:'700',alignSelf:"center",fontSize:18,marginTop:4}}>01-Sept-2022</Text></Text>
                
            </View>

            <View style={styles.QRCodeStyle}>
                <QRCode
                    value={'123456'}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    />
            </View>

            <View >
                <ImageBackground source={QRCodeDisplay} resizeMode="cover" style={styles.QRcodeNumStyle}>
                    <Text style={{fontSize:48,fontWeight:'700',color:'white',alignSelf:"center"}}>123456</Text>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:388,
        height:222,
        backgroundColor:'#DEE7D7',
    },
    QRCodeStyle:{
        alignSelf:"center",
        marginTop:34,
    },
    QRcodeNumStyle:{
        width:240,
        height:80,
        marginTop:59,
        borderRadius:12,
       
        alignSelf:"center"
    }

});

export default Invites