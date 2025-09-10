import CreateTask from "../Task/CreateTask.jsx";
import Header from "../Header/Header.jsx";
import AllTasks from "../Task/AllTasks.jsx";

const AdminDashboard = ({ data }) => {
    return (
        <div className="h-screen w-full p-5 flex flex-col space-y-5">
            <Header data={data} />
            <CreateTask />
            <AllTasks />
        </div>
    );
};
export default AdminDashboard;
