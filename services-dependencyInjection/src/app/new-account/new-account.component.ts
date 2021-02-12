import { Component } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsServices} from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {


  constructor( private loginService: LoggingService, private accountsService: AccountsServices ) {
    // this.accountsService.statusUpdated.subscribe(
    //   (status: string) => alert('newStatus' + status)
    // );
  }

  // tslint:disable-next-line:typedef
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loginService.logStatusChange(accountStatus);
  }
}
