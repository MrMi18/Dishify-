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

// Navbar Section


// Main Section
// 1 - Search Section

//2 - Cards Sections 

const App = () =>{
     return (
        <div>
           
            <Header/>
            <Outlet />
            
            <Footer/>
        </div>
        
        )
}

const appRouter = createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        
        children:[
            {
                path:"/About",
                element: <About/>
            },
            {
                path:"/Login",
                element: <Login/>
            },
            {
                 path:"/",
                 element:<Main/>,
                 
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/ResturantMenu/:resId",
                element:<ResMenu/>
            }
                      
        ],
        errorElement:<Error/>,
            
        
    },
    
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
