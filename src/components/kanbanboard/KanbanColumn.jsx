import React from "react";
import PlusIcon from "../../assets/add.svg";
import ThreeDotIcon from "../../assets/3 dot menu.svg";
import TicketCard from "./TicketCard";
import CustomIcon from "../global/Icon/CustomIcon";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import { useSelector } from "react-redux";
import { idToName } from "../functions/other";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";
import { useLocation } from "react-router-dom";

const KanbanColumn = ({ data, title }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const grouping = searchParams.get("grouping");

  const allData = useSelector(ticketsAndUsers);

  const updatedTitle = idToName(title, allData, grouping);

  return (
    <div className="Column">
      <div className="ColumnHeader">
        <div className="HeaderDetails">
          {grouping === "users" ? (
            <ProfileAvatar title={updatedTitle} />
          ) : (
            <CustomIcon title={title} />
          )}
          <div>{updatedTitle}</div>
          <div className="ColumnLength">{data?.length}</div>
        </div>
        <div className="HeaderIcons">
          <img src={PlusIcon} alt="icon" />
          <img src={ThreeDotIcon} alt="icon" />
        </div>
      </div>

      <div className="ColumnTicket">
        {data?.length > 0 &&
          data.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
