import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;

  displayedColumns = ['id' ,'name', 'category'];


  constructor(private courseService: CoursesService) {
    //this.courses=  [];
    //this.courseService = new CoursesService();
    this.courses = this.courseService.list();

  }

  ngOnInit(): void {

  }

}
