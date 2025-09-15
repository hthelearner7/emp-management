import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);
    useEffect(() => {
        // setLocalStorage();
        // console.log("hello");

        const loggedInUser = localStorage.getItem("loggedInUser");
        console.log("loggedin", loggedInUser);

        if (loggedInUser) {
            // alert("hello");
            const userData = JSON.parse(loggedInUser);
            console.log(loggedInUser);
            console.log("h2");

            console.log("loggedInUser => ", loggedInUser);
            console.log("userData => ", userData);

            setUser({ role: userData?.role });
            setLoggedInUserData(userData?.data);
        } else {
            console.log("else block");
        }
    }, []);
    useEffect(() => {
        console.log("useEffect triggered");
    }, []);

    const handleLogin = (email, password) => {
        // console.log(email, password);
        if (
            authData &&
            authData.adminsData.find(
                (admn) => admn.email == email && admn.password == password
            )
        ) {
            console.log(authData);

            const admin = authData.adminsData.find(
                (admn) => admn.email == email && admn.password == password
            );
            if (admin) {
                setUser({ role: "admins" });
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "admins", data: admin })
                );
                // setLoggedInUserData(admin);

                console.log(user);
            }
        } else if (
            authData &&
            authData.employeesData.find(
                (emp) => emp.email == email && emp.password == password
            )
        ) {
            const employee = authData.employeesData.find(
                (emp) => emp.email == email && emp.password == password
            );
            if (employee) {
                setUser({ role: "employees" });
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "employees", data: employee })
                );
                // setLoggedInUserData(employee);
                console.log(user);
            }
        } else {
            console.log("invalid credentials");
            alert("invalid credentials");
        }
    };

    return (
        <div>
            {!user && <Login handleLogin={handleLogin} />}
            {user?.role == "employees" ? (
                <EmployeeDashboard data={loggedInUserData} />
            ) : user?.role == "admins" ? (
                <AdminDashboard data={loggedInUserData} />
            ) : null}
        </div>
    );
};

export default App;
