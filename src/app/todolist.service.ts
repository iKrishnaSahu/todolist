import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {
  constructor() {
    console.log("To do list service started and running");
  }
  todos = [];
  toDoEmpty = true;
  add(toDoToAdd) {
    this.todos.push(toDoToAdd);
    console.log("added");
    this.toDoEmpty = false;
  }
  remove(id) {
    this.todos.splice(this.todos.findIndex(x => x.id == id), 1);
    console.log("removed");
    if(this.todos.length == 0){
      this.toDoEmpty = true;
    }
  }

}
