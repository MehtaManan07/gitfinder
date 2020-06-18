import React, { Component } from "react";

const UserItem = (props) => {
  return (
    <div className="text-center card">
      <img
        src={props.user.avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h1> {props.user.login} </h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.user.html_url}
        className="btn btn-dark btn-sm my-1"
      >
        VIEW PROFILE
      </a>
    </div>
  );
};

export default UserItem;
