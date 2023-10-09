import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../models/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  /* Fornecend uma instância de HttpClient */
  constructor(private httpClient: HttpClient) { }

  findAll = (): Course[] => {
    return [
      { id: 1, name: "Python", category: "Programação" },
      { id: 2, name: "Java", category: "Programação" },
      { id: 3, name: "UX", category: "Designs" },
    ]
  }

}
