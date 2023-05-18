import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './models/finallysomegoodfuckingclasses';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private phoneNumber = new BehaviorSubject<any>({});
  currentphoneNumber = this.phoneNumber.asObservable();

  private userStatus = new BehaviorSubject(false);
  currentuserStatus = this.userStatus.asObservable();

  private user = new BehaviorSubject<Account>(new Account())
  currentUser = this.user.asObservable();

  private scope = new BehaviorSubject<any>('sign-in')
  currentScope = this.scope.asObservable();

  constructor() { }

  updateNumber(number:any){
    this.phoneNumber.next(number);
  }

  updateuserStatus(state:boolean){
    this.userStatus.next(state);
    console.log(state)
  }

  updateUser(user:Account){
    this.user.next(user);
  }

  updateScope(scope:string){
    this.scope.next(scope);
  }
}
