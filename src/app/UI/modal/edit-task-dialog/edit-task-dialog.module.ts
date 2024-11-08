import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskDialogRoutingModule } from './edit-task-dialog-routing.module';
import { EditTaskDialogComponent } from './pages/edit-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EditTaskDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditTaskDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    EditTaskDialogComponent
  ]
})
export class EditTaskDialogModule { }