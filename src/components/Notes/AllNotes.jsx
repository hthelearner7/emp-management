import React, { useContext, useEffect, useState } from "react";
import Note from "./Note";
import EditNoteModal from "./EditNoteModal";
import { AuthContext } from "../../context/AuthProvider";

const AllNotes = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("loggedInUser"))?.data?.notes || []
    );

    // const authData = useContext(AuthContext);
    const { userData, setEmployeeUserData } = useContext(AuthContext);

    const handleEdit = (note) => {
        setSelectedNote(note);
        setIsEditing(true);
    };

    const handleSave = (updatedNote) => {
        updatedNote.lastEdited = new Date();
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const employees = JSON.parse(localStorage.getItem("employees"));

        const updatedNotes = notes.map((n) =>
            n.noteId === updatedNote.noteId ? updatedNote : n
        );

        // update local copies
        setNotes(updatedNotes);
        user.data.notes = updatedNotes;

        const updatedEmployees = employees.map((emp) =>
            emp.id === user.data.id ? { ...emp, notes: updatedNotes } : emp
        );

        // store updates
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        setEmployeeUserData(userData.employees, updatedEmployees);
    };

    const handleDelete = (noteId) => {
        const filteredNotes = notes.filter((n) => n.noteId !== noteId);
        setNotes(filteredNotes);

        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const employees = JSON.parse(localStorage.getItem("employees"));

        user.data.notes = filteredNotes;

        const updatedEmployees = employees.map((emp) =>
            emp.id === user.data.id ? { ...emp, notes: filteredNotes } : emp
        );
        setEmployeeUserData(userData.employees, updatedEmployees);

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    return (
        <div className="w-full mt-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Your Notes
            </h2>

            <div className="flex space-x-4 overflow-x-auto pb-3">
                {notes.map((note) => (
                    <Note
                        key={note.noteId}
                        note={note}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {isEditing && (
                <EditNoteModal
                    note={selectedNote}
                    onClose={() => setIsEditing(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default AllNotes;
