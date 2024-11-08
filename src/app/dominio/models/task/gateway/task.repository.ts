import { Observable } from "rxjs";
import { Task } from "../task.model";
import { TaskRequest } from "../taskRequest.model";
import { TaskUpdate } from "../taskUpdate.model";

export abstract class TaskRepository {
    abstract createTask(task: TaskRequest): Observable<Task>;
    abstract getTasks(filters?: Partial<Task>): Observable<Task[]>;
    abstract updateTask(id: string, task: Partial<TaskUpdate>): Observable<Task>;
    abstract toggleTaskStatus(id: string): Observable<Task>;
    abstract deleteTask(id: string): Observable<void>;
}