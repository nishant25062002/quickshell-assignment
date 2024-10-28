// src/components/Dropdown/Dropdown.jsx
import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ title = "", options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      {title && (
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
          {title}
        </button>
      )}
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
