import React, { useState } from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center w-[320px]">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Delete this note?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm">
                    This action cannot be undone.
                </p>
                <div className="flex justify-between">
                    <button
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const Note = ({ note, onDelete, onEdit }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = () => setShowConfirm(true);
    const confirmDelete = () => {
        onDelete(note.noteId);
        setShowConfirm(false);
    };

    return (
        <>
            <div className="min-w-[250px] flex-shrink-0 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all relative group">
                {/* Note Title */}
                <h3
                    className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2"
                    style={{ color: `${note.textColor}` }}
                >
                    {note.title}
                </h3>

                {/* Note Description */}
                <p
                    className={
                        "text-gray-700 dark:text-gray-300 text-sm line-clamp-3 mb-2"
                    }
                    style={{ color: `${note.textColor}` }}
                >
                    {note.description}
                </p>

                {/* Dates */}
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    Created: {new Date(note.date).toLocaleString()}
                </div>
                {note.lastEdited && (
                    <div className="text-xs text-gray-400 dark:text-gray-500 italic">
                        Last edited:{" "}
                        {new Date(note.lastEdited).toLocaleString()}
                    </div>
                )}

                {/* Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                        onClick={() => onEdit(note)}
                    >
                        Edit
                    </button>
                    <button
                        className="text-red-500 hover:text-red-600 text-sm font-medium"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={confirmDelete}
            />
        </>
    );
};

export default Note;
