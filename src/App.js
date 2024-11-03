import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Main from "./Components/Main";
import Footer from "./Components/Footer";








// Navbar Section


// Main Section
// 1 - Search Section

//2 - Cards Sections 







const App = () =>{
     return (
        <div>
           
            <Header/>
            <Main/>
            <Footer/>
        </div>
        
        )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
