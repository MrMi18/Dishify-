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
import Cart from "./Components/cart";
import CheckoutPage from "./Components/CheckoutPage";
// Navbar Section


// Main Section
// 1 - Search Section

//2 - Cards Sections 

const App = () =>{
     return (
        <div>
           <Provider store={store}>
            <Header/>
            
            <Outlet />
            
            <Footer/>
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
                 path:"/Cart",
                 element:<Cart/>,
                 
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
