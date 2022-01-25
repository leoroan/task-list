import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import { Task } from '../task';
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor( private taskService:TaskService ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks => 
      this.tasks = tasks
      );
  }

}
