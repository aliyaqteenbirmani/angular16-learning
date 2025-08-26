import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  constructor(private userService: UserService) {}
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser() {
    this.userService.CreateUser( new User(
        this.name,
        this.gender,
        this.subType,
        this.status
      ));
    console.log(this.userService.users);
  }
}
