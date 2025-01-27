import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from './assets/DeshifyByMrMI.png'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContactUs from "./Contact";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { UserContext } from "../App";
import useLoginUser from "../utils/useLoginUser.js";
import LogoutModal from "./LogoutModal.js";
import { Coins, LogIn, LogOut,Menu,ShoppingCart,UserRoundPen } from 'lucide-react';


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loginLogout,setloginLogout] = useState("");

    const [isOpen,setIsOpen] = useState(false);
    const { loginUser,setLoginUser }= useContext(UserContext);

    const [isMenuBtn, setIsMenuBtn] = useState(false);
    

    let openPath = location.pathname;
    console.log(openPath);
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
        toast.info("You've got 10,000 MiCoins to use! Feature still under development.");
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
                    <li ><NavLink className={({isActive}) => isActive?"text-orange-400":""} to="/"> Home </NavLink></li>
                    <li ><NavLink className={({isActive}) => isActive?"text-orange-400":""} to="/About">About</NavLink></li>
                    <li className=" whitespace-nowrap"> <NavLink className={({isActive}) =>isActive?"text-orange-400":""} to="/Contact">Contact</NavLink> </li>
                    <li className="flex hover:cursor-pointer  whitespace-nowrap " onClick={micoinshandler}>
                       <a >MiCoins</a> 
                       <Coins color="#F69720"/>                    
                    </li>
                    <li className="flex  items-center gap-1 cursor-pointer "> 
                        <a className={openPath ==="/login"?"text-orange-400":""}  onClick={loginLogoutHandler }>{loginLogout} </a> 
                        <a >{loginUser?<LogOut size={20}  color={openPath==="/login"?"#F69720":"#000000"}/>:<LogIn size={20} color={openPath==="/login"?"#F69720":"#000000"}/>}</a>
                        <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen}  setLoginUser={setLoginUser}> </LogoutModal>
                    </li>
                </ul>

            
           {/* {isMenuBtn && */}
            <div className={`md:hidden gap-10 shadow-md border-l-2 border-b-2 rounded-md absolute top-20 right-0 ${!isMenuBtn?'hidden':""}`} >
                <ul className= {`  bg-slate-50 text-lg  flex gap-6 flex-col text-left  px-10 pb-4`} >
                    <li className= {`compStyle ${openPath ==="/login"?"text-orange-400":""}`}><Link to="/"> Home </Link></li>
                    <li className={`compStyle ${openPath ==="/About"?"text-orange-400":""}`}><Link to="/About">About</Link></li>
                    <li className= {`compStyle whitespace-nowrap ${openPath ==="/Contact"?"text-orange-400":""}`}> <Link to="/Contact">Contact</Link> </li>
                    <li className="flex hover:cursor-pointer compStyle whitespace-nowrap " onClick={micoinshandler}>
                       <p>MiCoins</p> 
                       <Coins color="#F69720"/>                    
                    </li>   
                    <li className="flex cursor-pointer  items-center gap-1 border rounded-md bg-orange-400 px-2 py-1 text-white whitespace-nowrap">
                         <a className=" " onClick={loginLogoutHandler }>{loginLogout} </a> <a >{loginUser?<LogOut size={20} />:<LogIn size={20} />}</a>
                      <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen}  setLoginUser={setLoginUser}> </LogoutModal>
                    </li>
                </ul>
            </div>
            {/* } */}

            <div className="flex gap-6 mr-4 "> 
               <div className=" text-lg" >
                     <NavLink  to="/CheckoutPage" className={ `flex gap-1 items-center relative ${openPath==="/CheckoutPage"?"text-orange-400":""}`} >Cart
                        <span>
                         
                          <ShoppingCart size={20}  color={openPath==="/CheckoutPage"?"#F69720":"#000000"}/>
                        </span>
                        <span data-testid ="cartSize" className="absolute -top-1.5 -right-1 bg-orange-500 border text-center rounded-full w-4 px-0  text-white  text-xs ">{quantity}</span>
                     </NavLink>
                </div>
                    <a onClick={() => setIsMenuBtn(!isMenuBtn)} className="md:hidden mr-2 cursor-pointer"><Menu /></a>
              </div>
            </div>
         </div>
        </div>
    );
}
export default Header;
