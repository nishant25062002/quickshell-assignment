import React from "react";
// import ProfilePic from "../../assets/3 dot menu.svg";
import PlusIcon from "../../assets/add.svg";
import ThreeDotIcon from "../../assets/3 dot menu.svg";
import TicketCard from "./TicketCard";
import CustomIcon from "../global/Icon/CustomIcon";

const KanbanColumn = ({ data, title }) => {
  return (
    <div className="Column">
      <div className="ColumnHeader">
        <div className="HeaderDetails">
          <CustomIcon title={title} />
          <div>{title} </div>
          <div className="ColumnLength">{data?.length}</div>
        </div>
        <div className="HeaderIcons">
          <img src={PlusIcon} alt="icon" />
          <img src={ThreeDotIcon} alt="icon" />
        </div>
      </div>

      <div className="ColumnTicket">
        {data?.length > 0 &&
          data.map((ticket, index) => <TicketCard key={index} {...ticket} />)}
      </div>
    </div>
  );
};

export default KanbanColumn;
