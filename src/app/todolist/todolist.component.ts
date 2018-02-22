import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodolistService } from '../todolist.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todo = [];
  constructor(public toDoListService: TodolistService) {
    this.todo = this.toDoListService.todos;
  }
  ngOnInit() {

  }
  onDelete(id: number) {
    console.log("onDelete");
    this.toDoListService.remove(id);
    this.todo = this.toDoListService.todos;
  }
}
