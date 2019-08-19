import { Directive, HostListener } from '@angular/core';
import { KeyEventsPlugin } from '@angular/platform-browser/src/dom/events/key_events';

@Directive({
  selector: '[appKeyeventList]'
})
export class KeyeventListDirective {

  constructor() { }

  

  // @HostListener('keyup', event) keyEvent() {
  //   console.log(event);
  //   if(!isNaN(event)){

  //   }
  // }

//   @HostListener('mouseleave') onMouseLeave() {
//     console.log('black');
// }

}
