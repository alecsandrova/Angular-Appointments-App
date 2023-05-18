import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DataService } from '../data.service';
import { Account } from '../models/finallysomegoodfuckingclasses';

@Component({
  selector: 'app-sign-in-phone',
  templateUrl: './sign-in-phone.component.html',
  styleUrls: ['./sign-in-phone.component.scss'],
})
export class SignInPhoneComponent {
  checkedTerms: boolean = false;
  checked: boolean = false;
  checkError: boolean = false;
  phoneNumber: string = '';
  badNumber: boolean = false;

  account: Account = new Account();
  scope: string = '';

  constructor(
    public connection: ConnectionService,
    public router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.data.currentphoneNumber.subscribe((value) => {
      this.phoneNumber = value;
    });
    this.data.currentScope.subscribe((value) => {
      this.scope = value;
    });
  }

  formatPhoneNumber(phoneNumber: string): string {
    // Remove any whitespace or special characters from the phone number
    console.log(phoneNumber);
    const cleanedPhoneNumber = phoneNumber.replace(/[^+0-9]/g, '');
    console.log(cleanedPhoneNumber);

    // Check if the phone number starts with the Romanian country code or the national prefix
    if (/^(\+4|0)/.test(cleanedPhoneNumber)) {
      // If the phone number starts with the Romanian country code, return it as-is
      if (/^\+4/.test(cleanedPhoneNumber)) {
        return cleanedPhoneNumber;
      }
      // If the phone number starts with the national prefix, add the Romanian country code (+4) while preserving the initial 0
      else {
        return `+40${cleanedPhoneNumber.slice(
          cleanedPhoneNumber.startsWith('0') ? 1 : 0
        )}`;
      }
    }
    // If the phone number doesn't start with the Romanian country code or national prefix, return invalid
    else {
      return cleanedPhoneNumber;
    }
  }

  signin() {
    
    // console.log('signin');
    
    this.account.phone = this.phoneNumber;
    console.log({
      phone: this.phoneNumber,
    });
    this.connection
      .generatePasswordlessToken({
        phone: this.phoneNumber,
      })
      .subscribe((response) => {
        this.data.updateUser(this.account)
        this.goToPage('acces-code');
      });
  }

  checkStuff() {
    this.phoneNumber = this.formatPhoneNumber(this.phoneNumber);
    this.validatePhoneNumber();
    if (this.checked == true && this.checkedTerms == true) {
      this.checkError = false;
      if (this.badNumber == false) {
        this.data.updateNumber(this.phoneNumber);
      }
    } else this.checkError = true;

    this.signin();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  validatePhoneNumber() {
    console.log(this.phoneNumber);
    const phoneRegex = /^\+407[2-8](?:[ .-]?(\d{3})[ .-]?(\d{3})|\d{7})$/;
    if (phoneRegex.test(this.phoneNumber.replace(/\s/g, ''))) {
      this.badNumber = false;
    } else {
      this.badNumber = true;
    }
  }
}
