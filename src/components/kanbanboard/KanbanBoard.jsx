import React from "react";
import "./KanbanBoard.css";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  return (
    <div className="Body">
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
    </div>
  );
};

export default KanbanBoard;
