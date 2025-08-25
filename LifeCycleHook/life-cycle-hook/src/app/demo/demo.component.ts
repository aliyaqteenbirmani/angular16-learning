import { CommonModule } from '@angular/common';
import { Component,Input, OnChanges,OnInit, SimpleChange, SimpleChanges, ViewChild,ElementRef,ContentChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit{

  textValue:string = 'Hello, World!';
  title: string = 'Demo Component';
  @Input() message!: string[];
  @ViewChild('temp') temp!: ElementRef;

  @ContentChild('temp') paraContent!:ElementRef;

  constructor() {
    console.log('DemoComponent constructor called');
  }

  ngOnChanges(changes:SimpleChanges)
  {
    // console.log('ngOnChanges Hook Called');
    // console.log('ngOnChanges Hook Called: ', this.paraContent);

  }

  ngOnInit() {
    // console.log('ngOnInit Hook Called');
    // console.log('ngOnInit Hook Called: ', this.paraContent);

    // console.log('ViewChild Element:', this.temp.nativeElement.innerHTML);
  }

  ngDoCheck() {
    // console.log('ngDoCheck Hook Called');
    // console.log('ngDoCheck Hook Called: ', this.paraContent);
  }

  ngAfterContentInit()
  {
    // console.log('ngAfterContentInit Hook Called');
    // console.log('ngAfterContentInit Hook Called: ', this.paraContent.nativeElement);
  }

  ngAfterContentChecked(){
    // console.log('ngAfterContentChecked Hook Called:', this.temp);
    // console.log('ngAfterContentChecked Hook Called: ', this.paraContent.nativeElement);
  }

  ngAfterViewInit()
  {
    console.log('ngAfterViewInit Hook Called.');
    // console.log('ngAfterViewInit:', this.temp);
  }

  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Hook Called.');
    // console.log('ngAfterViewChecked:', this.temp);
  }

  ngOnDestroy()
  {
    console.log('ngOnDestroy Hook Called.');
  }
}
