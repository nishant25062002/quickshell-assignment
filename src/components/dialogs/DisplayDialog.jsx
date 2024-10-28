import React from "react";
import Dropdown from "../dropdown/Dropdown";
import "./Dialog.css";

const DisplayDialog = () => {
  const options = [
    {
      title: "Grouping",
      options: [
        { label: "Status", value: "Status" },
        { label: "User", value: "User" },
      ],
    },
    {
      title: "Ordering",
      options: [{ label: "Priority", value: "Priority" }],
    },
  ];

  // { label: "Status", value: 4 },
  //       { label: "High", value: 3 },
  //       { label: "Medium", value: 2 },
  //       { label: "Low", value: 1 },
  //       { label: "No priority", value: 0 },

  return (
    <div className="Dialog">
      {options.map((option) => (
        <Dropdown {...option} />
      ))}
    </div>
  );
};

export default DisplayDialog;
