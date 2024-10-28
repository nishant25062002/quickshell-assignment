import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import DownIcon from "../../assets/down.svg";

const Dropdown = ({ title = "Select...", value, options, onSelect }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find(
    (option) => option?.value?.toString() === value?.toString()
  )?.label;

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelectValue = (option) => {
    onSelect(option.value);
    console.log(option.value);
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div className="Dropdown" ref={ref}>
      <div className="DropdownTitle">{title}</div>

      <div className="DropdownBody">
        <div onClick={handleOpen} className="DropdownValue">
          {selectedLabel ? selectedLabel : "Select..."}
          <img src={DownIcon} alt="icon" />
        </div>

        {isOpen && (
          <div className="DropdownMenu">
            {options.map((option, index) => (
              <div key={index}>
                <div
                  onClick={() => handleSelectValue(option)}
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
