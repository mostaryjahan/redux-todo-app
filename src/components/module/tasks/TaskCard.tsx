import { Button } from "@/components/ui/button";
import { CircleCheckBig, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto my-4 transition-all hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <span
          className={cn(
            "inline-block px-3 py-1 text-xs font-semibold rounded-full",
            {
              "bg-green-700 text-green-100": task.priority === "Low",
              "bg-blue-700 text-blue-100": task.priority === "Medium",
              "bg-red-700 text-red-100": task.priority === "High",
            }
          )}
        >
          {task.priority}
        </span>
        {task.isCompleted && (
          <CircleCheckBig className="text-green-500 w-6 h-6" />
        )}
      </div>
      <h1 className="text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">{task.title}</h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-2">{task.description}</p>
      <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <span>Due: <span className="font-medium">{task.dueDate}</span></span>
        <span>
          Status:{" "}
          <span className={task.isCompleted ? "text-green-600" : "text-yellow-600"}>
            {task.isCompleted ? "Completed" : "Pending"}
          </span>
        </span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900">
          <Trash2 className="w-5 h-5" />
        </Button>
        {!task.isCompleted && (
          <Button variant="ghost" className="text-green-500 hover:bg-green-50 dark:hover:bg-green-900">
            <CircleCheckBig className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;