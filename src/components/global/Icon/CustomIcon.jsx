import React from "react";
import BackLogIcon from "../../../assets/Backlog.svg";
import CancelledIcon from "../../../assets/Cancelled.svg";
import Done from "../../../assets/Done.svg";
import HPrioIcon from "../../../assets/Img - High Priority.svg";
import MPrioIcon from "../../../assets/Img - Medium Priority.svg";
import LPrioIcon from "../../../assets/Img - Low Priority.svg";
import NPrioIcon from "../../../assets/No-priority.svg";
import InProgressIcon from "../../../assets/in-progress.svg";
import UrgentIcon from "../../../assets/SVG - Urgent Priority colour.svg";
import UrgentGreyIcon from "../../../assets/SVG - Urgent Priority grey.svg";
import TodoIcon from "../../../assets/To-do.svg";

export const IconImage = ({ icon }) => <img src={icon} alt="icon" />;

const CustomIcon = ({ title = "" }) => {
  let icon;

  if (title?.toLowerCase().includes("4")) {
    icon = UrgentIcon;
  } else if (title?.toLowerCase().includes("3")) {
    icon = HPrioIcon;
  } else if (title?.toLowerCase().includes("2")) {
    icon = MPrioIcon;
  } else if (title?.toLowerCase().includes("1")) {
    icon = LPrioIcon;
  } else if (title?.toLowerCase().includes("0")) {
    icon = NPrioIcon;
  } else if (title?.toLowerCase().includes("1")) {
    icon = UrgentIcon;
  } else if (title?.toLowerCase().includes("todo")) {
    icon = TodoIcon;
  } else if (title?.toLowerCase().includes("done")) {
    icon = Done;
  } else if (title?.toLowerCase().includes("backlog")) {
    icon = BackLogIcon;
  } else if (title?.toLowerCase().includes("in progress")) {
    icon = InProgressIcon;
  } else if (title?.toLowerCase().includes("canceled")) {
    icon = CancelledIcon;
  } else if (title?.toLowerCase().includes("urgent")) {
    icon = UrgentGreyIcon;
  } else {
    icon = NPrioIcon;
  }

  return <IconImage icon={icon} />;
};

export default CustomIcon;
