import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  mock: Array<any> = [
    {
      "id": 1,
      "name": "Angular",
      "category": "Front-end"
    },
    {
      "id": 2,
      "name": "Spring",
      "category": "Back-end"
    },
    {
      "id": 3,
      "name": "Angular com Spring",
      "category": "Full Stack Developer"
    }
  ];

  constructor() { }
  
  getCourses(): Observable<any> {
    return of(this.mock);
  }
}
