import React, { useCallback, useEffect, useRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import "./Dialog.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetGrouping, SetOrdering } from "../../redux/reducer/filterReducer";
import {
  filterGrouping,
  filterOrdering,
} from "../../redux/selector/filterSelector";
import { GroupOptions, OrderOptions } from "../../utils/contants";

const DisplayDialog = ({ setShowDialog }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const grouping = useSelector(filterGrouping);
  const ordering = useSelector(filterOrdering);

  const handleFilterVal = (type, val) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(type, val);
    navigate(`/?${searchParams.toString()}`);

    if (type === "grouping") {
      dispatch(SetGrouping(searchParams.get("grouping")));
    } else {
      dispatch(SetOrdering(searchParams.get("ordering")));
    }
  };

  const options = [
    {
      title: "Grouping",
      options: GroupOptions,
      onSelect: (val) => handleFilterVal("grouping", val),
      value: grouping,
    },
    {
      title: "Ordering",
      options: OrderOptions,
      onSelect: (val) => handleFilterVal("ordering", val),
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
