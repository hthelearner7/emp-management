import React from "react";

const AllEventsOnDate = ({ selectedDate, events }) => {
    const dayEvents = events.filter((e) => e.date === selectedDate);

    return (
        <div className=" border-2 w-[42%] p-3 rounded-lg shadow-md overflow-y-auto custom-scrollbar z-50 h-[50%]">
            <h2 className="text-lg font-semibold mb-3 text-center">
                Events on {selectedDate}
            </h2>

            {dayEvents.length === 0 ? (
                <p className="text-gray-500 text-center italic">
                    No events for this day
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {dayEvents.map((event, idx) => (
                        <div
                            key={idx}
                            className="border rounded-md p-3 flex justify-between items-center hover:bg-gray-50"
                        >
                            <div>
                                <h3 className="font-medium text-gray-200">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-white">
                                    {event.description || "No description"}
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
                            </div>

                            <div className="flex md:flex-row  flex-col  gap-2">
                                <button className="px-2 py-1 text-xs bg-yellow-400 hover:bg-yellow-500 text-white rounded">
                                    Edit
                                </button>
                                <button className="px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllEventsOnDate;
