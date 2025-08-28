import { Component, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  newTask:string = '';

  constructor(){}

  taskService:TaskService = inject(TaskService);
  
  CreateNewTask() {
    console.log(this.newTask);
    this.taskService.onCreateTask(this.newTask);
  }
}
