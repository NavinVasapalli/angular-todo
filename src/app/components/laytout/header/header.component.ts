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
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    // this.todoservice.getData().subscribe(
    //   todos11 => {
    //     this.todo = todos11;
    //   });
  }

  addTodo(todo: Todo) {
    this.todoservice.addTodo(todo).subscribe(todo => this.todo.push(todo));
  }

}
