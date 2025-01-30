import { memo, useEffect, useState } from "react";
import { API_URL } from "./constant";
import { useQuery } from "react-query";
import axios from "axios";

const useMainApiData = () =>{

    const fetchMainApiData = async() =>{
           const{data} = await axios.get(API_URL);

           
           return data.data;
    };
    return useQuery("mainData",fetchMainApiData,{
        cacheTime: 24*60*60*100,
        staleTime:24*60*60*100,
    })


}
export default useMainApiData;



