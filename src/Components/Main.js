// import Cards from "./Cards"
// import { API_URL} from "../utils/constant"
// import { useEffect, useState } from "react"
// import Shimmer from "./Shimmer"
// import FoodItems from "./FoodItems"
// import { Link, useParams } from "react-router-dom"
// import Search from "./Search"
// import useOnlineStatus from "../utils/useOnlineStatus"



// const Main = () =>{
   
//     const [resData,setResData] = useState([]);
//     const [allResData, setAllResData] = useState([]);
//     const [moreResData, setMoreResData] = useState([]);
//     const onlineStatus = useOnlineStatus();

//     const availableRes  = () =>{
//         const openRes =  resData && resData.filter((res) => res.info.availability.opened===true);
//         setResData(openRes);
//     };
//     const reset = () =>{
//         setResData(allResData);
//     }

//     useEffect(() =>{
//         fetchData();
//     },[]);

//     const fetchData = async () =>{
//         const data = await fetch(API_URL);
//         const json = await data.json();

       
        
//         const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//         // console.log(API_DATA);
//         setResData(API_DATA);
//         setAllResData(API_DATA);

//         const moreData =  json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//         moreData && setMoreResData(moreData);
        
//         if(!moreData){
//           const altMoreData =  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//           setMoreResData(altMoreData);
//         }

//     };
    
//     if( resData && resData.length===0){
//         return <Shimmer/>
//     }
//     if(moreResData && moreResData.length===0){
//         return <Shimmer/>
//     }
    
    
    
//    if(onlineStatus === false){
//      return(  
//      <div className="flex justify-center items-center h-72 w-screen">
//         <h1 className="text-lg">Hey You are offline please connect with internet connection</h1>
//      </div>)
//    }

        
//      return (
        
//         <div style={{textAlign:"center"}}>
//              <FoodItems />
            
//             <Search resData={allResData} setResData={setResData}/>
//          <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
//             <button onClick={() =>{
//               const topRes =   resData && resData.filter((res) => res.info.avgRating>4);
//               setResData(topRes) 
//              }} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Top Restaurant</button>


//             <button onClick={availableRes} style={{padding:".5rem", border:"white", borderRadius:"2rem"}}>Open Restaurant</button>
//             <button onClick={reset} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Reset Filter</button>
//          </div>
           
             
//             <div className="flex justify-evenly flex-wrap w-10/12 mx-auto p " >
//               {
                
//                 resData && resData.map(data => <Link to={"/ResturantMenu/"+data.info.id} key={data.info.id}  style={{textDecoration:"none"}}>
//                         <Cards apiData={data} /></Link>)
//               }
               
//             </div>
//             <div className="flex justify-evenly flex-wrap w-10/12 mx-auto " >
//               {
                
//                 moreResData && moreResData.map(data => <Link to={"/ResturantMenu/"+data.info.id} key={data.info.id}  style={{textDecoration:"none"}}>
//                         <Cards apiData={data} /></Link>)
//               }
               
//             </div>

//         </div>
//     )
// }
// export default Main;



import Cards from "./Cards";
import { API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FoodItems from "./FoodItems";
import { Link } from "react-router-dom";
import Search from "./Search";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
    const [resData, setResData] = useState([]);
    const [allResData, setAllResData] = useState([]);
    const [moreResData, setMoreResData] = useState([]);
    const onlineStatus = useOnlineStatus();

    const availableRes = () => {
        const openRes = resData && resData.filter(res => res.info.availability.opened === true);
        setResData(openRes);
    };

    const reset = () => {
        setResData(allResData);
    }

    useEffect(() => {
        fetchData();
    }, []);

   
    const fetchData = async () => {
        const data = await fetch(API_URL)

        

        
        const json = await data.json();
        
        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(API_DATA);
        setAllResData(API_DATA);
        const moreData = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        moreData && setMoreResData(moreData);
        if (!moreData) {
            const altMoreData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setMoreResData(altMoreData);
        }
         

    };

      
    if (resData && resData.length === 0) return <Shimmer />;
    if (moreResData && moreResData.length === 0) return <Shimmer />;
    
    if (onlineStatus === false) {
        return (
            <div className="flex justify-center items-center h-72 w-10/12
            ">
                <h1 className="text-lg">Hey You are offline please connect with internet connection</h1>
            </div>
        );
    }

    return (
        <div className="w-full text-center">
            <FoodItems />
            <h1 className="font-bold text-2xl text-left ml-32 my-4  mx-auto">Top Restaurant Chain</h1>
            <Search resData={allResData} setResData={setResData} />
            <div className="flex gap-6 justify-center my-4">
                <button onClick={() => {
                    const topRes = resData && resData.filter(res => res.info.avgRating > 4);
                    setResData(topRes);
                }} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Top Restaurant</button>
                <button onClick={availableRes} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Open Restaurant</button>
                <button onClick={reset} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Reset Filter</button>
            </div>
            <div className="flex justify-evenly flex-wrap w-10/12 mx-auto p">
                {resData && resData.map(data => (
                   <Link to={`/ResturantMenu/${data.info.id}`} key={data.info.id} className="text-decoration-none">
                      <Cards apiData={data} />
                   </Link>
                ))}
            </div>
            <div className="flex justify-evenly flex-wrap w-10/12 mx-auto">
                {moreResData && moreResData.map(data => (
                    <Link to={`/ResturantMenu/${data.info.id}`} key={data.info.id} className="text-decoration-none">
                        <Cards apiData={data} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Main;
