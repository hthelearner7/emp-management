import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ task }) => {
    const authData = useContext(AuthContext);

    const { userData, setEmployeeUserData } = authData;

    const handleCompletedTask = (event, taskId) => {
        event.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem("loggedInUser"));
            // console.log("user, ", user.data.taskSummary);

            const task = user.data.tasks.find((t) => t.taskId === taskId);
            if (task) {
                task.active = false;
                task.completed = true;
                user.data.taskSummary.activeTasks =
                    user.data.taskSummary.activeTasks - 1;
                user.data.taskSummary.completedTasks =
                    user.data.taskSummary.completedTasks + 1;
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                // alert("done");
            }
            const employeesData = userData?.employeesData || [];
            // console.log("ed", employeesData);
            // console.log("user.data", user.data);

            const updatedEmployees = employeesData.map((emp) =>
                emp.firstName.toLowerCase() ===
                    user.data.firstName.toLowerCase() && emp.id === user.data.id
                    ? { ...user.data } // replace with updated user data
                    : emp
            );
            // update state and employees in localStorage
            setEmployeeUserData(userData, updatedEmployees);
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));
            // console.log("update", updatedEmployees);

            // alert("done");
        } catch (error) {
            console.log("err => ", error.message);
        }
    };

    const handleFailedTask = (event, taskId) => {
        event.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem("loggedInUser"));
            // console.log("user, ", user.data.taskSummary);

            const task = user.data.tasks.find((t) => t.taskId === taskId);
            if (task) {
                task.active = false;
                task.failed = true;
                user.data.taskSummary.activeTasks =
                    user.data.taskSummary.activeTasks - 1;
                user.data.taskSummary.failedTasks =
                    user.data.taskSummary.failedTasks + 1;
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                // alert("done");
            }
            const employeesData = userData?.employeesData || [];
            // console.log("ed", employeesData);
            // console.log("user.data", user.data);

            const updatedEmployees = employeesData.map((emp) =>
                emp.firstName.toLowerCase() ===
                    user.data.firstName.toLowerCase() && emp.id === user.data.id
                    ? { ...user.data } // replace with updated user data
                    : emp
            );
            // update state and employees in localStorage
            setEmployeeUserData(userData, updatedEmployees);
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));
            // console.log("update", updatedEmployees);

            // alert("done");
        } catch (error) {
            console.log("err => ", error.message);
        }
    };

    return (
        <div className="shrink-0 md:w-[30%] bg-yellow-400 rounded-xl p-6 flex flex-col justify-around">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="w-2/3 md:w-auto flex flex-col gap-2 justify-around">
                    <span className="bg-violet-400 px-2 rounded">
                        {task?.taskPriority}
                    </span>
                    <span className="bg-pink-400 px-2 rounded">
                        {task?.category}
                    </span>
                </div>
                <span className="w-1/3 md:w-auto">
                    {new Date(task?.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </span>
            </div>
            <div className="pt-6 flex flex-col gap-4 justify-around">
                <h2 className="text-2xl font-bold">{task?.title}</h2>
                <p>{task?.description}</p>
            </div>
            <div className="mt-2 flex flex-col lg:flex-row justify-between">
                <button
                    onClick={(event) =>
                        handleCompletedTask(event, task?.taskId)
                    }
                    className=" rounded-lg  bg-blue-500 px-4 py-1"
                >
                    Mark as Completed
                </button>
                <button
                    onClick={(event) => handleFailedTask(event, task?.taskId)}
                    className=" rounded-lg  bg-red-500 px-4 py-1"
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
