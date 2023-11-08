import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "antd";
import NotLogin from "../BtnNotLogin/NotLogin";
import Menu from "./Menu";
import NavBar from "../Navbar/NavBar";
import SearchModal from "./Search/SearchModal";

import LogoPage from "../../assets/logo/LogoPage.png";
import home from "../../assets/logo/icon-home.svg";
import campaign from "../../assets/logo/icon-compaign.svg";
import chat from "../../assets/logo/icon-chat.svg";
import "./style.css";
import Notification from "../Notification";
import Temp from "../../utils/temp";

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    const handleStorageChange = () => {
      setUser({ ...JSON.parse(localStorage.getItem("user")) });
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.replace("http://localhost:3000/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const registerHandler = () => {
    navigate("/register");
  };
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="header">
      <div className="header__icon">
        <div className="icon_box">
          <Link to="/">
            <img className="icon-logo" src={LogoPage} alt="" />
          </Link>
        </div>
      </div>
      <SearchModal />
      <div className="header__room">
        <Menu icons={[home, campaign, chat]} />
      </div>
      <div className="header__button">
        {user && <Notification />}
        {user && (
          <div className="avata">
            <NavBar role={user?.role} isOpen={isOpen} onchangeOpen={handleClose} logOutHandler={logOutHandler}></NavBar>
            <Avatar
              size={40}
              onClick={handleOpen}
              src={
                user?.avatar
              }
            >
              {user?.avatar ? "" : user?.firstName?.charAt(0)?.toUpperCase()}
              {/* {user?.image ? "" : user?.email.slice(0, 1).toUpperCase()} */}
          </Avatar>
          </div>
        )}
        
        {!user && (
          <NotLogin
            loginHandler={loginHandler}
            registerHandler={registerHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
