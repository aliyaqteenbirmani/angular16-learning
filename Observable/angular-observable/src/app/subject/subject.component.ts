import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit()
  {
    /*let obs = new Observable((observer) => 
      {
        observer.next(Math.random());
      })

    const subject = new ReplaySubject(2,2000);

    subject.next(100);
    subject.next(200);
    subject.next(300);
    const subject = new BehaviorSubject<number>(1234);
    subject.subscribe((data) => console.log("1st Subscriber: " + data));
    subject.subscribe((data) => console.log("2nd Subscriber: " + data));

    subject.next(2020);
    subject.subscribe((data) => console.log("3rd Subscriber: " + data));
    subject.next(3030);
   /* AJAX Call
    const subject = new Subject();
    const data = ajax('https://randomuser.me/api');

    subject.subscribe((response) => {console.log(response);});
    subject.subscribe((response) => {console.log(response);});
    subject.subscribe((response) => {console.log(response);});

    data.subscribe(subject);

    const asyncSubject = new AsyncSubject();
    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);


    asyncSubject.subscribe((data) => console.log("1st Subscriber: " + data));
    // asyncSubject.subscribe((data) => console.log("3rd Subscriber: " + data));
    asyncSubject.complete();
    asyncSubject.next(400);
    asyncSubject.subscribe((data) => console.log("2nd Subscriber: " + data));*/
    const array1 = [1,2,3,4,5,6,7,8]
    const promise = new Promise((resolve, reject) => {
      console.log("Promise Executed:");
      resolve(100);
      resolve(200);
    })
    promise.then((data)=>{console.log("Promise Resolved with: " + data)});


    const obs  = new Observable((sub) =>{
      console.log("Observable Executed");
      sub.next(100);
      sub.next(200);
      sub.next(300);
    }).subscribe(data => {
      console.log("Observable Resolved with: " + data);
    });
  }
}
