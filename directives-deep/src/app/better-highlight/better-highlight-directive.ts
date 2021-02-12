import {Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';
import {style} from '@angular/animations';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue', false, false);
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') mouseover(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue', false, false);
    this.backgroundColor = 'this.highlightColor';
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // @ts-ignore
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent', false, false);
    this.backgroundColor = 'this.defaultColor';
  }
}
