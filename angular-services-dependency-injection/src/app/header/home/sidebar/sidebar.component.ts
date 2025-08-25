import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SubscribeService], // what to provide
})

export class SidebarComponent {
  constructor(private subscribeService: SubscribeService) {} // How to provide dependency

  onSubscribeClicked() {
    this.subscribeService.onSubscribe('Quarterly');
  }
}
