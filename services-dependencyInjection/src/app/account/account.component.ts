import { Component, Input } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsServices} from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( private loginService: LoggingService, private accountsService: AccountsServices ) {
  }

  // tslint:disable-next-line:typedef
  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    console.log('A server status changed, new status: ' + status);
    // this.loginService.logStatusChange(status);
    // this.accountsService.statusUpdated.emit(status);
  }
}
