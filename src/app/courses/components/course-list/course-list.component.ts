import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  //como este é um component filho vamos anottar o @Input
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['id' ,'name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

   //adicionar new course
   onAdd(){

    //{relativeTo: this.activationRoute}
    //tratamento para rotas, esta dizendo que a nova rota é relativa a tora atual
    //this.route.navigate(['new'], {relativeTo: this.activationRoute});
    this.add.emit(true);
  }

  onEdit(course: Course){
    this.edit.emit(course);
  }
}
