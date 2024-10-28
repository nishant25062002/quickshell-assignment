import React from "react";
import "./Header.css";
import FilterIcon from "../../assets/Display.svg";
import DownIcon from "../../assets/down.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="filterDropdown">
        <img src={FilterIcon} alt="icon" />
        <div className="headerText">Display</div>
        <img src={DownIcon} alt="icon" />
      </div>
    </div>
  );
};

export default Header;
