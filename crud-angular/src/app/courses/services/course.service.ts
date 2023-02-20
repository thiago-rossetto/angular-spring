import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(
    private http: HttpClient
  ) { }
  
  getCourses(): Observable<any> {
    // return of(this.mock);
    return this.http.get(environment.api + '/courses');
  }
}
