import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirectivesDirective {

  @HostBinding('value') inputValue:string = 'Hi there';
  constructor() { }

}
