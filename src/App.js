import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import FoodItems from "./Components/FoodItems";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import ResMenu from "./Components/ResMenu";
import Login from "./Components/Login";
import ItemsPage from "./Components/ItemsPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import CheckoutPage from "./Components/CheckoutPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NameInfo from "./Components/NameInfo";
import Test from "./Components/Test";

// Navbar Section


// Main Section
// 1 - Search Section

//2 - Cards Sections 

const App = () =>{
     return (
        <div >
            {/* <NameInfo/> */}
         <Provider store={store}>
            
            <Header/>
            
            <Outlet  />
            
            <Footer/>
            <ToastContainer 
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            bodyClassName="toastBody"
            
            />
         </Provider>
        </div>
        
        )
}

const appRouter = createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        
        children:[
            {
                path:"/",
                element:<Main/>,
                
           },
    
           {
                path:"/About",
                element: <About/>
            },
            {
                path:"/Login",
                element: <Login/>
            },
            {
                path:"/NameInfo",
                element: <NameInfo/>
            },
            
            {
                path:"/Test",
                element: <Test/>
            },
            
            {
                 path:"/CheckoutPage",
                 element:<CheckoutPage/>,
                 
            },
            
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/ResturantMenu/:resId",
                element:<ResMenu/>
            },
            {
                path:"/collection/:collection_id/:tags",
                element:<ItemsPage/>
            }
                      
        ],
        errorElement:<Error/>,
            
        
    },
    
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
