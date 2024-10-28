import React, { useState } from "react";
import "./Dropdown.css";
import DownIcon from "../../assets/down.svg";

const Dropdown = ({ title = "Select...", options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Dropdown">
      <div className="DropdownTitle">{title}</div>
      <div className="DropdownBody">
        <div onClick={handleDropdown} className="DropdownValue">
          {title}
          <img src={DownIcon} alt="icon" />
        </div>
        {isOpen && (
          <div className="DropdownMenu">
            {options.map((option, index) => (
              <div>
                <div
                  key={index}
                  onClick={() => {
                    onSelect(option.value);
                    handleDropdown();
                  }}
                  className="DropdownField"
                >
                  {option.label}
                </div>
                {index + 1 !== options.length && <div className="Divider" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
