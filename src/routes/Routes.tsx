import App from "@/App";
import Task from "@/pages/Tasks";
import User from "@/pages/User";
import {
  createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            Component: Task
        },
        {
            path:"user",
            element: <User/>
        },
        
    ]
  },
]);

export default router;