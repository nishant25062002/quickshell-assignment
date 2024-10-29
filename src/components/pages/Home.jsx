import React, { useEffect } from "react";
import Header from "../header/Header";
import KanbanBoard from "../kanbanboard/KanbanBoard";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SetGrouping, SetOrdering } from "../../redux/reducer/filterReducer";
import { GroupOptions, OrderOptions } from "../../utils/contants";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const grouping = searchParams.get("grouping");
    const ordering = searchParams.get("ordering");

    if (
      !Object.values(GroupOptions).includes(grouping) ||
      !Object.values(OrderOptions).includes(ordering)
    ) {
      navigate("/");
      return;
    }

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
