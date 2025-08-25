import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  onSubscribeClicked() {
    let subService = new SubscribeService();
    subService.onSubscribe('Yearly');
  }
}
