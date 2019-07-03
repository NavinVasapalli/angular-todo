import { Component, OnInit } from '@angular/core';
import{ Todo } from '../../../models/Todo';
import{TodoService} from '../../../services/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  todo:Todo[];
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
  
    
  }

  
  addTodo(todo: Todo){

    this.todoservice.addTodo(todo).subscribe(todo => this.todo.push(todo));
   


  }

}
