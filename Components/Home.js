import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,View,Text, ScrollView, TouchableOpacity,ImageBackground,Image,Modal,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "./Header";
import PreAprroveDialogBox from "./PreAprroveDialogBox";
import MainController from './MainController';
import background from '../assets/Images/Background.png';
import { Octicons } from '@expo/vector-icons';
import permittedUser from '../assets/Images/PreApprove.png';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ProfileScreen from './Profile';
import CommunityScreen from './Community';
import ActionScreen from './Actions';
import DirectoryScreen from './Service';

import { NavigationContainer } from "@react-navigation/native";





const Home=({navigation})=>{

const [modalVisible, setModalVisible] = useState(false);
    return(
           <SafeAreaView> 
            <Header/>
            <ScrollView>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    
                    }}
            >
                    <PreAprroveDialogBox/>
            {/*        <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                    </View>*/}
            </Modal>
            <View style={styles.container}>
            <View style ={styles.VisitorsContainer}>
                <Text style={styles.Headings}>Visitors</Text>

                <View style={{flexDirection:"row",alignSelf:'left'}}> 
                <TouchableOpacity onPress={()=>{navigation.navigate('DailyHelp')}}>
                    <ImageBackground source={background} resizeMode="cover" style={styles.VisitorButtons}>
                        <Octicons name="person-add" size={24} color="white" style={{alignSelf:"center"}}/>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <ImageBackground source={background} resizeMode="cover" style={styles.VisitorButtons}>
                        <Image source={permittedUser} style={{width:38,height:38,color:'white'}}></Image>
                    </ImageBackground>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{navigation.navigate('Invites')}}>
                    <ImageBackground source={background} resizeMode="cover" style={styles.VisitorButtons}>
                        <MaterialCommunityIcons name="email-outline" size={28} color="white" />
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('ViewAll')}}>
                    <ImageBackground source={background} resizeMode="cover" style={styles.VisitorButtons}>
                        <Ionicons name="md-eye-outline" size={26} color="white" />
                    </ImageBackground>
                </TouchableOpacity>
                </View>

                <View style={{flexDirection:"row",alignSelf:'left'}}>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Add Daily Help</Text>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Pre Approve</Text>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Invites</Text>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,   }}>View All</Text>            
                </View>



            </View>
                <Text style={styles.NoticeHeading}>Noticeboard</Text>

            <View style={styles.NoticeContainer}>
                <Text style={{color:'#585858', alignSelf:'left',marginLeft:8}}>Lorem ipsum dolor ci et. Dummy text.</Text>
            </View>

            <View style={styles.ServiceContainer}>
                <Text style={styles.Headings}>Services</Text>
                <View style={{flex :1,flexDirection:"row", justifyContent:"center",alignContent:"center",marginLeft:50,}}>
                        <TouchableOpacity style={{marginTop:0,flex:1}} onPress={()=>{navigation.navigate('Communication')}}>
                            <MaterialCommunityIcons  name="message-processing-outline" size={40} color="#434F39" /> 
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('HelpDesk')}}>
                            <Feather name="help-circle" size={40} color="#434F39"  /> 
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('EmergencyNumber')}}>    
                            <Feather name="alert-triangle" size={40} color="#434F39" />
                        </TouchableOpacity>  
                </View>

                <View style={{flex :1,flexDirection:"row",marginLeft:0,}}>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:22}}>Communications</Text>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:18}}>Help Desk</Text>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginRight:10}}>Emergency NO.s</Text>
                </View>

                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginLeft:50}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('Resident')}}>
                        <FontAwesome5  name="building" size={40} color="#434F39" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1}}>
                        <Ionicons name="document-outline" size={40} color="#434F39" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('Amenities')}}>
                        <Feather  name="alert-triangle" size={40} color="#434F39" />
                    </TouchableOpacity>
                       
                </View>

                <View style={{flex :1,flexDirection:"row",marginLeft:0,}}>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:45,}}>Resident</Text>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginRight:0}}>Document</Text>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginRight:12}}>Amenities</Text>
                </View>

                
                    <View style={{flex :1,flexDirection:"row",marginLeft:50}}>
                            <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('DailyHelp')}}>
                                <MaterialCommunityIcons  name="van-utility" size={40} color="#434F39" />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{flex:1}}>
                                <ImageBackground  source={background} resizeMode="cover" style={{width:40,height:40,justifyContent:"center",alignItems:"center"}}>
                                    <MaterialIcons  name="arrow-forward-ios" size={24} color="white" />
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                    </View>

                    <View style={{flex :1,flexDirection:"row",marginLeft:0,}}>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:40,}}>Daily Help</Text>
                    <Text style={{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:28,}}>View All</Text>
                    <Text style= {{flex:1,fontWeight:'400',fontSize:12,lineHeight:14,marginLeft:40,}}></Text>
                    
                </View>
                
                



            </View>

            <View style={styles.PaymentContainer}>
                <Text style={styles.Headings}>Payment</Text>

                <View style={{flexDirection:"row",alignSelf:'left'}}> 
                    <TouchableOpacity style={styles.PaymentButtons}>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.PaymentButtons}>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.PaymentButtons}>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row",alignSelf:'left'}}>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Society Charges</Text>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Utility Payments</Text>
                        <Text style={{width:54,height:30,fontSize:12,marginLeft:8,textAlign:"center",marginTop:3,}}>Rent</Text>         
                </View>
            </View>   
                    
        </View>
        
        
        {/* <NavigationContainer independent={true}>
        <Tab.Navigator
        initialRouteName="Home " 
        >
        {/* <Tab.Screen name="Home" component={this}/> */}
        {/* <Tab.Screen name="Login" component={LoginScreen} />  */}
        {/* <Tab.Screen name="Community" component={CommunityScreen}/>
        <Tab.Screen name="Actions" component={ActionScreen}/>
        <Tab.Screen name="Directory" component={DirectoryScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
         
    </Tab.Navigator>
    </NavigationContainer>
         */}
         
        </ScrollView>

        </SafeAreaView>
        

       
            
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#DEE7D7',  
      alignItems:"center",
      //opacity:0.5,
      //backgroundColor: rgba(255, 0, 0, 0.2)
      

    },

    VisitorsContainer:{
        backgroundColor:'white',
        width:352,
        height:109,
        borderRadius:12,
        alignItems:"center",
        marginTop:20,
        shadowOffset:{width:-2,height:'0.12'},
        shadowOpacity:'0.12',
        //flexDirection:'row',
    },

    Headings:{
        fontWeight:'700',
        fontFamily:'Gilroy',
        fontStyle:'normal',
        marginLeft:8,
        fontSize:16,
        lineHeight:24,
        alignSelf:'left',
    },
    NoticeHeading:{
        fontWeight:'700',
        fontFamily:'Gilroy',
        fontStyle:'normal',
        marginLeft:26,
        fontSize:16,
        lineHeight:24,
        alignSelf:'left',
        marginTop:18
    },
    NoticeContainer:{
        backgroundColor:'#FFF4D2',
        width:352,
        height:77,
        borderRadius:12,
        alignItems:"center",
        margin:16,
        marginTop:8,
        borderWidth:1,
        borderColor:'#CABE9B'

   },

   ServiceContainer:{
        backgroundColor:'white',
        width:352,
        height:282,
        borderRadius:12,
        //borderWidth:1,
        alignItems:"center",
        margin:16,
        marginTop:8,
        shadowOffset:{width:-2,height:'0.12'},
        shadowOpacity:'0.12',
        justifyContent:"center"
   },
   PaymentContainer:{
        backgroundColor:'white',
        width:352,
        height:113,
        borderRadius:12,
        alignItems:"center",
        marginTop:16,
        marginBottom:16,
        shadowOffset:{width:-2,height:'0.12'},
        shadowOpacity:'0.12',
   },

   VisitorButtons:{
    width:40,
    height:40,
    backgroundColor:'#6E815F',
    borderRadius:12,
    alignSelf:'left',
    marginLeft:12,
    marginTop:5,
    marginRight:12,
    justifyContent:"center",
    alignItems:"center"
    
   },
   NavigationBar:{

    backgroundColor:'white',
    width:388,
    height:56,
   
    alignItems:"center",
    marginTop:8,

   },
   PaymentButtons:{

    width:54,
    height:40,
    borderRadius:4,
    backgroundColor:'#D9D9D9',
    marginLeft:8,
    marginTop:2,


   },
   Header:{
    backgroundColor:'white',
    width:388,
    height:48,
    
   },
   centeredView: {
    width:320,
    height:300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 35,
    width:300,
    height:300,
    alignItems: "center",
    shadowColor: "#000",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  
buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
   
   
});
export default Home

