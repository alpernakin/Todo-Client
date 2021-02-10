import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import { taskReducer } from "./slices/tasks/task.slice";

export default configureStore({
    reducer: combineReducers({
        tasks: taskReducer
    })
});

export interface State {
    tasks: Task[]
}