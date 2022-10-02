import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [{id: '1231231233456871 ', name: 'Angular      ', category: ' front-end   '},
  {id: '1231231233456871  ', name: 'Angular      ', category: 'front-end  '}];

  displayedColumns = ['id' ,'name', 'category'];

  constructor() {
    //this.courses=  [];
  }

  ngOnInit(): void {
  }

}
