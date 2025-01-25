import {imagUrl} from "../utils/constant";
import dummy from "./assets/dummy.jpg"


const Cards = (props) =>{
    const {apiData} = props
    const {name,areaName,cuisines,avgRating,cloudinaryImageId,sla,aggregatedDiscountInfoV3,costForTwo}  = apiData?.info || apiData;
    
    let nCuisines = cuisines.join(", ")
    // .length>21?cuisines.join(", ").slice(0,21)+"...":cuisines.join(", ");  
    
    // const trimmedName = name.length>21?name.slice(0,21)+"...":name;
    
      
  
    
    return (
        <div className = "border border-slate-100 hover:shadow-2xl hover:border md:w-56 w-60  my-4" style={{width:"14rem", marginTop:"1rem",height:"fit-content",borderRadius:"1rem",
    
          }}>
            <img className=" h-44 w-[100%] object-cover border rounded-xl "  src={imagUrl+cloudinaryImageId||dummy}  alt="Food Image"></img>
            <div className="flex flex-col items-start w-[100%] ml-4 py-3 gap-1.5" >
             <h3  className="font-semibold text-md font-serif md:cursive truncate w-[93%] text-left">{name}</h3>
             <h5 className="font-serif ">
               {(aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader)
               ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
               : costForTwo} </h5> 

             <div style={{display:"flex", gap:"1rem"}}>
                <div style={{display:"flex", gap:".1rem"}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                   <h4>{avgRating}</h4>
                </div>
                
                <p >{sla.slaString}</p>
              </div>
              <p className="font-light text-md text-gray-400 font-serif md:cursive truncate w-[93%] text-left">{nCuisines}</p>
              <p className=" md:cursive font-serif" >{areaName} </p>
            </div>
            
           
        </div>  
    )


}
export default Cards;