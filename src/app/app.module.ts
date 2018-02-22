import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TodolistModule } from './todolist/todolist.module';
import { TodoformModule } from "./todoform/todoform.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodolistModule,
    TodoformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
