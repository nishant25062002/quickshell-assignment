import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ value = "Select...", options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <div onClick={() => setIsOpen(!isOpen)} className="dropdownButton">
        {value}
      </div>
      {isOpen && (
        <div className="dropdownMenu">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
