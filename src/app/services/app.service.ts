import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BASE_URL= 'https://api.chucknorris.io/jokes';

  constructor(private  http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/random1234`);
    // return this.http.get(`${this.BASE_URL}/random`);
  }

  retrieveJokes() {
    this.getJokes().subscribe(res => {
      // console.log(res);
    });
  }

  handleError(err: { error: any; message: any; status: any; }) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error Message: ${err.message}`;
    } else {
      errorMessage = `Error Status: ${err.status}\nMessage: ${err.message}`;
    }
    alert(errorMessage);
		return throwError(() => new Error(errorMessage))
  }

}
