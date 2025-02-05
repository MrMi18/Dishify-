
import Cards from "./Cards";
import { useState, useEffect, useContext, useMemo, memo, useCallback } from "react";
import FoodItems from "./FoodItems";
import { Link } from "react-router-dom";
import Search from "./Search";
import useOnlineStatus from "../utils/useOnlineStatus";
import useAllResData from "../utils/useAllResData";
import Shimmer from "./Shimmer";

import Unavailable from "./Unavailable";
import OfflineCard from "./OfflineCard";
import useMainApiData from "../utils/useMainApiData";
import { ShimmerTitle } from "react-shimmer-effects";



const Main = () => {
    
    const [resData, setResData] = useState( []);
    const [allResData, setAllResData] = useState([]);
    const [moreResData, setMoreResData] = useState([]);
    const onlineStatus = useOnlineStatus();
    const wholeResData = useAllResData(); 
    const[searchResData, setSearchResData] = useState([]);
    const { data: mainData, isLoading, error } = useMainApiData();
    const [resTitle,setResTitle] = useState("");
    const [unavailable , setUnavailable] = useState(false);


    
    const[loadMore,setLoadMore]  = useState(false);
    
// console.log("main Comp render");
    useEffect(() => {
        if(mainData?.cards[0]?.card?.card?.id==="swiggy_not_present") return setUnavailable(true);
       
        const API_DATA = mainData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        const morningResData = mainData?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
        const moreData = mainData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
           
        const allRestaurantData = [...API_DATA, ...moreData,...morningResData,...searchResData];
        setResData(allRestaurantData);
        setAllResData(allRestaurantData);

        setResTitle(mainData?.cards[1]?.card?.card?.header?.title);

    }, [mainData,searchResData]); 
         

    const availableRes = useCallback(() => {
        const openRes = resData && resData.filter(res => res.info.availability.opened === true);
        setResData(openRes);
    }, [resData]);

    const reset = useCallback(() => {
        setResData(allResData);
    }, [allResData])
    
    const loadMoreHandler = useCallback(() =>{
        setLoadMore(true);
    },[])

    if(unavailable) return (<Unavailable/>)
    if (resData && resData.length === 0) return (<Shimmer />);
    if (allResData && allResData.length === 0) return <Shimmer/>;
    if (!onlineStatus) return <OfflineCard/>;
    if(loadMore && wholeResData.length === 0 ) return <ShimmerTitle line={2} gap={10} variant="primary" />
    
   
    return (
        <div className="w-full text-center relative mt-20">
             <FoodItems />
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
                <a className={`${loadMore && wholeResData?"hidden":""}`}>
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
export default memo(Main);
