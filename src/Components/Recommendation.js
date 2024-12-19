
import { imagUrl } from "../utils/constant";

const Recommendation = ({menu}) =>{
    // const{menu,size} = props;
    // console.log(menu);
    
    const{name,imageId,description,itemAttribute,price} = menu;
   
    // const[sizeOfRecom,setSizeOfRecom]=useState(0);
    // useEffect(() => {
    //     setSizeOfRecom(size);
    // }, [size]);
    
    return (
        // <div>
        //     <h2>Recommendate ({sizeOfRecom})</h2>
        <div className="flex m-2 mx-auto ">
            
            <div style={{display:"flex", flexDirection:"column",gap:".5rem",width:"60%"}}>
                {itemAttribute?.vegClassifier==="NONVEG"?
                   <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <rect x="1" y="1" width="22" height="22" stroke="red" fill="none" strokeWidth="2"/>
                   <polygon points="12,6 6,18 18,18" fill="red"/>
                   </svg>:
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="1" width="22" height="22" stroke="green" fill="none" strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="green"/>
                    </svg>
                    
              
                }
                

                <p className="Bold">{name}</p>
                <p className="Bold">₹{price/100}</p>
                <p>{description}</p>

            </div>
            <div style={{display:"flex",flexDirection:"column",width:"15rem",textAlign:"center",gap:"1rem"}}>
                <img style={{objectFit:"cover",border:"1px solid #aaaaaa",borderRadius:".9rem"}} src={imagUrl+imageId} ></img>
                <button className="hover:bg-green-500"  style={{padding:".7rem 2.5rem", width:"fit-content",marginLeft:"25%",backgroundColor:"white",color:"green", fontWeight:"800",borderRadius:"1rem",fontSize:"1.1rem",
                    marginTop:"-2.5rem", borderColor:"#D9DADB"
                }}>ADD</button>
                <p style={{color:"#aaaaaa"}}>Customisable</p>

            </div>

        </div>
        // </div>
    )
}
export default Recommendation;