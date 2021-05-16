import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import { selectUser } from "./reducers/userReducer";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <LinkedInIcon className="header__logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          title={!!user ? user.displayName.split(" ")[0] : "Login"}
        />
      </div>
    </div>
  );
}

export default Header;
