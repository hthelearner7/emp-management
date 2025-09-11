const FailedTask = ({ task }) => {
    return (
        <div className="shrink-0 md:w-[30%] bg-red-400 rounded-xl p-6 flex flex-col justify-around">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="w-2/3 md:w-auto flex flex-col gap-2 justify-around">
                    <span className="bg-violet-400 px-2 rounded">
                        {task?.taskPriority}
                    </span>
                    <span className="bg-pink-400 px-2 rounded">
                        {task?.category}
                    </span>
                </div>
                <span className="w-1/3 md:w-auto">
                    {new Date(task?.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </span>
            </div>
            <div className="pt-6 flex flex-col gap-4 justify-around">
                <h2 className="text-2xl font-bold">{task?.title}</h2>
                <p>{task?.description}</p>
            </div>
            <div className="mt-2">
                <button className="rounded-lg w-full bg-red-500 px-4 py-1">
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default FailedTask;
