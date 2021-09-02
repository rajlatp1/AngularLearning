import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public todo : Todo;
  constructor(private router: Router,private route: ActivatedRoute,private todoService : TodoService) { 
    const todoid = this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodoItem(Number(todoid));
  }

  ngOnInit(): void {

  }

}
