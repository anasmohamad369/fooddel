import React, { useContext, useState } from "react";
import "./NabBar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const NavBar = ({ SetshowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);



  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="sc" className="logo" />
        </Link>

         <ul className="navmenu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-app
          </li>
          <li
            onClick={() => setMenu("contactus")}
            className={menu === "contactus" ? "active" : ""}
          >
            Contact us
          </li>
        </ul>
        <div className="navbarright">
          <img src={assets.search_icon} alt="" />
          <div className="navsearchicon">
            <Link to="/cart">
              {" "}
              <img src={assets.basket_icon} />
            </Link>
            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token || token === "" ? (
  <button onClick={() => SetshowLogin(true)}>Sign in</button>
) : (
  <div className="navbar-profile">
    <img src={assets.profile_icon} alt="" />
    <ul className="nav-profile-dropdown">
      <li>
        <img src={assets.bag_icon} alt="" />
        <p>order</p>
      </li>
      <hr />
      <li >
        <img onClick={() => setToken(null)} src={assets.logout_icon} alt="" />
        <p>Logout</p>
      </li>
    </ul>
  </div>
)}

        </div>
      </div>
    </>
  );
};

export default NavBar;
