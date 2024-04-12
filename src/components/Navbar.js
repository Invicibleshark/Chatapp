import React, { useContext } from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../../firebase.js"
import { AuthContext } from '../context/AuthContext.js';
export const Navabar = () => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className='Navbar'>
      <span className='logo'>Eazy Chat</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="userImage"/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}
export default  Navabar;