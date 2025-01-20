

import Cards from "./Cards";
import { API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FoodItems from "./FoodItems";
import { Link } from "react-router-dom";
import Search from "./Search";
import useOnlineStatus from "../utils/useOnlineStatus";
import { toast } from "react-toastify";
import useAllResData from "../utils/useAllResData";


const Main = () => {
    
    const [resData, setResData] = useState( []);
    const [allResData, setAllResData] = useState([]);
    const [moreResData, setMoreResData] = useState([]);
    const onlineStatus = useOnlineStatus();
    const wholeResData = useAllResData(); 
    const[searchResData, setSearchResData] = useState([]);
    // setSearchResData(wholeResData);
   

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

        try{
          
        const data = await fetch(API_URL);
        
        const json = await data.json();
        // console.log(json.data);
        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        // const moreData = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        const moreData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
            // console.log(moreData);
        const allRestaurantData = [...API_DATA, ...moreData,...searchResData];
        setResData(allRestaurantData);
        setAllResData(allRestaurantData);
        // console.log(allRestaurantData);
        
         
    }catch (error) {
        console.error("Error during fetch:", error);
        //  toast.warning("Please try again later.");
    }
    };
    
      
    if (resData && resData.length === 0) return (<Shimmer circle={true}  cards ={true} />);
    if (allResData && allResData.length === 0) return <Shimmer circle={false}  cards ={true} />;
    
    if (onlineStatus === false) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-black text-white gap-2 mt-20">
            <div className="max-w-lg text-center shadow-lg p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
                <h1 className="text-7xl font-extrabold mb-4 text-white drop-shadow-md">
                    Oops!
                </h1>
                <p className="text-lg font-medium mb-6 text-white">
                    Look like you are offline please check your internet connection.
                </p>
                <a
                    href="/"
                    className="mt-8 inline-block bg-white text-red-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
                >
                    No internet
                </a>
            </div>
        </div>
        );
    }

    return (
        <div className="w-full text-center relative mt-20">
            <FoodItems />
            <div className="flex w-9/12 py-10  mx-auto items-center justify-between">
              <h1 className="font-bold text-2xl   ">Top Restaurant Chain</h1>
              
              <Search allResData={allResData} resData={allResData} setResData={setResData} setSearchResData={setSearchResData} searchResData={searchResData}  />
            </div>
            
            <div className="flex gap-6 justify-center my-4">
                <button onClick={() => {
                    const topRes = resData && resData.filter(res => res.info.avgRating > 4.5);
                    setResData(topRes);
                }} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Top Restaurant</button>
                <button onClick={availableRes} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Open Restaurant</button>
                <button onClick={reset} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Reset Filter</button>
            </div>
            <div className="flex gap-4 flex-wrap w-9/12 mx-auto justify-center ">
                {resData && resData.map((data,index) => (
                   <Link to={`/ResturantMenu/${data.info.id}`} key={data.info.id+index} className="text-decoration-none">
                      <Cards apiData={data} />
                   </Link>
                ))}
                {wholeResData && wholeResData.map((data,index) => (
                   <Link to={`/ResturantMenu/${data.id}`} key={data.name+index} className="text-decoration-none">
                      <Cards apiData={data} />
                   </Link>
                ))}
                
            </div>
            
        </div>
    );
}
export default Main;
