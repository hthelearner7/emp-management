const CreateTask = () => {
    return (
        <div>
            <form className="max-w-full mx-auto rounded-2xl bg-white shadow p-6 md:p-8 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Create Task
                </h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column */}
                    <section id="left-section" className="space-y-5">
                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="task-title"
                            >
                                Task Title
                            </label>
                            <input
                                id="task-title"
                                name="task-title"
                                type="text"
                                placeholder="Make a UI design"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="date"
                            >
                                Date
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="assign-to"
                            >
                                Assign to
                            </label>
                            <input
                                id="assign-to"
                                name="assign-to"
                                type="text"
                                placeholder="Assignee name"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <input
                                id="category"
                                name="category"
                                type="text"
                                placeholder="Category"
                                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                            />
                        </div>
                    </section>

                    {/* Right column */}
                    <section id="right-section" className="flex flex-col">
                        <label
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={10}
                            placeholder="Enter description here"
                            className="flex-1 mt-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />

                        <div className="flex items-center justify-end pt-7">
                            <button
                                type="submit"
                                className="mt-5 flex justify-center items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2"
                            >
                                Create Task
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
