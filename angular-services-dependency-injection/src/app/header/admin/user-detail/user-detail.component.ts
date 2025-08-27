import { Component, inject, OnInit } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  selectedUser: User | null = null;
  userService = inject(UserService);

  ngOnInit() {
    this.userService.OnUserDetailClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser);
    });
  }
}
