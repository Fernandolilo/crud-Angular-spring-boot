import { Course } from './../model/course';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  //como este é um component filho vamos anottar o @Input
  @Input() courses: Course[] = [];

  readonly displayedColumns = ['id' ,'name', 'category', 'actions'];

  constructor(private route: Router,
    private activationRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

   //adicionar new course
   onAdd(){

    //{relativeTo: this.activationRoute}
    //tratamento para rotas, esta dizendo que a nova rota é relativa a tora atual
    this.route.navigate(['new'], {relativeTo: this.activationRoute});
  }
}
