import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
// import LoginScreen from './Login';
import ProfileScreen from './Profile';
import CommunityScreen from './Community';
import ActionScreen from './Actions';
import ServiceScreen from './Service';
// import { Navigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
    
  return (
    
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon:({focused,size,color})=>{
        let iconName;

        if (route.name === 'Home'){
          iconName=focused ? "ios-home" : "ios-home-outline";
          size=focused?size+5:size+5;
        }
        else if (route.name === 'Community'){
          iconName=focused ? "md-people-sharp" : "md-people-outline";
          size=focused?size+5:size+5;
        }
        else if (route.name === 'Actions'){
          iconName=focused ? "ios-add-circle" : "ios-add-circle";
          size=focused?size+35:size+35;
          color=focused?"#6E815F":"#6E815F";
        }
        else if (route.name === 'Service'){
          iconName=focused ? "briefcase" : "briefcase";
          size=focused?size+5:size+5;
        }
        else if (route.name === 'Profile'){
          iconName=focused ? "md-person-circle-sharp" : "md-person-circle-outline";
          size=focused?size+15:size+15;
        }
        return <Ionic name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor:'#6E815F',
      inactiveTintColor:'black',
      tabBarShowLabel:false,
      tabBarStyle:{height:90,}
      
    })}
   
      
  
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        {/* <Tab.Screen name="Login" component={LoginScreen} />  */}
        <Tab.Screen name="Community" component={CommunityScreen}/>
        <Tab.Screen name="Actions" component={ActionScreen} option={{headerShown:false}}
        listeners={({navigation})=>({
          tabPress:event=>{
            event.preventDefault();
            navigation.navigate("ActionBottomSheet");
          }
        })}
        />
        <Tab.Screen name="Service" component={ServiceScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
         
    </Tab.Navigator>
    
  );
};

export default MyTabs
