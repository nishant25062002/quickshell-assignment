import React from "react";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import CustomIcon from "../global/Icon/CustomIcon";
import { filterGrouping } from "../../redux/selector/filterSelector";
import { useSelector } from "react-redux";

const TicketCard = ({ ticket }) => {
  const grouping = useSelector(filterGrouping);

  return (
    <div className="TicketCard">
      <div className="CardTop">
        {ticket?.id}
        <ProfileAvatar title={ticket?.name} />
      </div>
      <div className="CardDetails">
        {grouping !== "status" && (
          <CustomIcon title={ticket?.status.toString()} />
        )}
        <div>{ticket?.title}</div>
      </div>

      <div className="CardBottom">
        {grouping !== "priority" && (
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
