import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter< { serverName: string, serverContent: string } >();
  @Output('bpCreated') blueprintCreated = new EventEmitter< { serverName: string, serverContent: string } >();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
  // tslint:disable-next-line:typedef
  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
