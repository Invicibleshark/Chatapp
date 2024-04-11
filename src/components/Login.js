import { Link } from "react-router-dom";
let Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <form>
                    <span className="logo">Eazy Chat</span>
                    <span className="title">Login</span>
                    <input type="email" placeholder="Enter Your EmailId" />
                    <input type="password" placeholder="Enter Your Password" />
                    <button>Login</button>
                    <p>or Sign Up to Your Account</p>
                </form>
            </div>
        </div>
    )
};

export default Login;
