import React, { useEffect, useState } from "react";
import "./KanbanBoard.css";
import KanbanColumn from "./KanbanColumn";
import { useSelector } from "react-redux";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";
import { groupTickets } from "../functions/filter";
import {
  filterGrouping,
  filterOrdering,
} from "../../redux/selector/filterSelector";

const KanbanBoard = () => {
  const grouping = useSelector(filterGrouping);
  const ordering = useSelector(filterOrdering);

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
