import { Injectable } from '@angular/core';
import { Task } from '../componentes/Task';
import { TASK } from '../componentes/mock-task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]>{
      const tasks = of(TASK);
      return tasks;
  }
  
}
