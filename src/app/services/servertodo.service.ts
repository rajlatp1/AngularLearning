import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ServerTodo } from '../servertodo';

@Injectable({
  providedIn: 'root'
})
export class ServertodoService {
  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getTodos(): Observable<ServerTodo[]> {
  return this.http.get<ServerTodo[]>(this.REST_API_SERVER);
  }

}
