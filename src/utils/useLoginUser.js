import axios from "axios";
import { useEffect, useState } from "react";

const useLoginUser= () =>{
    const[loginUser, setLoginUser] = useState(null); 
    const user = async() =>{
        try{
        const res= await axios.get("http://localhost:5000/profile/view",{withCredentials:true});
            setLoginUser(res.data);
            
    
        }catch(err){
            console.error(err?.response?.data||"user is not loggedin");
            
         }
        
    }
    useEffect(() =>{
        user();
    },[]);
    return {loginUser,setLoginUser};
}
export default useLoginUser;