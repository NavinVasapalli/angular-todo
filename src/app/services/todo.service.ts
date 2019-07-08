import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Student } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'

    }
  )

}
@Injectable({

  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  todosUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  // sample code 
  todoFrSer: Todo[] = [];
  
 
  // sample code 

  // to send to object to todo component
  


  public addTodoUpdate(): any {
    const todoObservable = new Observable(todoobserver => {

      todoobserver.next(this.todoFrSer);
     
    });
    return todoObservable;

  }


  myMethod(todoInt:any){
    this.todoFrSer = todoInt;
    // console.log(" ffdrr " + JSON.stringify( this.todoFrSer )
  }

  // to send to object to todo component

  getData(): Observable<Todo[]> {
    //console.log("object before returing in service : " + JSON.stringify(this.http.get<Todo[]>(this.todosUrl)));
    // let obj = this.http.get<Todo[]>(this.todosUrl);
    // console.log("object before returing in service : " + JSON.stringify(obj));
     return this.http.get<Todo[]>(this.todosUrl);

  }

  toggleCompleted(todo: Todo): Observable<any> {
    const Url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(Url, todo, httpOptions);

  }

  deleteData(todo: Todo): Observable<Todo> {
    const Url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(Url, httpOptions)

  }

  addTodo(todo: Todo  ) {

    // console.log("todo from headr" + todo);
    // this.students.push({
    //   id: 3,
    //   name: 'Ankit',
    //   enrollmentnumber: 110470116022,
    //   college: 'VVP Engineering College',
    //   university: 'GTU'
    // }
    //);
    this.todoFrSer.push(todo);
    // console.log(this.todoFrSer);
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    // return this.todoFrSer;
  }

 
}
