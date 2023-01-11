import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';

// import logoIcon from '../assets/logo.png';

const Login=({navigation})=>{
    return (
            <View style={styles.container}>
        <View style={styles.HeaderStyle}>
        <Image
          source={require('../assets/logo.png')}   
          style={styles.LogoStyle}   
        />
        <Text style={styles.textHeader}>Supersapiens Devlab</Text>

      </View>
      <Text style={styles.textBody}> Supersapiens Devlab Private Limited is a privately owned and managed company based in Pune.  </Text>
      <StatusBar style="auto" />


      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5} onPress={()=>{navigation.navigate('MainController')}}>
            <Image
              source={require('../assets/google.png')}
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}> Sign up with Google </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
            <Image
              source={require('../assets/github.png')}
              style={styles.ImageIconStyle}
            />
            <Text style={styles.TextStyle}> Sign up with GitHub </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.EmailButtonStyle} activeOpacity={0.5}>
            <Text style={styles.EmailTextStyle}> Sign up with email </Text>
      </TouchableOpacity>

      {/* <View style={styles.ButtonStyle}>
        <Button title='Sign up with Google'/>
      </View>
      <View style={styles.ButtonStyle}>
        <Button title='Sign up with GitHub'/>
      </View>
      <View style={styles.ButtonStyle}>
        <Button title='Sign up with email'/>
      </View> */}

    </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE7D7',  
    alignItems:'center'
  },
  textHeader:{
    fontSize:45,
    marginTop:60,
    fontWeight:'bold',
    color:'black',
  },
  textBody:{
    fontSize:20,
    color:'black',
    marginTop:10,
    marginHorizontal:20,
    marginBottom:50,
    textAlign:'center'
  },
  ButtonStyle:{
    marginBottom:20,
    borderRadius:10,
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:45,
    paddingRight:45,
    flexDirection:'row',
    alignItems:'center',
    
    backgroundColor:'white',
    color:'black',
  },
  TextStyle:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    
  },
  ImageIconStyle:{
    padding: 10,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  EmailButtonStyle:{
    marginBottom:20,
    borderRadius:10,
    paddingTop:24,
    paddingBottom:24,
    paddingLeft:70,
    paddingRight:70,
    flexDirection:'row',
    backgroundColor:'#002C9B',
    
  },
  EmailTextStyle:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    
  },
  HeaderStyle:{
    flexDirection:'row',
  },

  LogoStyle:{
    padding: 10,
    height: 50,
    width: 50,
    marginTop:64,
    
  }
});
        
export default Login;