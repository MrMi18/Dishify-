import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"


test("Expected logo in header Component", () =>{

    const header = render(
        <StaticRouter>
        <Provider store={store}>
           <Header/>
        </Provider>
        </StaticRouter>
    )
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/logo.png");

})

//for item cart size 
test("Cart size should be intialy 0", () =>{

    const header = render(
        <StaticRouter>
        <Provider store={store}>
           <Header/>
        </Provider>
        </StaticRouter>
    )
    const cartSize = header.getByTestId("cartSize");
    
    expect(cartSize.innerHTML).toBe("0");

})