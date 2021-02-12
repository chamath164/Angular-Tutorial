import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // tslint:disable-next-line:typedef
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}

// import {Directive, HostBinding, HostListener} from '@angular/core';
//
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective{
//   @HostBinding('class.open') isOpen = false;
//
//   // tslint:disable-next-line:typedef
//   @HostListener('click')toggleOpen(){
//     this.isOpen = !this.isOpen;
//   }
// }
