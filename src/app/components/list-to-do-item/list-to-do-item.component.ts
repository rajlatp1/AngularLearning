import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../todo";

@Component({
  selector: 'app-list-to-do-item',
  templateUrl: './list-to-do-item.component.html',
  styleUrls: ['./list-to-do-item.component.css']
})
export class ListToDoItemComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() todoid : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(id:number): void{
    this.todoid.emit(id);
  }
}
