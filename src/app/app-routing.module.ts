import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { SimpleComponent } from './simple/simple.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';

const routes: Routes = [
  { path: 'viewEmp', component: ViewEmpComponent },
  { path: 'editEmp', component: EditEmpReactiveComponent },
  { path: 'simple', component: SimpleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
