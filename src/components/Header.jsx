import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let loginBtn = "login"
  const [loginBtnName, setLoginBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const handleLoginBtnNameToggle = () => {
    const name = loginBtnName === "Login" ? "Logout" : "Login"
    setLoginBtnName(name)
    
    loginBtn = loginBtn === "Login" ? "Logout" : "Login"
    // loginBtn = name1;
    console.log("loginBtn", loginBtn)

  }
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {" "}
          {/* className="navul" */}
          <li className="px-4">Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About Us</Link></li>
          <li className="px-4"> <Link to="/contact-us">Contact</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login-btn" onClick={() => handleLoginBtnNameToggle()}>{loginBtn}</button>
        </ul>
      </div>
      {/* <div>
        </div> */}
    </div>
  );
};

export default Header;
