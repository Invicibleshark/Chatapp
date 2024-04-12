import React, { Children, useContext } from "react";
import ReactDOM from "react-dom/client";
import Register from "./src/components/Register";
import './src/components/index.css'
import Login from "./src/components/Login";
import Home from "./src/components/Home.js"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { AuthContext } from "./src/context/AuthContext.js";
import { AuthContextProvider } from "./src/context/AuthContext.js";
import { ChatContextProvider } from "./src/context/ChatContext.js";
let root=ReactDOM.createRoot(document.getElementById("root"));
let App=()=>{
    const {currentUser}=useContext(AuthContext);
    const ProtectedRoute=({children})=>{
        if(!currentUser){
            return <Navigate to="/"/>
        }
        return children;
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
root.render(
    <AuthContextProvider>
    <ChatContextProvider>   
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);