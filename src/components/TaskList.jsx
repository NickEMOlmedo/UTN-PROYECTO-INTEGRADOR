import TaskItem from "../components/TaskItem";

const TaskList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center vh-100">
          <TaskItem />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
