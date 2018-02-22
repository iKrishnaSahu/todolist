import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodolistService } from '../todolist.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodolistComponent],
  providers:[TodolistService],
  exports:[TodolistComponent]
})
export class TodolistModule { 
  constructor(todolistServe : TodolistService){
    
  }
}
