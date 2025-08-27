import { AfterViewInit, Component, ElementRef, ViewChild,Renderer2 } from '@angular/core';
import { Observable,of,from,mergeMap, fromEvent, map, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private renderer: Renderer2,private  elRef: ElementRef) {}
  title = 'angular-observable';
  data:number[] = [];
  array1 = [1, 2, 3, 4, 5];
  array2 = [6, 7, 8, 9, 10];

  @ViewChild('createbtn') createButton: ElementRef | undefined;

  createBtnObs;

 /* 1. Create an observable
  Observable
  myObservable = new Observable ((observer) =>
  {
    setTimeout(() => {observer.next(1)},1000);
    setTimeout(() => {observer.next(2)},2000);
    setTimeout(() => {observer.next(3)},3000);
    setTimeout(() => {observer.next(4)},4000);
    // setTimeout(() => {observer.error(new Error('Something went wrong'))},4000);
    setTimeout(() => {observer.next(5)},5000);
    setTimeout(() => {observer.complete()},6000);


  });*/

  promisData = new Promise((resolve, reject) => {
    resolve([10,20,30,40,50]);
  })
  myObservable = from([2,4,6,8,10,12]);

  transformObs = this.myObservable.pipe(
    map((val) => {return val * 5}),
    filter((val, i) => {return val % 4 === 0})
  );

  filterObs = this.transformObs.pipe(
    filter((val,i) => {return val % 4 === 0})
  );

  GetAsyncData() {

    // Observer
    // next, error, complete
  //   this.myObservable.subscribe((val:any) => {
  //     this.data.push(val);
  //   },
  // (err) => {
  //   alert(err.message);
  // }, () => {
  //   alert('Completed');
  // });
  
  this.transformObs.subscribe({
    next: (val:any) => {
      this.data.push(val);
    },
    error: (err) => {
      alert(err.message);
    },
    complete: () => {
      alert('Completed');
    }
  });


  /*buttonClicked(){
    this.createBtnObs = fromEvent(this.createButton.nativeElement, 'click').subscribe(
      (data) => {
        console.log('Button Clicked: ', data);
        console.log('ElementRef: ', this.createButton);
      });
  }

  ngAfterViewInit(){
    // this.buttonClicked();
  }*/

  /* showItem()
  // {
  //   let div = this.renderer.createElement('div')
  //   let text = this.renderer.createText('Item');
  //   div.className = 'data-list';
  //   this.renderer.appendChild(div, text);
  //   const container = this.elRef.nativeElement.querySelector('#container');
  //   this.renderer.appendChild(container, div);
  // }

  // showItem()
  // {
  //   let div = document.createElement('div');
  //   div.innerText = 'Item';
  //   document.getElementById('container')?.appendChild(div);
  // }*/

}
}
