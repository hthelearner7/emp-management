import Note from "./Note";

const AllNotes = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const notes = user?.data?.notes || [];

    if (notes.length === 0) {
        return (
            <div className="text-center text-gray-500 italic py-6">
                No saved notes yet.
            </div>
        );
    }

    return (
        <div className="w-full mt-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Your Notes
            </h2>

            {/* Scrollable notes container */}
            <div
                className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100 dark:scrollbar-thumb-yellow-500 dark:scrollbar-track-gray-800"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {notes.map((note) => (
                    <Note note={note} key={note.noteId} />
                ))}
            </div>
        </div>
    );
};

export default AllNotes;
