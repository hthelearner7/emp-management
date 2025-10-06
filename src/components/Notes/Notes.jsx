import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import ColorPickerBar from "./ColorPicker";

const Notes = () => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const authData = useContext(AuthContext);
    const { userData, setEmployeeUserData } = authData;
    const [selectedColor, setSelectedColor] = useState("#FDE68A");

    const empData = JSON.parse(localStorage.getItem("loggedInUser"));

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            const employees = userData?.employeesData || [];
            const empId = empData.data.id;
            const noteIdPrefix = `emp-${empId}-n-`;

            const newNote = {
                noteId: noteIdPrefix + ((empData.data.notes?.length || 0) + 1),
                title,
                description,
                textColor: selectedColor,
                date: new Date(),
            };

            const updatedLoggedInUser = {
                ...empData,
                data: {
                    ...empData.data,
                    notes: [...(empData.data.notes || []), newNote],
                },
            };

            const updatedEmployees = employees.map((emp) =>
                emp.id === empId
                    ? { ...emp, notes: [...(emp.notes || []), newNote] }
                    : emp
            );

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(updatedLoggedInUser)
            );
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));
            setEmployeeUserData(userData.employees, updatedEmployees);

            alert("Note saved successfully 🎉");
            setTitle("");
            setDescription("");
            setShowForm(false);
            window.location.reload();
        } catch (error) {
            console.log("Error:", error);
            alert("Some issue in creating note");
        }
    };

    return (
        <div className="relative m-4">
            {!showForm ? (
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg shadow transition"
                >
                    + Add Note
                </button>
            ) : (
                /* z-50 ensures it's above other elements; bg/ text classes force readable colors */
                <div
                    className="absolute right-0 top-0 z-50 bg-white border border-gray-200 shadow-lg rounded-xl p-4 w-72
                     dark:bg-gray-800 dark:border-gray-700"
                    role="dialog"
                    aria-modal="true"
                >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                        New Note
                    </h3>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="block w-full mb-2 px-3 py-2 rounded "
                        style={{ color: "white" }} // fallback inline color if something overrides Tailwind
                        autoFocus
                    />

                    <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description..."
                        className="block w-full mb-3 px-3 py-2 rounded "
                        style={{ color: "white" }}
                    ></textarea>
                    <ColorPickerBar
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />

                    <div className="flex justify-between items-center">
                        <button
                            onClick={submitHandler}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow-sm transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notes;
