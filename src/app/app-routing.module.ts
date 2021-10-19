import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './characters/staffs/staffs.component';
import { StudentsComponent } from './characters/students/students/students.component';

const routes: Routes = [
  {
    path:'staffs', component: StaffsComponent
  },
  {
    path:'students', component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
