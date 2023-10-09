import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    {id: 1, name: "Python", category: "Programação"},
    {id: 2, name: "Java", category: "Programação"}
  ]
  displayedColumns = ['name', 'category']

}
