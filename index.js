import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./src/components/Register";
import './src/components/index.css'
import Login from "./src/components/Login";
import Home from "./src/components/Home.js"
import { BrowserRouter,Routes,Route } from "react-router-dom";
let root=ReactDOM.createRoot(document.getElementById("root"));
let App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
root.render(<App/>);