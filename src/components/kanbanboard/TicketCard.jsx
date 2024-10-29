import React from "react";
import ProfileAvatar from "../global/Icon/ProfileAvatar";
import CustomIcon from "../global/Icon/CustomIcon";
import { useLocation } from "react-router-dom";

const TicketCard = ({ ticket }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const grouping = searchParams.get("grouping");

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
