import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/counter/taskSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto my-4 transition-all hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <span
          className={cn(
            "inline-block px-3 py-1 text-xs font-semibold rounded-full",
            {
              "bg-green-700 text-green-100": task.priority === "low",
              "bg-blue-700 text-blue-100": task.priority === "medium",
              "bg-red-700 text-red-100": task.priority === "high",
            }
          )}
        >
          {task.priority}
        </span>
      </div>
      <h1  className="text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 ">
        {task.title}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-2">
        {task.description}
      </p>
      <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <span>
          Due Date: <span className="font-medium">{task.dueDate}</span>
        </span>
        <span></span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button
          onClick={() => dispatch(deleteTask(task.id))}
          variant="ghost"
          className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
        >
          <Trash2 className="w-5 h-5" />
        </Button>

        <Checkbox
          checked={task.isCompleted}
          onClick={() => dispatch(toggleCompleteState(task.id))}
          className="w-5 h-5"
        />
      </div>
    </div>
  );
};

export default TaskCard;
