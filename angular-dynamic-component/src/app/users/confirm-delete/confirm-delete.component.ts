import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor() { }
  @Input() userToDelete: User | null = null;

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() {
  }

  OnConfirmationbtnClicked(isConfirmed: boolean) {
    this.OnConfirmation.emit(isConfirmed);
  }

}