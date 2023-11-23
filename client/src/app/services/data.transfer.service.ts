import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pizza } from "../models/Pizza"
import { Observable, first, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private url = "http://localhost:2121/menu/fetchAll";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private httpC: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.httpC.get<Pizza[]>(this.url, {responseType: "json"}).pipe (
      first(),
      catchError((error) => {
        console.error('getPizzas(): ', error);
        return throwError('fetching Pizzas error'); // ?
      })
      )
  }
}
