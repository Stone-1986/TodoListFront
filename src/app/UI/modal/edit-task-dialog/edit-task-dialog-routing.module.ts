import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskDialogComponent } from './pages/edit-task-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: EditTaskDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTaskDialogRoutingModule {}