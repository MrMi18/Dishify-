import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from "../App";

const LoginSignupPage = () => {
  const navigate = useNavigate(); 
   const [isLogin, setIsLogin] = useState(true);
    
   const { loginUser,setLoginUser } = useContext(UserContext);

  if(loginUser){
    toast.warning("Please logout first");
    return(navigate("/"));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? 'Login' : 'Signup'}
        </h1>

        <div className="space-y-4">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>

        <div className="text-sm text-center">
            {(isLogin ?
      <p className="text-sm">Don't you have an account?<a 
          onClick={() => setIsLogin(!isLogin)}
         className="text-base text-[#F97316] py-2 cursor-pointer ">  Sign up</a></p>
         :<p className="text-sm">Already have an account?<a 
          onClick={() => setIsLogin(!isLogin)}
         className="text-base text-[#F97316] py-2 cursor-pointer ">  Login</a></p>)}
      </div>
        {/* <button
          className="w-fit py-2 font-semibold text-white bg-[#F97316] rounded-md hover:bg-orange-600 focus:outline-none"
          onClick={() => setIsLogin(!isLogin)}
        > {isLogin ? "Don't you have an account? Signup" : 'Login'}
        </button> */}
      </div>
    </div>
  );
};

const LoginForm = () => {
  
    const [emailId,setEmailId] = useState("imran@gmail");
    const [password, setPassword] = useState("Shane@123");

    const[loginFailed,setLoginFailed] = useState("");
    const navigate = useNavigate(); 
   const { loginUser,setLoginUser } = useContext(UserContext);

    

    const loginHander = async() =>{
        console.log("we are inside the handler ")
        try{
            console.log("we are tring to fetch");
            const res = await axios.post("http://localhost:5000/login",{
            emailId: emailId,
            password: password
        },{withCredentials: true});
         
        setLoginUser(res.data.data);
         toast.success("Loging Succesfully"); 
        navigate("/");
        }catch(err){
            console.error(err);
            setLoginFailed(err?.response?.data||err.message);
            console.log(err?.response?.data);
        }
        
        
    }
    console.log(loginUser);

  return (
    <div>
      <div >
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-[#F97316] outline-none"
          required
        />
      </div>
      <div className='my-3'>
        <label className="block text-sm font-medium text-gray-700 ">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-[#F97316] outline-none"
          required
        />
      </div>
      <p className="text-red-600 text-sm ">{loginFailed}</p>
      <button
      onClick={loginHander}
        type="submit"
        className="w-full py-2 font-semibold text-white bg-[#F97316] rounded-md hover:bg-orange-600 focus:outline-none my-2"
      >
        Login
      </button>
      {/* <div className="text-sm text-center">
        <a href="#" className="text-[#F97316] hover:underline">
          Forgot Password?
        </a>
      </div> */}
      

      </div>
    
  );
};

const SignupForm = () => {
  return (
    <form>
      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-[#F97316] outline-none"
          required
        />
      </div>
      <div className='my-3'>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-[#F97316] outline-none"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-[#F97316] outline-none"
          required
        />
      </div>
      <p className="text-red-600 text-sm ">{}hheyeyey</p>
      <div className="flex items-center my-3">
        <input type="checkbox" className="h-4 w-4 text-[#F97316] border-gray-300 rounded" />
        <label className="ml-2 block text-sm text-gray-700">I agree to the Terms of Service</label>
      </div>
      <button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-[#F97316] rounded-md hover:bg-orange-600 focus:outline-none"
      >
        Signup
      </button>
    </form>
  );
};

export default LoginSignupPage;








