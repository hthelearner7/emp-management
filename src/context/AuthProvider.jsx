import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log(getLocalStorage());

        const { employeesData, adminsData } = getLocalStorage();
        setUserData({ employeesData, adminsData });
        console.log(userData);
    }, []);

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
