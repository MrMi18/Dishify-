import React, { createContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
// import ResMenu from "./Components/ResMenu";
import ItemsPage from "./Components/ItemsPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import CheckoutPage from "./Components/CheckoutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Test from "./Components/Test";
import ContactUs from "./Components/Contact";
import LoginSignupPage from "./Components/Login";
import useLoginUser from "./utils/useLoginUser.js";

import { QueryClient, QueryClientProvider } from "react-query";
import Shimmer from "./Components/Shimmer.js";
import useScrollToTop from "./utils/useScrollToTop.js";

const ResMenu = lazy(() => import('./Components/ResMenu.js'));

const UserContext = createContext();
const MainDataContext = createContext();

const queryClient = new QueryClient();

const App = () => {
  useScrollToTop();
  const { loginUser,setLoginUser }= useLoginUser();
  
 
 

  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ loginUser,setLoginUser }}>
        <Provider store={store}>
          <Header />
          
          <Outlet />
          
          <Footer />
          <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" bodyClassName="toastBody"
          />
        </Provider>
      </UserContext.Provider>
      </QueryClientProvider>
    </div>
  );
};
export { UserContext };
export {MainDataContext};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Main />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <LoginSignupPage />,
      },

      {
        path: "/Test",
        element: <Test />,
      },

      {
        path: "/CheckoutPage",
        element: <CheckoutPage />,
      },

      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/ResturantMenu/:resId",
        element: <Suspense fallback={<Shimmer/>}>
           <ResMenu />
           </Suspense>,
      },
      {
        path: "/collection/:collection_id/:tags",
        element: <ItemsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
