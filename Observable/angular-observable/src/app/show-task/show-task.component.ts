import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['Task1', 'Task2', 'Task3']

  taskService:TaskService = inject(TaskService);
  
  ngOnInit(){
    this.taskService.CreateTask.subscribe((task:string) => {
      this.tasks.push(task);
    });
  }
}
