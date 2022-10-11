
import { CourseFormComponent } from './container/course-form/course-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './container/courses/courses.component';
import { CourseResolver } from './guards/course.resolver';

const routes: Routes = [ //traçando as rotas para novo formulario
  { path: '' , component: CoursesComponent},
  { path: 'new', component: CourseFormComponent, resolve: {course: CourseResolver}},
  { path: 'edit/:id', component: CourseFormComponent, resolve: {course: CourseResolver}},
  { path: 'delete/:id', component: CourseFormComponent, resolve: {course: CourseResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
