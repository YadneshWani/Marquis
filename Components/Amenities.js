import {useState,useEffect} from "react";

import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator } from "react-native-paper";
import { getAmenityData } from "../Services/AmenityRequest";

const persons = [
    {
      id: "1",
      name: "Swimming Pool",
      time:'7am-8pm'
    },
    {
      id: "2",
      name: "Club House",
      time:'7am-8pm'
    },
    {
      id: "3",
      name: "Gym",
      time:'7am-8pm'
    },
    {
      id: "4",
      name: "Indoor Games",
      time:'7am-8pm'
    },
    {
      id: "5",
      name: "Lorem Ipsum",
    },
    {
        id:"6",
        name:"Lorem Ipsum"
    }
]
const Amemities=()=>{
  const[amenityArray,setAmenityArray] = useState([]);
    async function getData(){
        const amenityData = await getAmenityData();
        setAmenityArray(amenityData.data);
        console.log(
          data);
    }
    useEffect(()=>{
        //   getHomeFeedData();
        getData();
    },[]);

    return(
        <View style={styles.container}>
            
             { 
              amenityArray?
            <FlatList
      //numColumns={1}
                 data={amenityArray} 
                 renderItem={({item,index}) => (
                <View>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}  >
                        <View>
                         <Text style={styles.item}>{item.name}</Text>  
                         <Text style={{marginLeft:22,fontSize:12,color:'#6E6E6E'}}>{item.working_hours}</Text>
                         </View>         
                    </TouchableOpacity>
                    <View style={{borderWidth:0.5,borderColor:'#D9D9D9',width:380,marginLeft:-15,marginTop:30}}></View>
                </View>
                
                 )}
                 keyExtractor={(item, index) => index}
                 />

                 : <ActivityIndicator size={"large"} />
              }
             
             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white',
      alignItems:"center"
    },
    ListItem:{
        width:338,
        height:420,
        backgroundColor:'white',
        borderRadius:12,
        marginTop:12,
    },
    item:{
        fontSize:18,
        color:'#6E6E6E',
        lineHeight:18,
        justifyContent:"space-between",
        marginTop:18,
        marginLeft:22,
        // marginBottom:18,
        
    }
});
export default Amemities