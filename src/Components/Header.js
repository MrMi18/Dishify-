import { Link, useNavigate } from "react-router-dom";
import logo from './assets/DeshifyByMrMI.png'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContactUs from "./Contact";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { UserContext } from "../App";
import useLoginUser from "../utils/useLoginUser.js";

const Header = () => {
    const navigate = useNavigate();
    const [loginLogout,setloginLogout] = useState("");
    // const [logout,setLogout] = useState(null)

    const { loginUser,setLoginUser }= useContext(UserContext);
    
    const LoginLogoutHandling = () =>{
        //  user?setLoginOrLogout("Logout"):setLoginOrLogout("Login");
        if(loginUser){
            setloginLogout("Logout")
         }else{
            setloginLogout("Login")
         }
        
    }
    useEffect(()=>{
        LoginLogoutHandling()
    },[loginUser])
    
    


    const loginLogoutHandler = async () =>{
        if(loginUser){
             try{
            
            await axios.post("http://localhost:5000/logout",{},{withCredentials:true});
            toast.success("User logout succussfull");
            setLoginUser(null);
            navigate("/");
            
            

        }
        catch(err){
            console.error(err);
        }
        }else{
            navigate("/login")
            
        }
        
       
       
    }
    
1
    const cartItem = useSelector(store => store.cart.item);
    const micoinshandler = () =>{
        toast.info("You have 10000 MiCoins");
    }
    const cartItemsObj = useSelector(store => store.cart.item);
    const cartItems =  Object.values(cartItemsObj);
    const quantity = cartItems.reduce((itemCount, item) => itemCount + (item.quantity ),0);

    
    

    
    return (
        <div className="w-full  bg-slate-50 shadow-xl h-20 py-4 top-0 flex fixed z-50  ">
        <div className="flex items-center justify-between  w-10/12 mx-auto  ">
            <div className="">
                <Link to="/">
                    <div className="h-18 w-32">
                        <img data-testid = "logo"   src={logo} className="object-fill   "/>
                    </div>
                </Link>
            </div>
            <div>
                <ul className="flex gap-10 text-lg ">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/About">About</Link></li>
                    
                    <li >
                        <Link to="/CheckoutPage" className="flex gap-1 items-center relative" >Cart
                        <span>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="18.5" r="1.5"/>
                            <circle cx="9.5" cy="18.5" r="1.5"/>
                            <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                          </svg>
                        </span>
                        <span data-testid ="cartSize" className="absolute -top-1.5 -right-1 bg-orange-500 border text-center rounded-full w-4 px-0  text-white  text-xs ">{quantity}</span>
                        </Link>
                    </li>
                    <li className="flex hover:cursor-pointer" onClick={micoinshandler}>
                       <p>MiCoins</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef821e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
                    </li>
                    <li>
                        <Link to="/Contact">
                              ContactUs
                        </Link>
                    </li>
                    
                     <li> <a className="cursor-pointer " onClick={loginLogoutHandler}>{loginLogout}</a>
                     </li> 
                       {/* <li> */}
                        {/* <Link to="/Login" >{login}</Link></li> */}
                    
                     
                    
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Header;

