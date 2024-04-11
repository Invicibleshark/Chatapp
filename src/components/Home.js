import React from "react";
import Sidebar from "./Sidebar"
import Chat from "./Chat.js"
let Home=()=>{
    return(
        <div className="HomePage">
            <div className="Container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
};
export default Home;