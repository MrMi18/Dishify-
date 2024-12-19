import { useState } from "react";

const ResMenuHeader = ({title,size,flag,showMenu,setShowMenu}) =>{
    
    const showcard = () => {
        setShowMenu(!showMenu); // Toggle the section open/close
      };

    return (
        
        <div className="flex justify-between m-3 border-b-2   " 
        onClick={ showcard }
        >
           {flag?<h1 className="text-lg font-bold my-2">{title} ({size})</h1>:<h1 className="text-base my-1 ml-2">{title} ({size})</h1>} 
            <div>{showMenu ?<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
            </svg>:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>
            }</div>
            
            </div>

        

    )
}

export default ResMenuHeader;