import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
import { retry } from "rxjs/internal/operators/retry";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   console.info('ErrorInterceptor invoked');
      return next.handle(req)
      .pipe(
        retry(3),
        catchError((err : HttpErrorResponse) => {
          let errorMessage = '';
          if (err.error instanceof ErrorEvent) {
            errorMessage = `Error Message: ${err.message}`;
          } else {
            errorMessage = `Error Status: ${err.status}\nMessage: ${err.message}`;
          }
          alert(errorMessage);
		  return throwError(() => new Error(errorMessage))
        })
      )
    }
}