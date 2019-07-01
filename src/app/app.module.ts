import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { from } from 'rxjs';
import { HeaderComponent } from './components/laytout/header/header.component';
import { AddTodosComponent } from './components/add-todos/add-todos.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
