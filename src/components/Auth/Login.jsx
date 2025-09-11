import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        handleLogin(email, password);
        setEmail("");
        setPassword("");
        e.preventDefault();
    };

    return (
        <div className="text-md bg-gray-800 text-white h-screen w-screen flex flex-col justify-center items-center ">
            <div className="border-2 border-yellow-500 h-2/3 w-2/3 rounded-2xl">
                <div className="border-b-2 border-yellow-600 h-1/7 text-center text-xl p-2 text-yellow-400">
                    Login Page
                </div>
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="flex flex-col justify-center gap-10 items-center h-full w-full"
                >
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-1/6 w-3/5 border-2 rounded-lg border-yellow-600 outline-none p-4"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-1/6 w-3/5 border-2 rounded-lg border-yellow-600 outline-none p-4"
                        type="password"
                        label="password"
                        placeholder="Enter your password"
                    />
                    <div className="border-t-2 w-full border-yellow-600 flex flex-col justify-center items-center h-20">
                        <button className="h-12 w-1/5 bg-blue-400 rounded-full outline-none">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
