import Cards from "./Cards"
import { API_URL} from "../utils/constant"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import FoodItems from "./FoodItems"
import { Link, useParams } from "react-router-dom"



const Search = ({resData,setResData}) =>{
    console.log("pros wala ",resData);
    const [searchText,setSearchText] = useState("");
    console.log(searchText);
    return(
        <div style={{padding:"1.5rem", width:"90%" }}>
            <input onChange={(e) =>{
                setSearchText(e.target.value)
            }} value={searchText} style={{padding:"10px", width:"70%", marginLeft:"2rem" }} type="Text" placeholder="Search for resturant">
            </input>
            <button onClick={() =>{  
              const search =   resData.filter(
                (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    
                );
                setResData(search)
                console.log("Search data",search);
                                                
            }}
            style={{padding:"10px", width:"10%" , marginLeft:"2rem" }} >Search</button>
        </div>
    )

}
const Main = () =>{
    
    const [resData,setResData] = useState([]);
    const [allResData, setAllResData] = useState([]);

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

       

        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(API_DATA);
        setAllResData(API_DATA);
    };
    
    if(resData.length===0){
        return <Shimmer/>
    }

    
    
    return (
        
        <div style={{width:"100vw",textAlign:"center"}}>
            
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
                resData.map(data => <Link to={"/ResturantMenu/"+data.info.id} key={data.info.id}>
                        <Cards apiData={data} /></Link>)
              }
               
            </div>

        </div>
    )
}
export default Main;