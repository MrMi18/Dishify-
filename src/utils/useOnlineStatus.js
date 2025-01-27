import { useEffect, useState } from "react";

const useOnlineStatus =  () =>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    
useEffect(() =>{
    const offlineHander = () =>{
        setOnlineStatus(false);
     }
     const onlineHandler = () =>{
        setOnlineStatus(true);
    }

   
    window.addEventListener("offline", offlineHander )

    window.addEventListener("online", onlineHandler )

    return () =>{
        window.removeEventListener("offline", offlineHander );
        window.removeEventListener("online", onlineHandler  );

    };
    },[])

 
    return onlineStatus;

}

export default useOnlineStatus;