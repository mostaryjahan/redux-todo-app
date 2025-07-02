import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/counter/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1 className="text-2xl font-bold uppercase text-center">all tasks</h1>
         <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
        
        </TabsContent>
        <TabsContent value="low">
         
        </TabsContent>
          <TabsContent value="medium">
        
        </TabsContent>
          <TabsContent value="high">
        
        </TabsContent>
      </Tabs>
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
