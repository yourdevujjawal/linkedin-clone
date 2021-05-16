import React from "react";
import "./Avatar.css";

function Avatar({ name, photoUrl }) {
  return (
    <>
      {photoUrl ? (
        <img src={photoUrl} alt={name} className="avatar" />
      ) : (
        <span className="avatar">{name[0]}</span>
      )}
    </>
  );
}

export default Avatar;
