import { Component, OnInit, Input, inject } from '@angular/core';
import { Task } from '../task';
import { TASK } from '../mock-task';
import  { faTimes } from '@fortAwesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = TASK[0]
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
