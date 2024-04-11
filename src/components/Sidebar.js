import React from "react";
import Navbar from "./Navbar"
import Search from "./Search";
import Chats from "./Chats.js";
let Sidebar=()=>{
    return(
        <div className="Sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
};
export default Sidebar;