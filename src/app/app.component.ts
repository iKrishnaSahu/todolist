import { Component } from '@angular/core';
import { TodolistService } from './todolist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';

  constructor(private toDoListService : TodolistService) {
    
  }

}

