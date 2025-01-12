

import { use, useState } from "react";
import { toast } from "react-toastify";

const Search = ({ resData, setResData,moreResData,setMoreResData ,allResData}) => {
    const [searchText, setSearchText] = useState("");
    const [temp ,setTemp]= useState([]);


   const handleSearch = () =>{
    
            const search = resData.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || 
                 res?.info.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())|| []);
                
                const searchMore = moreResData.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())||[]);
                
                if(search.length===0 && searchMore.length===0){
                    setMoreResData(allResData);
                    setResData(allResData);
                    toast.info("unable to find food and restaurant");
                }else{
                    setResData(search);
                    setMoreResData(searchMore);
                }
   }




    return (
        <div className="p-4 w-90 ">
            <input 
                onChange={(e) => setSearchText(e.target.value)} 
                value={searchText} 
                className="border p-2 w-8/12 rounded focus:outline-none focus:ring-2 focus:ring-[#F0BB78]"
                type="text" 
                placeholder="Search for restaurant" 
                
            />
            <button onClick= {handleSearch}
                 className="bg-orange-400 text-white px-4 py-2 rounded ml-2 hover:bg-orange-500">
                Search
            </button>
        </div>
    )
}

export default Search;

