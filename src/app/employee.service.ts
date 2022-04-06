import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as data from '../app/mock/mock.json';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = "https://retoolapi.dev/iM9Vc5";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/employees');
  }

  getEmployee(id: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/employees/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/employees/' + id, data, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.put(this.apiURL + '/employees/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
