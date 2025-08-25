import { Directive,HostBinding, HostListener,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {
  constructor() { }

  @HostBinding('value') inputValue:string = 'Hi there';

  @HostListener('focus') logMessage()
  {
    console.log('Input has been focused from sample directive')
  }

}
