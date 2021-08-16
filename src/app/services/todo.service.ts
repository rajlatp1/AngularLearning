import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todoid = 0;

  private todo = new BehaviorSubject<Todo[]>([]);
  readonly sharedtodos = this.todo.asObservable();

  constructor() { }

  addTodoItem(todoTitle: string): void {
    var todo = new Todo(this.todoid++,todoTitle);
    this.todos.push(todo);
    this.todo.next(this.todos.slice());
  }
  removeTodoItem(id: number) {
    this.todos.forEach((t, i) => {
      if (t.id === id) {
        this.todos.splice(i, 1);
      }
      this.todo.next(this.todos.slice());
    });
  }
}
