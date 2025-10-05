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
                    <div
                        key={note.noteId}
                        className="min-w-[250px] flex-shrink-0 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all scroll-snap-align-start"
                    >
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
                ))}
            </div>
        </div>
    );
};

export default AllNotes;
