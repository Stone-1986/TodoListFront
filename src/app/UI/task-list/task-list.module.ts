import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './pages/task-list.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskRepository } from 'src/app/dominio/models/task/gateway/task.repository';
import { TaskUseCase } from 'src/app/dominio/usecase/task/task.usecase';
import { TaskService } from 'src/app/infrastructure/adapters/httpclient.adapter/task.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EditTaskDialogModule } from '../modal/edit-task-dialog/edit-task-dialog.module';


@NgModule({  
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskListRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    EditTaskDialogModule 
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TaskUseCase,
    { provide: TaskRepository, useClass: TaskService }
  ],
  
})
export class TaskListModule {}


