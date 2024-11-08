import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRepository } from '../../models/task/gateway/task.repository';
import { Task } from '../../models/task/task.model';
import { TaskRequest } from '../../models/task/taskRequest.model';
import { TaskUpdate } from '../../models/task/taskUpdate.model';

@Injectable({
  providedIn: 'root',
})
export class TaskUseCase {
    constructor(private taskRepository: TaskRepository) {}

    createTask(task: TaskRequest): Observable<Task> {
        return this.taskRepository.createTask(task);
    }
    
    getTasks(filters: Partial<Task> = {}): Observable<Task[]> {
        return this.taskRepository.getTasks(filters);
    }

    updateTask(id: string, task: Partial<TaskUpdate>): Observable<Task> {
        return this.taskRepository.updateTask(id, task);
    }

    toggleTaskStatus(id: string): Observable<Task> {
        return this.taskRepository.toggleTaskStatus(id);
    }
    
      deleteTask(id: string): Observable<void> {
        return this.taskRepository.deleteTask(id);
    }
}
