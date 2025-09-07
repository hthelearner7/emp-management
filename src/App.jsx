import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
    return (
        <div>
            {/* <Login /> */}
            {/* <EmployeeDashboard /> */}
            <AdminDashboard />
        </div>
    );
};

export default App;
