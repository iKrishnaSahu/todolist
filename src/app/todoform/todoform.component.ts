import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  constructor(public toDoListService: TodolistService) { }
  toDoTask;
  toDoCat;
  toDoDate;
  todate = new Date();
  ngOnInit() {
  }
  addToDo() {
    var obj = {
      "name": this.toDoTask,
      "date": this.toDoDate,
      "category": this.toDoCat
    };
    this.toDoListService.add(obj);
    this.toDoTask = " ";
    this.toDoDate = " ";
    this.toDoCat = " ";
  }
}
