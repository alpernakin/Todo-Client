import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../types/task";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        add: (state: Task[], action: PayloadAction<Task[]>) => {
            state.push(...action.payload);
        },
        update: (state: Task[], action: PayloadAction<Task>) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        remove: (state: Task[], action: PayloadAction<number>) => {
            const index = state.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const taskActions = taskSlice.actions;
export const taskReducer = taskSlice.reducer;