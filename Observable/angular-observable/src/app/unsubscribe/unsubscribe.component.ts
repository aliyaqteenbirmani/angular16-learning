import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {

  counter = interval(1000);
  data1:number[] = [];
  data2:number[] = [];
  subscriber1: any;
  subscriber2: any;

  onSubscribe1()
  {
    this.subscriber1 = this.counter.subscribe((val) => {
      this.data1.push(val);
    });
  }

  onUnsubscribe1()
  {
    this.subscriber1.unsubscribe();
  }

  onSubscribe2()
  {
    this.subscriber2 = this.counter.subscribe((val) => {
      this.data2.push(val);
    });
  }

  onUnsubscribe2()
  {
    this.subscriber2.unsubscribe();
  }

}
