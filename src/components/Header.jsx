import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login")
  const handleLoginBtnNameToggle = () => {
    const name = loginBtnName === "Login" ? "Logout" : "Login"
    setLoginBtnName(name)
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          {" "}
          {/* className="navul" */}
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact-us">Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => handleLoginBtnNameToggle()}>{loginBtnName}</button>
        </ul>
      </div>
      {/* <div>
        </div> */}
    </div>
  );
};

export default Header;
