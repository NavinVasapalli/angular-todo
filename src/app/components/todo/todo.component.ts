import { Component, OnInit , Input  } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Student } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [];
  students: Student[] = [];

  constructor(private todoservice: TodoService) { }

  ngOnInit() {

// fetching date 
this.todoservice.getData().subscribe(
  todos11 => {
    this.todo = todos11;

    // console.log("accessing data from component " + JSON.stringify(todos11));

    this.todoservice.myMethod(todos11);
  }
  );


  const todoObservable = this.todoservice.addTodoUpdate();
  todoObservable.subscribe((todoData: Todo[]) => {  
  this.todo = todoData;
});


  
  
  







  
// fetching date end

  // student demo

  // const studentsObservable = this.todoservice.getStudents();

  // studentsObservable.subscribe((studentsData: Student[]) => {
  //     this.students = studentsData;
  // });

//   const todoObservable = this.todoservice.addTodoUpdate();
//   todoObservable.subscribe((todoData: Todo[]) => {
//     this.todo = todoData;
//     console.log("observable : " +   this.todo );

// });

  // student demo



  }

  



  deleteTodo(todo: Todo) {
    console.log("service call");
    this.todo = this.todo.filter(t => t.id !== todo.id);
    this.todoservice.deleteData(todo).subscribe();
  }

  addTodoUpdate() {

  
  //  this.todo.push(todo);
  }


}
