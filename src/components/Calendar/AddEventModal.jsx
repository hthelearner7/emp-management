import React, { useState } from "react";

const AddEventModal = ({ date, onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSave = () => {
        if (!title) return alert("Please enter a title");
        const newEvent = {
            id: `evt-${Date.now()}`,
            title,
            description,
            date,
            createdAt: new Date().toISOString(),
            lastEdited: new Date().toISOString(),
        };
        onSave(newEvent);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-1/2  relative border-2">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-xl font-bold"
            >
                ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Event: {date}</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <button
                onClick={handleSave}
                className="bg-green-400 px-4 py-2 rounded mr-2 text-bold text-lg"
            >
                Save
            </button>
            <button
                onClick={onClose}
                className="bg-gray-900 px-4 py-2 rounded text-red-800 text-bold text-lg"
            >
                Cancel
            </button>
        </div>
    );
};

export default AddEventModal;
