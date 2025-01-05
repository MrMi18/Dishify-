// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import store from "../utils/store";
// import logo from "./assets/logo.png";

// const Header = () => {
//     const cartItem = useSelector(store => store.cart.item);

//     return (
//         <div className="flex items-center bg-indigo-500 h-20 justify-between px-4">
//             {/* Logo */}
//             <div>
//                 <Link to="/">
//                     <img src={logo} alt="Logo" className="h-16 w-28 object-contain" />
//                 </Link>
//             </div>

//             {/* Navigation */}
//             <ul className="flex gap-8 text-white text-lg">
//                 <li>
//                     <Link to="/" className="hover:text-indigo-300">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/About" className="hover:text-indigo-300">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/Login" className="hover:text-indigo-300">Login</Link>
//                 </li>
//                 <li className="flex items-center gap-1">
//                     <Link to="/CheckoutPage" className="hover:text-indigo-300">Cart</Link>
//                     <span>
//                         <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
//                             <circle cx="16.5" cy="18.5" r="1.5" />
//                             <circle cx="9.5" cy="18.5" r="1.5" />
//                             <path d="M18 16H8a1 1 0 01-.958-.713L4.256 6H3a1 1 0 010-2h2a1 1 0 01.958.713L6.344 6H21a1 1 0 01.937 1.352l-3 8A1 1 0 0118 16zm-9.256-2h8.563l2.25-6H6.944z" />
//                         </svg>
//                     </span>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Header;



import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItem = useSelector(store => store.cart.item);
    
    return (
        <div className="w-full  bg-slate-50 shadow-xl h-20 py-4  flex   ">
        <div className="flex items-center justify-between  w-10/12 mx-auto  ">
            <div className="">
                <Link to="/">
                    <div className="h-18 w-32">
                        <img src={logo} className="object-fill   "/>
                    </div>
                </Link>
            </div>
            <div>
                <ul className="flex gap-10 text-lg ">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li >
                        <Link to="/CheckoutPage" className="flex gap-1 items-center" >Cart
                        <span>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="18.5" r="1.5"/>
                            <circle cx="9.5" cy="18.5" r="1.5"/>
                            <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                          </svg>
                        </span>
                        </Link>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Header;
