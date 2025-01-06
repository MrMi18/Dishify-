const Circle = () =>{
    return (
        <div className="w-full mt-20">
           

            <div className="flex  py-10 gap-6 w-9/12 mx-auto">
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
                <div className="circle "></div>
            </div>
        </div>
        
    )
}

const Cards = () =>{
    return (
        <div className="py-20 gap-6 w-10/12 mx-auto flex flex-col items-center mt-20 ">
        <div className="p-4 w-6/12 items-center flex gap-4">
        <input 
         className="border p-2 w-3/4 rounded"
         type="text"   
       />
       <button className="bg-gray-200  px-10 py-5  rounded ml-2"> 
      </button>
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

const Shimmer = ({cards,circle}) => {
   
    


        if (cards && circle) {return ( <div><Circle/> <Cards /></div>)}
        if(circle) return   <Circle/>;
        if (cards) return <Cards />;
}
export default Shimmer;
