import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
  tasks: [
    {
    id: "01",
    title: "init frontend",
    description: "create home page",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "High",
  },
   {
    id: "02",
    title: " frontend",
    description: "create home page",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "Medium",
  },
  {
    id: "03",
    title: " server",
    description: "create home page",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "Low",
  },
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;