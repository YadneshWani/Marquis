import axios from 'axios';

const getAmenityData = async function(){
    try{
        const response = await axios.get("https://marquis-backend.onrender.com/amenity/getAllAmenities");
        // const d1 =  response.json();
        // console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
export {getAmenityData};