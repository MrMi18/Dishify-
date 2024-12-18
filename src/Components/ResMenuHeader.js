import { useState } from "react";

const ResMenuHeader = ({title,size}) =>{

    const {showMenu, setShowMenu} = useState(false);

   
   
    return (
        <div className="flex justify-between">
            <h1 className="text-xl ">{title} ({size})</h1>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>

        </div>

    )
}

export default ResMenuHeader;