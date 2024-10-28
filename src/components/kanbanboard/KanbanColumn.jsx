import React from "react";
// import ProfilePic from "../../assets/3 dot menu.svg";
import PlusIcon from "../../assets/add.svg";
import ThreeDotIcon from "../../assets/3 dot menu.svg";
import TicketCard from "./TicketCard";

const KanbanColumn = () => {
  return (
    <div className="Column">
      <div className="ColumnHeader">
        <div className="HeaderDetails">
          <img
            src={"https://avatars.githubusercontent.com/u/80949652?v=4"}
            alt="pic"
          />
          <div>Abhideep Maity </div>
          <div>1</div>
        </div>
        <div className="HeaderIcons">
          <img src={PlusIcon} alt="icon" />
          <img src={ThreeDotIcon} alt="icon" />
        </div>
      </div>
      <TicketCard />
    </div>
  );
};

export default KanbanColumn;
