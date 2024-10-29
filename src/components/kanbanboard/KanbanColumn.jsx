import React from "react";
import PlusIcon from "../../assets/add.svg";
import ThreeDotIcon from "../../assets/3 dot menu.svg";
import TicketCard from "./TicketCard";
import CustomIcon from "../global/Icon/CustomIcon";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import { useSelector } from "react-redux";
import { filterGrouping } from "../../redux/selector/filterSelector";
import { idToName } from "../functions/other";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";

const KanbanColumn = ({ data, title }) => {
  const grouping = useSelector(filterGrouping);
  const allData = useSelector(ticketsAndUsers);

  return (
    <div className="Column">
      <div className="ColumnHeader">
        <div className="HeaderDetails">
          {grouping === "users" ? (
            <ProfileAvatar title={title} />
          ) : (
            <CustomIcon title={title} />
          )}
          <div>{idToName(title, allData, grouping)}</div>
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
