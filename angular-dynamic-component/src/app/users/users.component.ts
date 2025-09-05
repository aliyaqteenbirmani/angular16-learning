import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';
  
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { 

  }

  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User | null = null;

  OnDeleteClicked(user:User)
  {
    this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
  }

  ngOnInit() {
    this.users = this.userService.users;
  }


  OnUserDeletetionConfirmed(value: boolean)
  {
    this.showConfirmDeleteComponent = false;
    if(value)
    {
      let index = this.userService.users.indexOf(this.userToDelete!);
      this.userService.users.splice(index,1);
    }
  }
}