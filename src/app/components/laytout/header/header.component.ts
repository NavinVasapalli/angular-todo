import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../models/Todo';
import { TodoService } from '../../../services/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todo: Todo[] = [];
  todoNewId : number ;
  
  
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.todoservice.getData().subscribe(
      todos11 => {
        // console.log(" xsaddsd" +  JSON.stringify(todos11));
        // console.log("Array lenght" +  todos11.length);

       this.todoNewId = todos11.length;

      });
  }

  addTodo(todo: Todo) {

   console.log( "array lenght " + this.todoNewId  + " added todo "  +  JSON.stringify(todo));
   this.todoNewId =     this.todoNewId +1;
   let foo :Todo = {
    id:this.todoNewId,
    title:todo.title,
    completed:todo.completed
};

    this.todoservice.addTodo(foo).subscribe(todo => console.log() );
  }

}
