export class LoggingService{
  // tslint:disable-next-line:typedef
  logStatusChange( status: string ){
    console.log('A server status changed, new status: ' + status);
  }
}
