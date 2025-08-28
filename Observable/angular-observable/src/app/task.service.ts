import { Injectable,EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  // CreateTask:EventEmitter<string> = new EventEmitter<string>();
  CreateTask= new Subject<string>();

  onCreateTask(task:string){
    this.CreateTask.next(task);
  }
}
