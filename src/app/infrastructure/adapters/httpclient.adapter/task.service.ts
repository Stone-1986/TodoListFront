import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { TaskRepository } from "src/app/dominio/models/task/gateway/task.repository";
import { Task } from "src/app/dominio/models/task/task.model";
import { TaskRequest } from "src/app/dominio/models/task/taskRequest.model";
import { TaskUpdate } from "src/app/dominio/models/task/taskUpdate.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class TaskService extends TaskRepository {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
        super();
      }

    override createTask(task: TaskRequest): Observable<Task> {
        return this.http.post<Task>(`${this.apiUrl}`, task);
    }

    override getTasks(filters: Partial<Task> = {}): Observable<Task[]> {
        return this.http.post<Task[]>(`${this.apiUrl}/filter`, filters);
    }
    
    override updateTask(id: string, task: Partial<TaskUpdate>): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
    }

    override toggleTaskStatus(id: string): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${id}/toggle`, {});
    }

    override deleteTask(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}