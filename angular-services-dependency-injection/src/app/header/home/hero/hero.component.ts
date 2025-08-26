import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})

export class HeroComponent {
  // 1. How to provide dependency injection
  // constructor(private subscribeService: SubscribeService) {}

  // 2. How to provide dependency injection
  subService = inject(SubscribeService);

  onSubscribeClicked() {
    this.subService.onSubscribe('Yearly');
  }
}
