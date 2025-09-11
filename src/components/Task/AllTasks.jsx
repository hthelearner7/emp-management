const AllTasks = ({ data }) => {
    console.log("alltasks", data);

    return (
        <div className="rounded bg-gray-700 p-4 space-y-4">
            <h1 className="text-center text-2xl font-semibold mb-6">
                All Tasks
            </h1>
            <div className="bg-red-400 p-4 flex justify-between rounded">
                <h2>abcname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-blue-400 p-4 flex justify-between rounded">
                <h2>defname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-green-400 p-4 flex justify-between rounded">
                <h2>abcname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-pink-400 p-4 flex justify-between rounded">
                <h2>defname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-yellow-400 p-4 flex justify-between rounded">
                <h2>xyzname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-purple-400 p-4 flex justify-between rounded">
                <h2>mnopname</h2>
                <h3>Make UI Design</h3>
                <h5>Status</h5>
            </div>
        </div>
    );
};
export default AllTasks;
