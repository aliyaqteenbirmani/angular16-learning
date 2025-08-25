import { Component } from '@angular/core';
import { SubscribeService } from '../Service/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab: string = 'home';

  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }

  onSubscribeClicked() {
    // ADD user to Database
    // Send Email with subscription details
    // Allow user to access the service
    let subService = new SubscribeService();
    subService.onSubscribe('Monthly');
  }
}
