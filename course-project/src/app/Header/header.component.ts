import {Component, Output, EventEmitter} from '@angular/core';


@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();
  // tslint:disable-next-line:typedef
  onSelect(features: string){
    this.featureSelected.emit(features);
  }
}
