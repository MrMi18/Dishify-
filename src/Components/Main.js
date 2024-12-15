import Cards from "./Cards"
import { API_URL} from "../utils/constant"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import FoodItems from "./FoodItems"
import { Link, useParams } from "react-router-dom"
import Search from "./Search"
import useOnlineStatus from "../utils/useOnlineStatus"



const Main = () =>{
   
    const [resData,setResData] = useState([]);
    const [allResData, setAllResData] = useState([]);
    const onlineStatus = useOnlineStatus();

    const availableRes  = () =>{
        const openRes = resData.filter((res) => res.info.availability.opened===true);
        setResData(openRes);
    };
    const reset = () =>{
        setResData(allResData);
    }

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(API_URL);
        const json = await data.json();

       
        console.log(json);
        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(API_DATA);
        setResData(API_DATA);
        setAllResData(API_DATA);
        

    };
    
    if(resData.length===0){
        return <Shimmer/>
    }

    
    
   if(onlineStatus === false){
     return(  
     <div>
        <h1 className="h-4/5 w-3/4 decoration-red-500 place-content-center">Hey You are offline please connect with internet connection</h1>
     </div>)
   }


     return (
        
        <div style={{width:"100vw",textAlign:"center"}}>
             <FoodItems />
            
            <Search resData={allResData} setResData={setResData}/>
         <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
            <button onClick={() =>{
              const topRes =   resData.filter((res) => res.info.avgRating>4);
              setResData(topRes) 
             }} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Top Restaurant</button>


            <button onClick={availableRes} style={{padding:".5rem", border:"white", borderRadius:"2rem"}}>Open Restaurant</button>
            <button onClick={reset} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Reset Filter</button>
         </div>
           
             
            <div style={{display:"flex", gap:"1.5rem", flexWrap:"wrap", justifyContent:"center"}} >
              {
                
                resData.map(data => <Link to={"/ResturantMenu/"+data.info.id} key={data.info.id}  style={{textDecoration:"none"}}>
                        <Cards apiData={data} /></Link>)
              }
               
            </div>

        </div>
    )
}
export default Main;