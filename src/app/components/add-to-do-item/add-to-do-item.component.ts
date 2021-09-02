import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../todo";

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.sharedtodos.subscribe(todos =>    
    this.todos = todos)
  }
  onAdd(todoTitle: string, todoDescription:string): void {
    this.todoService.addTodoItem(todoTitle,todoDescription);
  }
  onDelete(id:number): void {
    this.todoService.removeTodoItem(id);
  }
}
