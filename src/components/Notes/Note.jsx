import React from "react";

const Note = ({ note }) => {
    return (
        <div className="min-w-[250px] flex-shrink-0 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all scroll-snap-align-start">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {note.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                {note.description}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                {new Date(note.date).toLocaleString()}
            </div>
        </div>
    );
};

export default Note;
