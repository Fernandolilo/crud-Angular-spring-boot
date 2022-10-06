import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['id' ,'name', 'category', 'actions'];

  //private route: Route => controla o rotiamento no angular

  constructor(private courseService: CoursesService,
    public dialog: MatDialog,
    private route: Router,
    private activationRoute: ActivatedRoute
    ) {
    //this.courses=  [];
    //this.courseService = new CoursesService();
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao acessar cursos!');
        return of([])
      })
    );


  }
  onError(ErrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:
        ErrorMsg
    });
  }
  ngOnInit(): void {

  }

  //adicionar new course
  onAdd(){

    //{relativeTo: this.activationRoute}
    //tratamento para rotas, esta dizendo que a nova rota é relativa a tora atual
    this.route.navigate(['new'], {relativeTo: this.activationRoute});
  }

}
