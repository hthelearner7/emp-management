import Header from "../Header/Header";
import AllNotes from "../Notes/AllNotes";
import Notesz from "../Notes/Notesz";
import ProgressBar from "../ProgressBar/ProgressBar";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../TaskListNumbers/TaskListNumbers";

const EmployeeDashboard = (props) => {
    // console.log(props);

    return (
        <div className="h-screen text-white">
            <Header changeUser={props.changeUser} data={props.data} />
            <div className="flex justify-between items-center">
                <ProgressBar />
                <Notesz />
            </div>
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
            <AllNotes />
        </div>
    );
};

export default EmployeeDashboard;
