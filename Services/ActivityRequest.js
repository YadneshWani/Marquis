import axios from 'axios';

const getActivityData = async function(){
    try{
        const response = await axios.get("https://marquis-backend.onrender.com/activity/getAllActivities");
        // const d1 =  response.json();
        // console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
export {getActivityData};