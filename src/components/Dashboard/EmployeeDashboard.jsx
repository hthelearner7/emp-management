import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../TaskListNumbers/TaskListNumbers";

const EmployeeDashboard = ({ data }) => {
    console.log(data);

    return (
        <div className="h-screen text-white">
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;
