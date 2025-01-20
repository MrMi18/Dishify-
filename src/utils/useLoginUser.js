import axios from "axios";
import { useEffect, useState } from "react";

const useLoginUser= () =>{
    const[loginUser, setLoginUser] = useState(null); 
    const user = async() =>{
        try{
        const res= await axios.get("http://localhost:5000/profile/view",{withCredentials:true});
            console.log(res.data);
            setLoginUser(res.data);
            
    
        }catch(err){
            console.error(err);
            
         }
        
    }
    useEffect(() =>{
        user();
    },[]);
    return loginUser;
}
export default useLoginUser;