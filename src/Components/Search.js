// import { useState } from "react";

// const Search = ({resData,setResData}) =>{
//     // console.log("props wala ",resData);
//     const [searchText,setSearchText] = useState("");
//     console.log(searchText);
//     return(
//         <div style={{padding:"1.5rem", width:"90%" }}>
//             <input onChange={(e) =>{
//                 setSearchText(e.target.value)
//             }} value={searchText} style={{padding:"10px", width:"70%", marginLeft:"2rem" }} type="Text" placeholder="Search for resturant">
//             </input>
//             <button onClick={() =>{  
//               const search =   resData.filter(
//                 (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    
//                 );
//                 setResData(search)
//                 // console.log("Search data",search);
                                                
//             }}
//             style={{padding:"10px", width:"10%" , marginLeft:"2rem" }} >Search</button>
//         </div>
//     )

// }

// export default Search;

import { useState } from "react";
import { toast } from "react-toastify";

const Search = ({ resData, setResData,moreResData,setMoreResData ,allResData}) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="p-4 w-90 ">
            <input 
                onChange={(e) => setSearchText(e.target.value)} 
                value={searchText} 
                className="border p-2 w-8/12 rounded focus:outline-none focus:ring-2 focus:ring-[#F0BB78]"
                type="text" 
                placeholder="Search for restaurant" 
                
            />
            <button onClick={() => {
                const search = resData.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                setResData(search);
                const searchMore = moreResData.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                setMoreResData(searchMore);
                if(search.length===0 && searchMore.length===0){
                    setMoreResData(allResData);
                    setResData(allResData);
                    toast.info("unable to find food and restaurant");
                }
            }} className="bg-orange-400 text-white px-4 py-2 rounded ml-2 hover:bg-orange-500">
                Search
            </button>
        </div>
    )
}

export default Search;

