import React, { useState, useEffect } from "react";

const AddAnnouncement = ({ onAdd, editAnnouncement, onCancelEdit }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (editAnnouncement) {
            setTitle(editAnnouncement.title);
            setMessage(editAnnouncement.message);
        }
    }, [editAnnouncement]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !message.trim()) return;

        const now = new Date().toISOString();

        const newAnnouncement = {
            id: editAnnouncement ? editAnnouncement.id : Date.now(),
            title,
            message,
            createdAt: editAnnouncement ? editAnnouncement.createdAt : now,
            lastEditedAt: editAnnouncement ? now : null,
        };

        onAdd(newAnnouncement);
        setTitle("");
        setMessage("");
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700 w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {editAnnouncement ? "Edit Announcement" : "Add Announcement"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 resize-none"
                />
                <div className="flex gap-3 justify-end">
                    {editAnnouncement && (
                        <button
                            type="button"
                            onClick={onCancelEdit}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg text-sm font-medium"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                    >
                        {editAnnouncement ? "Save Changes" : "Add Announcement"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAnnouncement;
