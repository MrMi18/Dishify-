import { useEffect, useState } from "react";
import { API_URL, itemsPageApi } from "../utils/constant";
import Cards from "./Cards";
import Testing from "./Testing";



const Test = () =>{

    const [resData , setResData] = useState([]);
   const [wholeResData, setWholeResData] = useState([]);
    useEffect( () =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(API_URL);
        const json = await data.json();
        const banner = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        setResData(banner||[]);
        
    }

   
    console.log(wholeResData);
        
    return (
        <div className="w-11/12 h-4/5">
            <h1>Hi</h1>
            {resData &&
                resData.map((item, index) => {
                    const entityId = item?.entityId;
                    if (entityId) {
                        const collectionString = entityId.split("=");
                        const tags = collectionString.length > 1 && collectionString[2].split("&")[0];
                        const collection_id = collectionString.length > 1 && collectionString[1].split("&")[0];
                        const itemurl = `${itemsPageApi}/${collection_id}/${tags}`;
                        // console.log(itemurl);

                        return <Testing key={index} itemurl={itemurl} updateWholeResData={setWholeResData} />
                    }
                    return null;
                })}
        </div>
    );

};



export default Test;


