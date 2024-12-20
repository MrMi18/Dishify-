import { useState } from "react";

const Search = ({resData,setResData}) =>{
    // console.log("props wala ",resData);
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
                // console.log("Search data",search);
                                                
            }}
            style={{padding:"10px", width:"10%" , marginLeft:"2rem" }} >Search</button>
        </div>
    )

}

export default Search;
