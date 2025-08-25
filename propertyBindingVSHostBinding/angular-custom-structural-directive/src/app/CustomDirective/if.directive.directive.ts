import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirectiveDirective {

  // 1. Get access to the DOM element which we want to add / Remove
  // 2. Place from where we want to add / remove the DOM element

  constructor(private view: TemplateRef<any>, private template: ViewContainerRef) { }

  @Input('appIf') set display(condition: boolean) {
    if(condition)
    {
      this.template.createEmbeddedView(this.view);
    }
    else
    {
      this.template.clear();
    }
  }

}
