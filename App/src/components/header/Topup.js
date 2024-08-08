import React from "react";
import { NavLink } from "react-router-dom";
const Topup = () => {
  return (
    <div className="top-up">
      <div className="top-up-des">
        Well come to Quiz App
        <NavLink to="#" className={"top-up-link"}>Dowload app</NavLink>
      </div>
    </div>
  );
};

export default Topup;
