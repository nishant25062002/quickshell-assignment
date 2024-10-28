import React, { useCallback, useEffect, useRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import "./Dialog.css";
import { useDispatch, useSelector } from "react-redux";
import { SetGrouping, SetOrdering } from "../../redux/reducer/filterReducer";
import {
  filterGrouping,
  filterOrdering,
} from "../../redux/selector/filterSelector";

const DisplayDialog = ({ setShowDialog }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const grouping = useSelector(filterGrouping);
  const ordering = useSelector(filterOrdering);

  const handleGrouping = (type, val) => {
    if (type === "grouping") {
      dispatch(SetGrouping(val));
    } else {
      dispatch(SetOrdering(val));
    }
  };

  const options = [
    {
      title: "Grouping",
      options: [
        { label: "Status", value: "status" },
        { label: "Priority", value: "priority" },
        { label: "User", value: "user" },
      ],
      onSelect: (val) => handleGrouping("grouping", val),
      value: grouping,
    },
    {
      title: "Ordering",
      options: [
        { label: "Priority", value: "priority" },
        { label: "Title", value: "title" },
      ],
      onSelect: (val) => handleGrouping("ordering", val),
      value: ordering,
    },
  ];

  const handleClose = useCallback(() => {
    setShowDialog(false);
  }, []);

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
    <div className="Dialog" ref={ref}>
      {options.map((option) => (
        <Dropdown {...option} />
      ))}
    </div>
  );
};

export default DisplayDialog;
