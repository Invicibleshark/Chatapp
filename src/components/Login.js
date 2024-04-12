import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Register from "./Register";
let Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <span className="logo">Eazy Chat</span>
                    <span className="title">Login</span>
                    <input type="email" placeholder="Enter Your EmailId" />
                    <input type="password" placeholder="Enter Your Password" />
                    <button>Login</button>
                    {err && <span>Something Went Wrong</span>}
                    <p>or<Link to="/register">Sign Up</Link>  to Your Account</p>
                </form>
            </div>
        </div>
    )
};

export default Login;
