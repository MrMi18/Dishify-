

import Cards from "./Cards";
import { API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import FoodItems from "./FoodItems";
import { Link } from "react-router-dom";
import Search from "./Search";
import useOnlineStatus from "../utils/useOnlineStatus";
import { toast } from "react-toastify";
import useAllResData from "../utils/useAllResData";
import Shimmer from "./Shimmer";



const Main = () => {
    
    const [resData, setResData] = useState( []);
    const [allResData, setAllResData] = useState([]);
    const [moreResData, setMoreResData] = useState([]);
    const onlineStatus = useOnlineStatus();
    const wholeResData = useAllResData(); 
    const[searchResData, setSearchResData] = useState([]);
    const [foodItemTitle,setFoodItemTitle] = useState("");
    const [resTitle,setResTitle] = useState("");
    // setSearchResData(wholeResData);

    const[loadMore,setLoadMore]  = useState(false);
    

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
        console.log(json.data)
        
        // console.log(json?.data?.cards[0]?.card?.card?.header?.title);
        
        
        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        const morningResData = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        const moreData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
            console.log(moreData);
        const allRestaurantData = [...API_DATA, ...moreData,...morningResData,...searchResData];
        setResData(allRestaurantData);
        setAllResData(allRestaurantData);
        console.log(allRestaurantData);

        
        setFoodItemTitle(json?.data?.cards[0]?.card?.card?.header?.title);
        setResTitle(json?.data?.cards[1]?.card?.card?.header?.title);

        
         
    }catch (error) {
        console.error("Error during fetch:", error);
        
    }
    };
    
    const loadMoreHandler = () =>{
        setLoadMore(true);
    }
      
    if (resData && resData.length === 0) return (<Shimmer />);
    if (allResData && allResData.length === 0) return <Shimmer/>;
    
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
            <FoodItems foodItemTitle={foodItemTitle}/>
            <div className="flex w-9/12 md:py-10 py-4  mx-auto items-center  md:items-center md:justify-between flex-col-reverse md:flex-row">
              <h1 className="font-bold md:text-2xl text-xl  whitespace-nowrap  ">{resTitle||"Top Restuarant Near You"}</h1>
              <Search allResData={allResData} resData={allResData} setResData={setResData} setSearchResData={setSearchResData} searchResData={searchResData}  />
            </div>
            
            <div className="flex md:gap-6 justify-center my-4 gap-4">
                <button onClick={() => {
                    const topRes = resData && resData.filter(res => res.info.avgRating > 4.5);
                    setResData(topRes);
                }} className="bg-orange-400 text-sm md:text-base text-white md:px-4 md:py-2 px-2 py-1 rounded   hover:bg-orange-500 whitespace-nowrap ">Top Restaurant</button>
                <button onClick={availableRes} className="text-sm md:text-base bg-orange-400 text-white md:px-4 md:py-2 px-1 rounded hover:bg-orange-500 whitespace-nowrap ">Open Restaurant</button>
                <button onClick={reset} className="bg-gray-200 text-sm md:text-base md:px-4 md:py-2 px-1 rounded hover:bg-gray-300 whitespace-nowrap ">Reset Filter</button>
            </div>
            <div className="flex gap-4 flex-wrap w-9/12 mx-auto justify-center ">
                {resData && resData.map((data,index) => (
                   <Link to={`/ResturantMenu/${data.info.id}`} key={data.info.id+index} className="text-decoration-none">
                      <Cards apiData={data} />
                   </Link>
                ))}
            </div>
                <a className={`${loadMore?"hidden":""}`}>
                    <button onClick={loadMoreHandler} className={`${loadMore?"hidden":"font-extrabold"}text-sm md:text-base bg-orange-400 text-white md:px-4 md:py-2 px-1 rounded hover:bg-orange-500 whitespace-nowrap`} >See More Restaurant</button>
                </a>
                
            <div className="flex gap-4 flex-wrap w-9/12 mx-auto justify-center ">
                { loadMore && wholeResData && wholeResData.map((data,index) => (
                   <Link to={`/ResturantMenu/${data.id}`} key={data.name+index} className="text-decoration-none">
                      <Cards apiData={data} />
                   </Link>
                ))}
            </div>
           
            
        </div>
    );
}
export default Main;
