import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/dominio/models/task/task.model';
import { TaskRequest } from 'src/app/dominio/models/task/taskRequest.model';
import { TaskUseCase } from 'src/app/dominio/usecase/task/task.usecase';
import { EditTaskDialogComponent } from '../../modal/edit-task-dialog/pages/edit-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskForm: FormGroup;
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
 // editingTask: Task | null = null;

  constructor(
    private taskUseCase: TaskUseCase,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskUseCase.getTasks().subscribe((tasks) => {
      this.pendingTasks = tasks.filter(task => !task.completed);
      this.completedTasks = tasks.filter(task => task.completed);
    });
  }


  addTask(): void {
    if (this.taskForm.valid) {
      const newTask: TaskRequest = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description
      };
  
      this.taskUseCase.createTask(newTask).subscribe((createdTask) => {
        this.pendingTasks.push(createdTask);
        this.taskForm.reset(); 
      });
    }
  }
   
  toggleTaskStatus(task: Task): void {
    this.taskUseCase.toggleTaskStatus(task.id).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: string): void {
    this.taskUseCase.deleteTask(id).subscribe(() => {
      this.loadTasks(); 
    });
  }

  startEditing(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '400px',
      data: task
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskUseCase.updateTask(task.id, result).subscribe(() => {
          this.loadTasks();
        });
      }
    });
  }
}
