import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  onSubscribeClicked() {
    let subService = new SubscribeService();
    subService.onSubscribe('Quarterly');
  }
}
