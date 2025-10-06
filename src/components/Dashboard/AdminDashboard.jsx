import CreateTask from "../Task/CreateTask.jsx";
import Header from "../Header/Header.jsx";
import AllTasks from "../Task/AllTasks.jsx";
import Announcements from "../Announcements/Announcements.jsx";
import AddAnnouncement from "../Announcements/AddAnnouncement.jsx";
import AllAnnouncements from "../Announcements/AllAnnouncements.jsx";

const AdminDashboard = (props) => {
    // console.log("props", props);

    const { data, changeUser } = props;
    return (
        <div className="h-screen w-full p-5 flex flex-col space-y-5">
            <Header changeUser={changeUser} data={data} />
            <CreateTask />
            <AllTasks />
            <Announcements isAdmin={true} />
        </div>
    );
};
export default AdminDashboard;
