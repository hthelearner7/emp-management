import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../TaskListNumbers/TaskListNumbers";

const EmployeeDashboard = (props) => {
    // console.log(props);

    return (
        <div className="h-screen text-white">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    );
};

export default EmployeeDashboard;
