import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    const { tasks } = data;

    return (
        <div
            id="tasklist"
            className="h-[60%] px-6 py-10 gap-6 flex flex-col md:flex-row flex-nowrap md:overflow-x-auto overflow-y-auto"
        >
            {tasks?.map((el, idx) => {
                if (el.active) {
                    return <AcceptTask key={idx} task={el} />;
                } else if (el.completed) {
                    return <CompletedTask key={idx} task={el} />;
                } else if (el.failed) {
                    return <FailedTask key={idx} task={el} />;
                } else if (el.newTask) {
                    return <NewTask key={idx} task={el} />;
                }
            })}
        </div>
    );
};

export default TaskList;
