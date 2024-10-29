import React from "react";
import PlusIcon from "../../assets/add.svg";
import ThreeDotIcon from "../../assets/3 dot menu.svg";
import TicketCard from "./TicketCard";
import CustomIcon from "../global/Icon/CustomIcon";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import { useSelector } from "react-redux";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";
import { filterGrouping } from "../../redux/selector/filterSelector";
import { useDrop } from "react-dnd";
import { USERS } from "../../utils/contants";
import { idToName } from "../../utils/other";

const KanbanColumn = ({ data, title, moveTicket }) => {
  const grouping = useSelector(filterGrouping);
  const allData = useSelector(ticketsAndUsers);

  const updatedTitle = idToName(title, allData, grouping);

  const [{ isOver }, drop] = useDrop({
    accept: "TICKET",
    drop: (item) => moveTicket(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className="Column"
      ref={drop}
      style={{ backgroundColor: isOver ? "#fafcff" : "transparent" }}
    >
      <div className="ColumnHeader">
        <div className="HeaderDetails">
          {grouping === USERS ? (
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
