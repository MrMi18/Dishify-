import Cards from "./Cards"
import {API_DATA} from "../utils/constant"
import { useState } from "react"



const Search = () =>{
    return(
        <div style={{padding:"1.5rem", width:"90%" }}>
            <input style={{padding:"10px", width:"70%", marginLeft:"2rem" }} type="Text" placeholder="Search for 'Burger'"></input>
            <button style={{padding:"10px", width:"10%" , marginLeft:"2rem" }} >Search</button>
        </div>
    )

}
const Main = () =>{

    const [resData,setResData] = useState(API_DATA)

    const availableRes  = () =>{
        const openRes = API_DATA.filter((res) => res.info.availability.opened===true);
        setResData(openRes);
    };
    const reset = () =>{
        setResData(API_DATA)
    }
    
    
    return (
        <div style={{width:"100vw",textAlign:"center"}}>
            <Search/>
         <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
            <button onClick={() =>{
              const topRes =   API_DATA.filter((res) => res.info.avgRating>4);
              setResData(topRes) 
             }} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Top Restaurant</button>


            <button onClick={availableRes} style={{padding:".5rem", border:"white", borderRadius:"2rem"}}>Open Restaurant</button>
            <button onClick={reset} style={{padding:".5rem", border:"white", borderRadius:"2rem" }}>Reset Filter</button>
         </div>
           
             
            <div style={{display:"flex", gap:"1.5rem", flexWrap:"wrap", justifyContent:"center"}} >
              {
                resData.map(data => <Cards key={data.info.id}   apiData={data} />)
              }
               
            </div>

        </div>
    )
}
export default Main;