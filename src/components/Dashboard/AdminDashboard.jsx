import CreateTask from "../Task/CreateTask.jsx";
import Header from "../Header/Header.jsx";
import AllTasks from "../Task/AllTasks.jsx";

const AdminDashboard = (props) => {
    console.log("props", props);

    const { data, changeUser } = props;
    return (
        <div className="h-screen w-full p-5 flex flex-col space-y-5">
            <Header changeUser={changeUser} data={data} />
            <CreateTask />
            <AllTasks />
        </div>
    );
};
export default AdminDashboard;
