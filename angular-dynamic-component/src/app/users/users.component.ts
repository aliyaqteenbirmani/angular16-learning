import { Component, OnInit,ComponentFactoryResolver,ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainer } from '../viewContainer.directive';
  
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, 
              private componentFactoryResolver: ComponentFactoryResolver) 
  {

  }

  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User | null = null;
  @ViewChild(ViewContainer,{static: false}) container: ViewContainer | undefined;

  onConfirmationObs!: any;
  OnDeleteClicked(user:User)
  {
    // this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
    this.showConfirmDelete(this.userToDelete);
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

  showConfirmDelete(user: User) {

    // 1. Create component factory
     const confirmDeleteComponentFactory = 
          this.componentFactoryResolver.resolveComponentFactory(ConfirmDeleteComponent);

    // 2. Get the view container reference
    const viewContainerRef = this.container?.viewContainer;

    // 3. Clear the container
    viewContainerRef?.clear();

    // 4. Create the component
    const componentRef = viewContainerRef?.createComponent<ConfirmDeleteComponent>(confirmDeleteComponentFactory);
    componentRef!.instance.userToDelete = user;

    this.onConfirmationObs = componentRef!.instance.OnConfirmation.subscribe((value: boolean) => {
      this.onConfirmationObs.unsubscribe();
      viewContainerRef?.clear();

      if(value)
      {
        let index = this.userService.users.indexOf(this.userToDelete!);
        this.userService.users.splice(index,1);
      }
    });

  }
}