import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [empId, setEmpId] = useState("");
    const newTask = [];
    const [taskPriority, setTaskPriority] = useState("");
    const authData = useContext(AuthContext);
    const { userData, setEmployeeUserData } = authData;
    console.log("ud", userData);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form s", title, description, date, assignTo, category);

        const data = userData?.employeesData;
        console.log("d", data);
        data.forEach((element) => {
            console.log(element.firstName);
            if (
                element.firstName.toLowerCase() == assignTo.toLowerCase() &&
                element.id == empId
            ) {
                console.log("found user");
                if (newTask)
                    element.tasks.push({
                        taskId:
                            "emp" +
                            empId +
                            "-task" +
                            (element.tasks.length + 1),
                        title,
                        description,
                        category,
                        taskPriority,
                        date,
                        active: false,
                        newTask: true,
                        completedTask: false,
                        failedTask: false,
                    });
                element.taskSummary.newTasks++;

                console.log(element);
                setEmployeeUserData(userData.employees, data);
                console.log("data => ", data);

                localStorage.setItem("employees", JSON.stringify(data));
                clearFormData();
            }
        });
    };
    console.log(newTask);

    const clearFormData = () => {
        setTitle("");
        setDescription("");
        setDate("");
        setCategory("");
        setAssignTo("");
        setEmpId("");
        setTaskPriority("");
    };

    return (
        <div>
            <form
                onSubmit={submitHandler}
                className="max-w-full mx-auto rounded-2xl bg-white shadow p-6 md:p-8 dark:bg-neutral-900"
            >
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Create Task
                </h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column */}
                    <section id="left-section" className="space-y-5">
                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="task-title"
                            >
                                Task Title
                            </label>
                            <input
                                id="task-title"
                                name="task-title"
                                type="text"
                                placeholder="Give a task"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="task-priority"
                            >
                                Task Priority{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="task-priority"
                                name="task-priority"
                                required
                                value={taskPriority}
                                onChange={(e) =>
                                    setTaskPriority(e.target.value)
                                }
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            >
                                <option value="">-- Select Priority --</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="date"
                            >
                                Date
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="mt-1 w-[40%] rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="assign-to-name"
                            >
                                Assign to (NAME)
                            </label>
                            <input
                                id="assign-to-name"
                                name="assign-to-name"
                                type="text"
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                placeholder="Assignee name"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="assign-to-emp-id"
                            >
                                Assign to (EMPLOYEE ID)
                            </label>
                            <input
                                id="assign-to-emp-id"
                                name="assign-to-epm-id"
                                type="text"
                                value={empId}
                                onChange={(e) => setEmpId(e.target.value)}
                                placeholder="Assignee EMP ID"
                                className="mt-1 w-[50%] rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <input
                                id="category"
                                name="category"
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Category"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>
                    </section>

                    {/* Right column */}
                    <section id="right-section" className="flex flex-col">
                        <label
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={10}
                            placeholder="Enter description here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="flex-1 mt-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />

                        <div className="flex items-center justify-end pt-7">
                            <button
                                type="submit"
                                className="mt-5 flex justify-center items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2"
                            >
                                Create Task
                            </button>
                        </div>
                    </section>
                </div>
            </form>
            <div className="flex justify-center">
                <button
                    className="mt-5 flex justify-center items-center rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2"
                    onClick={clearFormData}
                >
                    Clear Form Data
                </button>
            </div>
        </div>
    );
};

export default CreateTask;
