import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginFirstCard = ({isOpen,setIsOpen}) => {
  const navigate = useNavigate();
    if(!isOpen) return;
  const handleLoginRedirect = () => {
    navigate('/login');
    setIsOpen(false);
  }

  return (
    <div onClick={()=>setIsOpen(false)} className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isOpen?'':'hidden'}`}>
    <div  onClick={(e) => e.stopPropagation()} className="max-w-sm  mx-auto mt-20 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 shadow-lg rounded-lg flex items-start">
          <FaExclamationTriangle className="w-6 h-6 mr-3" />
          <div>
            <h2 className="font-bold text-xl mb-2">Attention Required</h2>
            <p className="mb-4">Please login first to place the order.</p>
            <button
              onClick={handleLoginRedirect}
              className="w-full py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
    </div>
  );
}

export default LoginFirstCard;
