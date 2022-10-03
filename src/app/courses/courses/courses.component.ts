import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  displayedColumns = ['id' ,'name', 'category'];


  constructor(private courseService: CoursesService,
    public dialog: MatDialog
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

}
