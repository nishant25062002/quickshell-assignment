import React, { useState } from "react";
import "./Header.css";
import FilterIcon from "../../assets/Display.svg";
import DownIcon from "../../assets/down.svg";
import DisplayDialog from "../dialogs/DisplayDialog";

const Header = () => {
  const [showDialog, setShowDialog] = useState(true);

  const onClickDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="Header">
      <div className="FilterDropdown" onClick={onClickDialog}>
        <img src={FilterIcon} alt="icon" />
        <div className="HeaderText">Display</div>
        <img src={DownIcon} alt="icon" />
      </div>

      {showDialog && <DisplayDialog setShowDialog={setShowDialog} />}
    </div>
  );
};

export default Header;
