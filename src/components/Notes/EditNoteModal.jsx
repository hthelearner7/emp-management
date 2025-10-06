import React, { useState } from "react";
import ColorPickerBar from "./ColorPicker";

const EditNoteModal = ({ note, onClose, onSave }) => {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [selectedColor, setSelectedColor] = useState(note.textColor);

    const handleSave = () => {
        const updatedNote = {
            ...note,
            title,
            description,
            textColor: selectedColor,
            lastEdited: new Date(),
        };
        onSave(updatedNote);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
                    Edit Note
                </h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-3 bg-gray-50 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter title"
                />

                <textarea
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter description"
                ></textarea>
                <ColorPickerBar
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />

                <div className="flex justify-end mt-5 gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-yellow-400 rounded-lg font-medium hover:bg-yellow-500 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNoteModal;
