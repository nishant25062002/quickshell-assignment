import React from "react";
import BackLogIcon from "../../assets/Backlog.svg";
import PriorityIcon from "../../assets/Img - High Priority.svg";
import ProfileAvatar from "../global/Icon/ProfileAvatar";

const TicketCard = ({ id, title, tag }) => {
  return (
    <div className="TicketCard">
      <div className="CardTop">
        {id}
        <ProfileAvatar title={title} />
      </div>
      <div className="CardDetails">
        <img src={BackLogIcon} alt="icon" />
        <div>{title}</div>
      </div>

      <div className="CardBottom">
        <div className="BorderDiv">
          <img src={PriorityIcon} alt="pic" />
        </div>

        {tag?.length > 0 &&
          tag.map((eachTag, index) => (
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
