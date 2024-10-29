import { useEffect } from "react";
import Header from "./components/header/Header";
import KanbanBoard from "./components/kanbanboard/KanbanBoard";
import { getTicketsAndUsers } from "./api/ticketsAndUsers";
import { useDispatch } from "react-redux";
import { SetTicketsAndUsers } from "./redux/reducer/ticketReducer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getTicketsAndUsers();
        console.log(res);
        dispatch(SetTicketsAndUsers(res.data));
      } catch (error) {
        console.error(error);
      } finally {
        console.log("success");
      }
    })();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <KanbanBoard />
      </div>
    </Router>
  );
}

export default App;
