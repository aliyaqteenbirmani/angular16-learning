import { Component,ContentChild,ElementRef,QueryList,ContentChildren } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@ContentChild('para') paragraphEl!: ElementRef;

@ContentChildren('para') paragraphsEl!: QueryList<ElementRef>;

@ContentChild(TestComponent) testEl!: TestComponent;

@ContentChildren(TestComponent) testEls!: QueryList<TestComponent>;

  styleParagraph()
  {
    // console.log(this.paragraphEl.nativeElement);
    // console.log(this.testEl.name);
    // this.paragraphsEl.forEach(para => {
    //   console.log(para.nativeElement);
    // });

    this.testEls.forEach(test => {
      console.log(test.name);
    });
  }

}
