import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/Dashboard/header.component';
import { AddStudentComponent } from './components/AddStudent/addStudent.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: '', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
