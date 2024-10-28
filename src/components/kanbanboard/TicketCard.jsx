import React from "react";
import BackLogIcon from "../../assets/Backlog.svg";
import PriorityIcon from "../../assets/Img - High Priority.svg";

const TicketCard = () => {
  return (
    <div className="TicketCard">
      <div className="CardTop">
        CAM-5
        <img
          src="https://avatars.githubusercontent.com/u/80949652?v=4"
          alt="pic"
        />
      </div>
      <div className="CardDetails">
        <img src={BackLogIcon} alt="" />
        <div>Create Onboarding Tutorial For New Users</div>
      </div>
      <div className="CardBottom">
        <div className="BorderDiv">
          <img src={PriorityIcon} alt="pic" />
        </div>
        <div className="BorderDiv">
          <div className="Dot" />
          Feature Request
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
