import { Injectable } from '@angular/core';

import { Course } from './../model/course';

import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[]{
    return [{id: '1231231233456871 ', name: 'Angular      ', category: ' front-end   '},
    {id: '1231231233456871  ', name: 'Angular      ', category: 'front-end  '}
  ];
  }
}
