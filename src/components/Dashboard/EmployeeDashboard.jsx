import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../TaskListNumbers/TaskListNumbers";

const EmployeeDashboard = () => {
    return (
        <div className="h-screen text-white">
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
