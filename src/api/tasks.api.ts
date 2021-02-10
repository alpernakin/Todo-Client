import { Task } from "../types/task";
import { get, post, put, remove } from "./request";

const api = 'api/tasks';

const create = async (task: Task) =>
    await post(api, task);

const fetch = async (): Promise<Task[]> => {
    const taskMap = await get<{ [id: string]: Task }>(api);
    return Object.keys(taskMap).map(key => taskMap[key]);
}

const _remove = async (id: number | string) =>
    await remove(api, id);

const update = async (id: number | string, task: Task) =>
    await put(api, id, task);

export const taskApi = {
    create,
    fetch,
    remove: _remove,
    update
}