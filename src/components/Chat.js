import React , { useContext }from "react";
import IMG from "../utils/dots.png"
import ADDCONTACTS from "../utils/AddContacts.png"
import Video from "../utils/Video.png"
import Messages from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";
let Chat=()=>{
    const { data } = useContext(ChatContext);
    return(
        <div className="Chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span> 
                <div className="chatIcons">
                    <img className="Setimage" src={Video} alt="" />
                    <img className="Setimage" src={IMG} alt="" />
                    <img className="Setimage"  src={ADDCONTACTS} alt="" />
                </div>
            </div>
        <Messages/>
        <Input/>
        </div>
    )
};
export default Chat;