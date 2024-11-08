import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./UI/task-list/task-list.module').then(m => m.TaskListModule)
  },
  {
    path: 'edit-task-dialog',
    loadChildren: () => import('./UI/modal/edit-task-dialog/edit-task-dialog.module').then(m => m.EditTaskDialogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
