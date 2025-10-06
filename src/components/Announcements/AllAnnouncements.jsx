import React, { useState } from "react";

const AllAnnouncements = ({
    announcements,
    isAdmin,
    onEdit,
    onDelete,
    onClearMonth,
}) => {
    if (announcements === undefined) {
        announcements = JSON.parse(localStorage.getItem("announcements")) || [];
    }
    const grouped = announcements.reduce((acc, ann) => {
        const month = new Date(ann.createdAt).toLocaleString("default", {
            month: "long",
            year: "numeric",
        });
        if (!acc[month]) acc[month] = [];
        acc[month].push(ann);
        return acc;
    }, {});

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700 w-full ">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                All Announcements
            </h2>

            {Object.keys(grouped).length === 0 ? (
                <p className="text-gray-500 text-sm">No announcements yet.</p>
            ) : (
                Object.entries(grouped).map(([month, anns]) => (
                    <div key={month} className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                {month}
                            </h3>
                            {isAdmin && (
                                <button
                                    onClick={() => onClearMonth(month)}
                                    className="text-xs px-3 py-1 bg-red-400 text-white rounded-md hover:bg-red-500 transition-all"
                                >
                                    Clear {month}
                                </button>
                            )}
                        </div>

                        <div className="space-y-3">
                            {anns.map((ann) => (
                                <div
                                    key={ann.id}
                                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm flex justify-between items-start"
                                >
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                                            {ann.title}
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                                            {ann.message}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Created:{" "}
                                            {new Date(
                                                ann.createdAt
                                            ).toLocaleString()}
                                            {ann.lastEditedAt && (
                                                <>
                                                    {" | "}
                                                    <span className="italic">
                                                        Last Edited:{" "}
                                                        {new Date(
                                                            ann.lastEditedAt
                                                        ).toLocaleString()}
                                                    </span>
                                                </>
                                            )}
                                        </p>
                                    </div>

                                    {isAdmin && (
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => onEdit(ann)}
                                                className="text-blue-500 text-sm hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => onDelete(ann.id)}
                                                className="text-red-400 hover:text-red-500 text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AllAnnouncements;
