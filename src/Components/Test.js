import React, { useEffect } from 'react'
import { API_URL } from '../utils/constant'

const Test = () => {
  const fetchData = async() =>{
    console.log("we are fetching the data ");
    try{
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    }catch(err){
      console.error(err)
    }
    
   
   
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div>
      
    </div>
  )
}

export default Test
