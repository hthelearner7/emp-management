import React, { useState } from "react";

const AllEventsOnDate = ({ selectedDate, events, onEdit, onDelete }) => {
    const dayEvents = events.filter((e) => e.date === selectedDate);
    const [editingEvent, setEditingEvent] = useState(null);
    const [editData, setEditData] = useState({ title: "", description: "" });

    const handleEditClick = (event) => {
        setEditingEvent(event);
        setEditData({
            title: event.title,
            description: event.description || "",
        });
    };

    const handleSaveEdit = () => {
        if (!editData.title.trim()) return;
        onEdit({
            ...editingEvent,
            title: editData.title,
            description: editData.description,
            lastEdited: new Date().toISOString(),
        });
        setEditingEvent(null);
    };

    return (
        <div className="border-2 w-[42%] p-3 rounded-lg shadow-md overflow-y-auto custom-scrollbar z-50 h-[70%]">
            <h2 className="text-lg font-semibold mb-3 text-center text-white">
                Events on {selectedDate}
            </h2>

            {dayEvents.length === 0 ? (
                <p className="text-gray-400 text-center italic">
                    No events for this day
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {dayEvents.map((event, idx) => (
                        <div
                            key={idx}
                            className="border rounded-md p-3 flex flex-col gap-2 "
                        >
                            {editingEvent?.id === event.id ? (
                                <>
                                    <input
                                        type="text"
                                        className="border p-1 rounded text-sm w-full"
                                        value={editData.title}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                    <textarea
                                        className="border p-1 rounded text-sm w-full"
                                        value={editData.description}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={handleSaveEdit}
                                            className="px-2 py-1 text-xs bg-green-500 hover:bg-green-600 text-white rounded"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingEvent(null)
                                            }
                                            className="px-2 py-1 text-xs bg-gray-400 hover:bg-gray-500 text-white rounded"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h3 className="font-medium text-gray-200">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-white">
                                            {event.description ||
                                                "No description"}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Created:{" "}
                                            {new Date(
                                                event.createdAt
                                            ).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}{" "}
                                            at{" "}
                                            {new Date(
                                                event.createdAt
                                            ).toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                        {event.lastEdited && (
                                            <p className="text-xs text-gray-400 mt-1">
                                                Last edited:{" "}
                                                {new Date(
                                                    event.lastEdited
                                                ).toLocaleDateString("en-IN", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}{" "}
                                                at{" "}
                                                {new Date(
                                                    event.lastEdited
                                                ).toLocaleTimeString("en-IN", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex md:flex-row flex-col gap-2 self-end">
                                        <button
                                            onClick={() =>
                                                handleEditClick(event)
                                            }
                                            className="px-2 py-1 text-xs bg-yellow-400 hover:bg-yellow-500 text-white rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(event.id)}
                                            className="px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllEventsOnDate;
