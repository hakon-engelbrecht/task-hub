import { createContext } from "react";
import { Task } from "../types";

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (taskId: string) => void;
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    addTask: () => {},
    removeTask: () => {}
});