import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'

  /* Fornecendo uma instância de HttpClient */
  constructor(private httpClient: HttpClient) { }

  findAll = () => {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(couses => console.log(couses))
    );
  }

}
