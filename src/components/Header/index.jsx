import React, { useContext, useEffect, useRef } from "react";
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
import { AuthContext } from "../../context/auth.context";
import { NotificationContext } from "../../context/Notification.context";
import { ToastInfo } from "../../utils/Utils";
import useOnClickOutside from "../../hook/use-onclick-outside";

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    const handleStorageChange = () => {
      setUser({ ...JSON.parse(localStorage.getItem("user")) });
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const logOutHandler = () => {
    logout()
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
    setIsOpen(false);
  }
  const { notifications } = useContext(NotificationContext);
  const [countNotification, setCountNotification] = useState();
  const countNotificationRef = useRef(countNotification);
  useEffect(() => {
    if (notifications) {
      const unreadMessages = notifications.filter(message => message.read === false);
      const numUnreadMessages = unreadMessages.length;
      if (countNotificationRef.current === 0 && numUnreadMessages > 0) {
        ToastInfo(unreadMessages[unreadMessages.length - 1].title)
      }
      setCountNotification(numUnreadMessages);
      countNotificationRef.current = numUnreadMessages;
    }
  }, [notifications]);
  
  const dropRef = useRef();
  useOnClickOutside(dropRef, handleClickOutside);

  function handleClickOutside() {
    handleClose();
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
        {user && <Notification countNotification={countNotification} />}
        {countNotification > 0 && (
          <span className={"noti-badge"}>{countNotification}</span>
        )}
        {user && (
          <div className="avata" ref={dropRef}>
            <NavBar role={user?.role} isOpen={isOpen}  logOutHandler={logOutHandler}></NavBar>
            <Avatar
              size={40}
              onClick={handleOpen}
              src={
                user?.avatar
              }
            >
              {user?.avatar ? "" : user?.firstName?.charAt(0)?.toUpperCase()}
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
