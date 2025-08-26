import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})

export class HeroComponent {
  constructor(private subscribeService: SubscribeService) {}

  onSubscribeClicked() {
    this.subscribeService.onSubscribe('Yearly');
  }
}
