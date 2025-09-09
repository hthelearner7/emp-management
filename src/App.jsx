import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null);
    const authData = useContext(AuthContext);
    useEffect(() => {
        setLocalStorage();
        if (authData) {
            const loggedInUser = JSON.parse(
                localStorage.getItem("loggedInUser")
            );
            setUser(loggedInUser.role);
        }
    }, [user]);

    const handleLogin = (email, password) => {
        // console.log(email, password);
        if (
            authData.adminsData.find(
                (admn) => admn.email == email && admn.password == password
            )
        ) {
            setUser("admins");
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({ role: "admins" })
            );
            console.log(user);
        } else if (
            authData.employeesData.find(
                (admn) => admn.email == email && admn.password == password
            )
        ) {
            setUser("employees");
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({ role: "employees" })
            );
            console.log(user);
        } else {
            console.log("invalid credentials");
        }
    };

    return (
        <div>
            {!user && <Login handleLogin={handleLogin} />}
            {user == "employees" && <EmployeeDashboard />}
            {user == "admins" && <AdminDashboard />}
        </div>
    );
};

export default App;
