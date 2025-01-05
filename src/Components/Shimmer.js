// const Shimmer = () =>{
//     return (
//         <div style={{textAlign:"center"}}>
//             {/* <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"1.5rem",overflow:"scroll"}}>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
//                 <div className="shimmer-logo"></div>
                

//             </div> */}
//             <div style={{padding:"1.5rem", width:"90%" }}>
//                <input style={{padding:"10px", width:"70%", marginLeft:"2rem", borderColor:"#f4aaa" }} type="Text" ></input>
//                <span style={{padding:"10px", width:"10%" , marginLeft:"2rem",height:"2rem",backgroundColor:"f0f0f0" }} ></span>
//            </div>
//            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"1.5rem"}}>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>
//               <div className="shimmer-cards"></div>

//             </div>
//         </div>
        
//     )
// }
// export default Shimmer;

const Shimmer = () => {
    console.log("inside shimmer ui ");
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ padding: "1.5rem", width: "90%" }}>
                <input style={{ padding: "10px", width: "70%", marginLeft: "2rem", borderColor: "#f4aaa" }} type="Text" />
                <span style={{ padding: "10px", width: "10%", marginLeft: "2rem", height: "2rem", backgroundColor: "f0f0f0" }}></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
            </div>
        </div>
    )
}
export default Shimmer;
