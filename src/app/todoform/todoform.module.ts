import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoformComponent } from './todoform.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoformComponent],
  providers: [TodoformComponent],
  exports: [TodoformComponent]
})
export class TodoformModule { }
