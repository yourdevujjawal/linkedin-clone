import React from "react";
import { useSelector } from "react-redux";
import "./HeaderOption.css";
import { selectUser } from "./reducers/userReducer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function HeaderOption({ title, Icon }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {!!user && !Icon ? (
        user.photoUrl ? (
          <img
            src={user.photoUrl}
            className="headerOption__icon avatar"
            alt={title}
          />
        ) : (
          <span className="headerOption__icon avatar">
            {user.displayName[0]}
          </span>
        )
      ) : (
        !Icon && <AccountCircleIcon className="headerOption__icon" />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
