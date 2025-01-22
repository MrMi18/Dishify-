import { useState } from "react";

const Test = () =>{
    const [showPopup , setShowPopup] = useState(false);

    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <button className="px-4 py-2 bg-gray-900 text-white border rounded-md">Popup</button>
            <div className="h-32 w-48 bg-slate-400 border rounded-sm hover:shadow-lg flex flex-col justify-center">
                <p>Please confirm logout</p>
                <div className="flext justify-between">
                    <button  className="px-2 py-1 border rounded-md bg-green-500">Yes</button>
                    <button  className="px-2 py-1 border rounded-md bg-red-500">No</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Test;