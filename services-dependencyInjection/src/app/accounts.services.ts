import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';
import {EventEmitter} from 'events';


@Injectable()
export class AccountsServices{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  // statusUpdated = new EventEmitter<string>();

  constructor( private loggingServices: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.loggingServices.logStatusChange(status);
  }
  // tslint:disable-next-line:typedef
  updateAccount(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingServices.logStatusChange(status);
  }
}
