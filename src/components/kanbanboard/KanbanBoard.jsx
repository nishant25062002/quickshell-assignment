import React, { useEffect, useState } from "react";
import "./KanbanBoard.css";
import KanbanColumn from "./KanbanColumn";
import { useDispatch, useSelector } from "react-redux";
import { ticketsAndUsers } from "../../redux/selector/ticketSelector";
import { groupTickets } from "../functions/filter";
import {
  filterGrouping,
  filterOrdering,
} from "../../redux/selector/filterSelector";
import { SetTicketsAndUsers } from "../../redux/reducer/ticketReducer";

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const data = useSelector(ticketsAndUsers);
  const grouping = useSelector(filterGrouping);
  const ordering = useSelector(filterOrdering);

  const [groupedData, setGroupedData] = useState(null);

  useEffect(() => {
    const filteredData = groupTickets(grouping, ordering, data);
    setGroupedData(filteredData);
  }, [ordering, grouping, data]);

  const moveTicket = (ticketId, targetColumnId) => {
    let ticketToMove;
    const updatedData = groupedData.map((column) => {
      if (column?.data?.some((ticket) => ticket.id === ticketId)) {
        ticketToMove = column.data.find((ticket) => ticket.id === ticketId);

        console.log("ticketToMove1", ticketToMove, grouping, targetColumnId);

        // Update ticket properties based on the grouping
        if (grouping === "users") {
          const user = data?.users?.find((user) => user.id === targetColumnId);
          ticketToMove.name = user?.name;
          ticketToMove.userId = targetColumnId;
        } else if (grouping === "status") {
          ticketToMove.status = targetColumnId;
        } else if (grouping === "priority") {
          ticketToMove.priority = targetColumnId;
        }

        console.log("ticketToMove2", ticketToMove);

        return {
          ...column,
          data: column.data.filter((ticket) => ticket.id !== ticketId),
        };
      }
      return column;
    });

    const finalData = updatedData.map((column) => {
      if (column.title === targetColumnId && ticketToMove) {
        return {
          ...column,
          data: [...column.data, ticketToMove],
        };
      }
      return column;
    });

    setGroupedData(finalData);

    const updatedMainData = {
      ...data,
      tickets: data.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, ...ticketToMove } : ticket
      ),
    };

    localStorage.setItem("ticketsAndUsers", JSON.stringify(updatedMainData));
    dispatch(SetTicketsAndUsers(updatedMainData));
  };

  return (
    <div className="Body">
      {groupedData?.length > 0 &&
        groupedData?.map((data, index) => (
          <KanbanColumn {...data} moveTicket={moveTicket} key={index} />
        ))}
    </div>
  );
};

export default KanbanBoard;
