import "./App.css";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
