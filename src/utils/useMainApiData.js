import { memo, useEffect, useState } from "react";
import { API_URL } from "./constant";
import { useQuery } from "react-query";
import axios from "axios";

const useMainApiData = () =>{

    const fetchMainApiData = async() =>{
           const{data} = await axios.get(API_URL);

           console.log("api call maded");
           return data.data;
    };
    return useQuery("mainData",fetchMainApiData,{
        cacheTime: 24*60*60*100,
        staleTime:24*60*60*100,
    })


}
export default useMainApiData;



//     const [mainData,setMainData] = useState(null);
//     const [loading,setLoading]  = useState(true);
//     const [fetchError,setFetchError] = useState(null);
// useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await fetch(API_URL);
//                 const json = await data.json();
//                 setMainData (json?.data);
//                 setLoading(false);
//                 console.log("api called maided again");
                
//             } catch (error) {
//                 console.error("Error fetching main data:", error);
//                 setFetchError(error);
//             }
//         };

//         fetchData();
//     }, []);
   

//     return {mainData,loading,fetchError};