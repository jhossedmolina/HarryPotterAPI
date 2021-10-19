import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './characters/characters/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './characters/characters/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './characters/characters/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './characters/characters/slytherin/slytherin.component';
import { HouseselectionComponent } from './characters/houseselection/houseselection.component';
import { StaffsComponent } from './characters/staffs/staffs.component';
import { StudentsComponent } from './characters/students/students/students.component';

const routes: Routes = [
  {
    path:'staffs', component: StaffsComponent
  },
  {
    path:'students', component: StudentsComponent
  },
  {
    path:'house', component: HouseselectionComponent
  },
  {
    path:'gryffindor', component: GryffindorComponent
  },
  {
    path:'ravenclaw', component: RavenclawComponent
  },
  {
    path:'slytherin', component: SlytherinComponent
  },
  {
    path:'hufflepuff', component: HufflepuffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
