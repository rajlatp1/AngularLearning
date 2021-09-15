import { Component, OnInit } from '@angular/core';
import { ServerTodo } from 'src/app/servertodo';
import { ServertodoService } from 'src/app/services/servertodo.service';

@Component({
  selector: 'app-server-todo',
  templateUrl: './server-todo.component.html',
  styleUrls: ['./server-todo.component.css']
})
export class ServerTodoComponent implements OnInit {
  todos: ServerTodo[] = [];

  constructor(private servertodo:ServertodoService) { }

  ngOnInit(): void {
    this.servertodo.getTodos().subscribe(todos => this.todos = todos);
  }

}
