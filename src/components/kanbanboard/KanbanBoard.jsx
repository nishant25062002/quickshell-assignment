import React, { useEffect, useState } from "react";
import "./KanbanBoard.css";
import KanbanColumn from "./KanbanColumn";
import { useSelector } from "react-redux";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";
import { groupTickets } from "../functions/filter";
import { useLocation } from "react-router-dom";

const KanbanBoard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const grouping = searchParams.get("grouping");
  const ordering = searchParams.get("ordering");

  const data = useSelector(ticketsAndUsers);

  const [groupedData, setGroupedData] = useState(null);

  useEffect(() => {
    const filteredData = groupTickets(grouping, ordering, data);
    console.log("filteredData", filteredData, ordering, grouping);
    setGroupedData(filteredData);
  }, [ordering, grouping, data]);

  return (
    <div className="Body">
      {groupedData?.length > 0 &&
        groupedData?.map((data, index) => (
          <KanbanColumn {...data} key={index} />
        ))}
    </div>
  );
};

export default KanbanBoard;
