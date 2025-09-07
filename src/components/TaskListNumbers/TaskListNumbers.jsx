const TaskListNumbers = () => {
    return (
        <div className="py-10 px-6 flex flex-wrap justify-between gap-6">
            <div className="w-full md:w-[42%] border-red-500 border-2 py-7 px-8 bg-red-400 rounded-lg ">
                <p className="text-3xl font-medium">1</p>
                <p className="text-2xl font-semibold">New Task</p>
            </div>
            <div className="w-full md:w-[42%] border-blue-500 border-2 py-7 px-8 bg-blue-400 rounded-lg ">
                <p className="text-3xl font-medium">12</p>
                <p className="text-2xl font-semibold">New Task</p>
            </div>
            <div className="w-full md:w-[42%] border-yellow-500 border-2 py-7 px-8 bg-yellow-400 rounded-lg">
                <p className="text-3xl font-medium">1</p>
                <p className="text-2xl font-semibold">New Task</p>
            </div>
            <div className="w-full md:w-[42%] border-green-500 border-2 py-7 px-8 bg-green-400 rounded-lg">
                <p className="text-3xl font-medium">1</p>
                <p className="text-2xl font-semibold">New Task</p>
            </div>
        </div>
    );
};

export default TaskListNumbers;
