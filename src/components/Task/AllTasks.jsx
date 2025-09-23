import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = ({ data }) => {
    // console.log("alltasks", data);

    const authData = useContext(AuthContext);
    const { userData } = authData;
    // console.log("authdata", authData);

    return (
        <div className="rounded bg-gray-900 p-4 space-y-4">
            <h1 className="text-center text-2xl font-semibold mb-6">
                All Tasks
            </h1>
            <div className="h-70 overflow-auto mb-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-white px-4 py-2">
                                Employee Name
                            </th>
                            <th className="border border-white px-4 py-2 text-yellow-500">
                                Active
                            </th>
                            <th className="border border-white px-4 py-2 text-green-500">
                                New Task
                            </th>
                            <th className="border border-white px-4 py-2 text-blue-500">
                                Completed
                            </th>
                            <th className="border border-white px-4 py-2 text-red-500">
                                Failed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.employeesData?.map((el, idx) => (
                            <tr key={idx}>
                                <td className="border border-white px-4 py-2">
                                    {el.firstName}
                                </td>

                                <td className="border border-white px-4 py-2 text-yellow-600">
                                    {el?.taskSummary?.activeTasks}
                                </td>
                                <td className="border border-white px-4 py-2  text-green-600">
                                    {el?.taskSummary?.newTasks}
                                </td>
                                <td className="border border-white px-4 py-2  text-blue-600">
                                    {el?.taskSummary?.completedTasks}
                                </td>
                                <td className="border border-white px-4 py-2  text-red-600">
                                    {el?.taskSummary?.failedTasks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AllTasks;
