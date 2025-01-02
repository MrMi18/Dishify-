const NameInfo = () =>{
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col ">
            <div className="flex flex-col gap-3 mx-auto my-auto w-3/12" >
            
            <h3>Name</h3>
            <input type="text"
               placeholder="Enter your name"
               className="border rounded-lg p-2  flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            <h3>Email</h3>
            <input type="text"
               placeholder="Enter your email"
               className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-600"
                                  
                > Sign Up </button>
            </div>
           
        </div>
    )

}
export default NameInfo;