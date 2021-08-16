import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.css']
})
export class TodoSummaryComponent implements OnInit {
  public todos : Todo[]=[];
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.sharedtodos.subscribe(todos => this.todos = todos);
  }

}
