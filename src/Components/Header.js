import { Link, useNavigate } from "react-router-dom";
import logo from './assets/DeshifyByMrMI.png'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContactUs from "./Contact";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { UserContext } from "../App";
import useLoginUser from "../utils/useLoginUser.js";
import LogoutModal from "./LogoutModal.js";
import { Coins, LogIn, LogOut,Menu,UserRoundPen } from 'lucide-react';


const Header = () => {
    const navigate = useNavigate();
    const [loginLogout,setloginLogout] = useState("");

    const [isOpen,setIsOpen] = useState(false);
    const { loginUser,setLoginUser }= useContext(UserContext);

    const [isMenuBtn, setIsMenuBtn] = useState(false);
    
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
        
        if(loginUser ){
            setIsOpen(true); 
             
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

    // console.log(isMenuBtn);
    

    return (
        <div className={`w-full  bg-slate-50 shadow-xl h-20 py-4 top-0 flex fixed z-50`} >
         <div className="flex  items-center justify-between w-full  md:w-11/12 mx-auto  ">
            <div className=''>
                <Link to="/">
                    <div className="h-18 w-32">
                        <img data-testid = "logo"   src={logo} className="object-fill   "/>
                    </div>
                </Link>
            </div>  
            
            <div className={`flex gap-10  `}>
                <ul className="md:flex gap-10 text-lg flex-nowrap hidden ">
                    <li className="compStyle"><Link to="/"> Home </Link></li>
                    <li className="compStyle"><Link to="/About">About</Link></li>
                    <li className="compStyle whitespace-nowrap"> <Link to="/Contact">ContactUs</Link> </li>
                    <li className="flex hover:cursor-pointer compStyle whitespace-nowrap " onClick={micoinshandler}>
                       <p>MiCoins</p> 
                       <Coins color="#F69720"/>                    
                    </li>
                    <li className="flex compStyle items-center gap-1 "> <a className="cursor-pointer " onClick={loginLogoutHandler }>{loginLogout} </a> <a >{loginUser?<LogOut size={20} />:<LogIn size={20}/>}</a>
                      <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen}  setLoginUser={setLoginUser}> </LogoutModal>
                    </li>
                </ul>

            
           {/* {isMenuBtn && */}
            <div className={`md:hidden gap-10 shadow-md border-l-2 border-b-2 rounded-md absolute top-20 right-0 ${!isMenuBtn?'hidden':""}`} >
                <ul className= {`  bg-slate-50 text-lg  flex gap-6 flex-col text-left  px-10 pb-4`} >
                    <li className="compStyle"><Link to="/"> Home </Link></li>
                    <li className="compStyle"><Link to="/About">About</Link></li>
                    <li className="compStyle whitespace-nowrap"> <Link to="/Contact">ContactUs</Link> </li>
                    <li className="flex hover:cursor-pointer compStyle whitespace-nowrap " onClick={micoinshandler}>
                       <p>MiCoins</p> 
                       <Coins color="#F69720"/>                    
                    </li>
                    <li className="flex compStyle items-center gap-1 border rounded-md bg-orange-400 px-2 py-1 text-white whitespace-nowrap"> <a className="cursor-pointer " onClick={loginLogoutHandler }>{loginLogout} </a> <a >{loginUser?<LogOut size={20} />:<LogIn size={20}/>}</a>
                      <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen}  setLoginUser={setLoginUser}> </LogoutModal>
                    </li>
                </ul>
            </div>
            {/* } */}

            <div className="flex gap-6 mr-4 "> 
               <div className="compStyle text-lg" >
                     <Link to="/CheckoutPage" className=" flex gap-1 items-center relative" >Cart
                        <span>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="18.5" r="1.5"/>
                            <circle cx="9.5" cy="18.5" r="1.5"/>
                            <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                          </svg>
                        </span>
                        <span data-testid ="cartSize" className="absolute -top-1.5 -right-1 bg-orange-500 border text-center rounded-full w-4 px-0  text-white  text-xs ">{quantity}</span>
                     </Link>
                </div>
                    <a onClick={() => setIsMenuBtn(!isMenuBtn)} className="md:hidden mr-2 cursor-pointer"><Menu /></a>
              </div>
            </div>
         </div>
        </div>
    );
}
export default Header;
