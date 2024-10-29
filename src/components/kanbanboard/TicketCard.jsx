import React from "react";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import CustomIcon from "../global/Icon/CustomIcon";
import { filterGrouping } from "../../redux/selector/filterSelector";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { PRIORITY, STATUS } from "../../utils/contants";

const TicketCard = ({ ticket }) => {
  const grouping = useSelector(filterGrouping);

  const [{ isDragging }, drag] = useDrag({
    type: "TICKET",
    item: { id: ticket.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="TicketCard"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <div className="CardTop">
        {ticket?.id}
        <ProfileAvatar title={ticket?.name} />
      </div>
      <div className="CardDetails">
        {grouping !== STATUS && (
          <CustomIcon title={ticket?.status.toString()} />
        )}
        <div>{ticket?.title}</div>
      </div>

      <div className="CardBottom">
        {grouping !== PRIORITY && (
          <div className="BorderDiv">
            <CustomIcon title={ticket?.priority.toString()} />
          </div>
        )}

        {ticket?.tag?.length > 0 &&
          ticket?.tag.map((eachTag, index) => (
            <div className="BorderDiv" key={index}>
              <div className="Dot" />
              <div>{eachTag}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TicketCard;
