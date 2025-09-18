import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import LoggedInContext from "../utils/LoggedInContext";
const Header = () => {
  let loginBtn = "login"
  const [loginBtnName, setLoginBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  const {isLoggedIn} = useContext(LoggedInContext)
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
          <li className="px-4">Online Status: {onlineStatus === isLoggedIn ? "✅" : "🔴"}</li>
          {/* <li className="px-4">Online Status: {onlineStatus === true ? "✅" : "🔴"}</li> */}
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About Us</Link></li>
          <li className="px-4"> <Link to="/contact-us">Contact</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="px-4 cursor-pointer hover:bg-amber-50 rounded-lg" onClick={() => handleLoginBtnNameToggle()}>{loginBtnName}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
      {/* <div>
        </div> */}
    </div>
  );
};

export default Header;
