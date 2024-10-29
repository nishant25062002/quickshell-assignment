import React, { useEffect } from "react";
import Header from "../header/Header";
import KanbanBoard from "../kanbanboard/KanbanBoard";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { SetGrouping, SetOrdering } from "../../redux/reducer/filterReducer";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const grouping = searchParams.get("grouping");
    const ordering = searchParams.get("ordering");

    if (grouping) dispatch(SetGrouping(grouping));
    if (ordering) dispatch(SetOrdering(ordering));
  }, []);

  return (
    <div>
      <Header />
      <KanbanBoard />
    </div>
  );
};

export default Home;
