import { Component } from '@angular/core';
import { SubscribeService } from '../Service/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [SubscribeService]
})

export class HeaderComponent {
  constructor(private subscribeService: SubscribeService) {}

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
    this.subscribeService.onSubscribe('Monthly');
  }
}
