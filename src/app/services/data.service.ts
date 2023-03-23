import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // [IMPORTANT] the paramaters in constructors also call INYECTIONS
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(console.log));

    //tap ( console.log) = tap ( posts => {console.log(posts)})
  }
}
