import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Notes = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const authData = useContext(AuthContext);
    const { userData, setEmployeeUserData } = authData;

    const empData = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("empData", empData);
    const submitHandler = (e) => {
        e.preventDefault();

        try {
            const employees = userData?.employeesData || [];
            const empId = empData.data.id;
            const noteIdPrefix = `emp-${empId}-n-`;

            // Create new note object
            const newNote = {
                noteId: noteIdPrefix + ((empData.data.notes?.length || 0) + 1),
                title,
                description,
                date: new Date(),
            };

            // Update loggedInUser’s notes immutably
            const updatedLoggedInUser = {
                ...empData,
                data: {
                    ...empData.data,
                    notes: [...(empData.data.notes || []), newNote],
                },
            };

            // Update the corresponding employee
            const updatedEmployees = employees.map((emp) =>
                emp.id === empId
                    ? {
                          ...emp,
                          notes: [...(emp.notes || []), newNote],
                      }
                    : emp
            );

            // Update both storages
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(updatedLoggedInUser)
            );
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));

            // Update context
            setEmployeeUserData(userData.employees, updatedEmployees);

            alert("Note saved successfully 🎉");
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log("Error:", error);
            alert("Some issue in creating note");
        }
    };

    return (
        <div className="flex flex-col">
            <label>Text area: </label>
            <textarea
                rows={2}
                cols={60}
                className="border-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the note title: "
            ></textarea>
            <textarea
                rows={5}
                cols={60}
                className="border-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter the note description: "
            ></textarea>
            <button className="bg-yellow-400" onClick={submitHandler}>
                Create a note
            </button>
        </div>
    );
};

export default Notes;
