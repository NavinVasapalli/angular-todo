import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Student } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {

headers : new HttpHeaders(
{
'Content-Type': 'application/json'

}
)

}
@Injectable({

  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) { }

  
// sample code 
todoFrSer: Todo[] =[];
students: Student[] = [{
  id: 1,
  name: 'Krunal',
  enrollmentnumber: 110470116021,
  college: 'VVP Engineering College',
  university: 'GTU'
},
{
  id: 2,
  name: 'Rushabh',
  enrollmentnumber: 110470116023,
  college: 'VVP Engineering College',
  university: 'GTU'
},
{
  id: 3,
  name: 'Ankit',
  enrollmentnumber: 110470116022,
  college: 'VVP Engineering College',
  university: 'GTU'
}];

public getStudents(): any {
  const studentsObservable = new Observable(observer => {
      observer.next(this.students);
  });

  return studentsObservable;
}
// sample code 

// to send to object to todo component

public addTodoUpdate(): any{
  const todoObservable = new Observable(todoobserver => {
    todoobserver.next(this.todoFrSer);
});
  return todoObservable;

}


// to send to object to todo component



  todosUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  
  getData():Observable<Todo[]>{
    
    return this.http.get<Todo[]>(this.todosUrl);

}

toggleCompleted(todo : Todo):Observable<any>{

  const Url = `${this.todosUrl}/${todo.id}`;
return this.http.put(Url, todo, httpOptions );

}

deleteData(todo:Todo):Observable<Todo>{
  const Url = `${this.todosUrl}/${todo.id}`;
  return this.http.delete<Todo>(Url, httpOptions)

}

addTodo(todo : Todo){

// console.log("todo from headr" + todo);
  this.students.push({
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
  }


);

this.todoFrSer.push(todo) ;

 console.log(this.todoFrSer);

return this.http.post<Todo>(this.todosUrl, todo , httpOptions);

}


}
