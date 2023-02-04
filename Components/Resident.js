import {useState,useEffect} from "react";

import {View,Text, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownResident from "./DropDownResident";
import { RadioButton } from 'react-native-paper';
import { getSocietyData } from "../Services/SocietyRequest";

const Resident=()=>{
const [value, setValue] = useState('A');

const[societyArray,setSocietyArray] = useState([]);
const[wingData,setWingData]=useState([]);

    async function getData(){
        const societyData = await getSocietyData();
        setSocietyArray(societyData.data);
        for(let i=0;i<societyArray.length;i++)
        {
            if(societyData.data[i].society_id=='6YjbJ6i')
            {
                
            }
            
        }
        console.log(societyData.data[0].wings);
        for(let i=0;i<wingData.length;i++)
        {
            for(let j=0;j<wingData[i].wing.floors;j++)
            {

            }
        }
    }
    useEffect(()=>{
        //   getHomeFeedData();
        getData();
    },[]);
   // console.log(WingFloors);


    const data=[
    {
        id:1,
        title:'1st Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:2,
        title:'2nd Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:3,
        title:'3rd Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:4,
        title:'4th Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:5,
        title:'5th Floor',
        name:'Lorem Ipsum',
        total:5
    },
    {
        id:6,
        title:'6th Floor',
        name:'Lorem Ipsum',
        total:5
    },
];
    // console.log(value);
    return(
        <SafeAreaView style={styles.container}>
                      
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="Wing A" value="0" />
                <RadioButton.Item label="Wing B" value="1" />
            </RadioButton.Group>
            <View >
            
                <View style={styles.HeaderStyle}>
                    <View style={styles.Profile}>
                        
                    </View>
                    <View>
                        <Text style={{fontSize:24,fontWeight:'500',marginTop:12,marginLeft:12}}>Your Name</Text>
                        <Text style={{fontSize:24,fontWeight:'500',marginLeft:12,color:'#434F39'}}>BA/704</Text>
                        <Text style={{fontWeight:'400',marginLeft:12,fontSize:14}}>Resident</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>(
                        <DropDownResident title="1 st floor" name="1st FLoor" id="1"/>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#DEE7D7',  
      alignItems:"center",
      
      

    },
    HeaderStyle:{
        width:342,
        height:110,
        backgroundColor:'white',
        borderRadius:12,
        marginBottom:20,
        flexDirection:"row",
    },
    Profile:{
        width:70,
        height:70,
        backgroundColor:'#D9D9D9',
        borderRadius:100,
        marginLeft:12,
        marginTop:12,
    },
})
export default Resident;


