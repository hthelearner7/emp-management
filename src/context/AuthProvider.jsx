import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const [userData, setUserData] = useState(null);

    const setEmployeeUserData = (userdata, newData) => {
        setUserData({
            employeesData: newData,
            adminsData: userData.adminsData,
        });
    };

    // useEffect(() => {
    //     // setLocalStorage();
    //     // console.log(getLocalStorage());

    //     const { employeesData, adminsData } = getLocalStorage();
    //     setUserData({ employeesData, adminsData });
    //     // console.log(userData);
    // }, []);

    const [userData, setUserData] = useState({
        employeesData: JSON.parse(localStorage.getItem("employees")) || [],
        adminsData: JSON.parse(localStorage.getItem("admins")) || [],
    });

    return (
        <div>
            <AuthContext.Provider value={{ userData, setEmployeeUserData }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
