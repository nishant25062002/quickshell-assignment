import React, { useState } from "react";
import "./Header.css";
import FilterIcon from "../../assets/Display.svg";
import DownIcon from "../../assets/down.svg";
import DisplayDialog from "../dialogs/DisplayDialog";

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);

  const onClickDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="Header">
      <div className="filterDropdown" onClick={onClickDialog}>
        <img src={FilterIcon} alt="icon" />
        <div className="headerText">Display</div>
        <img src={DownIcon} alt="icon" />
      </div>
      {showDialog && <DisplayDialog />}
    </div>
  );
};

export default Header;
