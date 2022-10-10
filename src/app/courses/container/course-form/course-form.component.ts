import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    name: [''],
    category: ['']
  });

  //para usar a class select importante inicializar
  disableSelect = new FormControl(false);

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course']
    this.form.setValue({
      id: course.id,
      name: course.name,
      category: course.category})
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (next) => {
        this.onSucess();
      },
      (error) => {
        this.onError();
      }
    );
  }
  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar Curso', '', { duration: 3000 });
  }

  private onSucess() {
    this.snackBar.open('Salvo com Sucesso!', '', { duration: 1500 });
    this.location.back();
  }
}
