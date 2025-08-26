import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor() { }

  LogMessage(name: string, status:string) {
    console.log(`A new user with name ${name} with status ${status} is added to userlist.`);
  }
}
