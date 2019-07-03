import { Component, OnInit} from '@angular/core';
import{ Todo } from '../../models/Todo';
import{TodoService} from '../../services/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo:Todo[];
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
   
    this.todoservice.getData().subscribe(
    todos11 =>{
    this.todo = todos11;
  } 

);

  }
  deleteTodo(todo : Todo){

 console.log("service call");
this.todo = this.todo.filter(t => t.id !== todo.id);
this.todoservice.deleteData(todo).subscribe();

  }

  addTodo(todo: Todo){
    this.todoservice.addTodo(todo).subscribe(todo => this.todo.push(todo));

  }

}
