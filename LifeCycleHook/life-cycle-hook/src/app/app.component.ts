import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DemoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-cycle-hook';
  doDestroy: boolean = false;
  inputVal:string = '';
  
  constructor()
  {
    console.log('AppComponent constructor called');
  }

  ngAfterViewInit() {
    // console.log('AppComponent ngAfterViewInit called');
  }

    ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Hook AppComponent Called.');
    // console.log('ngAfterViewChecked:', this.temp);
  }

  destroyComponent() {
    this.doDestroy = !this.doDestroy;
  }

  onSubmit(inputEl:HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
