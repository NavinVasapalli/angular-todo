import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../models/Todo'
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
  console.log("call to add service" + " url" +this.todosUrl  + JSON.stringify(todo));
  return this.http.post<Todo>(this.todosUrl, todo , httpOptions);
}


}
