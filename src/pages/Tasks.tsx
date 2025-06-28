import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1 className="text-2xl font-bold uppercase text-center">all tasks</h1>
        <AddTaskModal/>
      </div>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map((task, id) => (
          <TaskCard key={id} task={task}/>
        ))}
      </div>
    </div>
  );
};

export default Task;
