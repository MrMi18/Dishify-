import axios from 'axios';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogoutModal = ({ isOpen, setIsOpen, setLoginUser }) => {
    const navigate = useNavigate();
    // console.log(isOpen);
  if (!isOpen) return null;

  const logoutHandler = async()=>{
    try{
            
        await axios.post("http://localhost:5000/logout",{},{withCredentials:true});
        
        setLoginUser(null); 
        toast.success(" User Loggedout Succesfully");
        navigate("/login");

    }
    catch(err){
        console.error(err);
    }
    setIsOpen(false);
  }
  console.log(isOpen);

  return (
<div  onClick={()=>setIsOpen(false)} className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isOpen?'':'hidden'}`}>
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-black">Logout</h2>
        <p className='text-black'>Are you sure you want to logout?</p>
        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={()=>setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo( LogoutModal);
