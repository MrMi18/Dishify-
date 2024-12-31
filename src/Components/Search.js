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

const Search = ({ resData, setResData }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="p-4 w-90">
            <input 
                onChange={(e) => setSearchText(e.target.value)} 
                value={searchText} 
                className="border p-2 w-3/4 rounded"
                type="text" 
                placeholder="Search for restaurant" 
            />
            <button onClick={() => {
                const search = resData.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                setResData(search);
            }} className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600">
                Search
            </button>
        </div>
    )
}

export default Search;

