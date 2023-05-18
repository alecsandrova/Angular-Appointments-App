import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ConnectionService } from '../connection.service';
import {
  AccountCreationRequest,
  AccountCreationResponse,
  PasswordlessTokenGenerationRequest,
  TokenGenerationRequest,
  VerifyCodeRequest,
} from '../models/client';
import { Account } from '../models/finallysomegoodfuckingclasses';

@Component({
  selector: 'app-acces-code',
  templateUrl: './acces-code.component.html',
  styleUrls: ['./acces-code.component.scss'],
})
export class AccesCodeComponent {
  otp: string = '';
  showOtpComponent = true;
  account: Account = new Account();
  phoneNumber: string = '';
  scope: string = '';

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '*',
    inputStyles: { width: '50px', height: '50px' },
  };

  constructor(
    private router: Router,
    private data: DataService,
    private connection: ConnectionService
  ) {}

  ngOnInit(): void {
    this.data.currentphoneNumber.subscribe((value) => {
      this.phoneNumber = value;
    });
    this.data.currentScope.subscribe((value) => {
      this.scope = value;
    });
  }
  onOtpChange(otp: string) {
    this.otp = otp; // When all 6 digits are filled, trigger OTP validation method
  }

   formatPhoneNumber(phoneNumber: string): string {
    // Remove any whitespace or special characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the phone number starts with the Romanian country code or the national prefix
  if (/^(\+4|0)/.test(cleanedPhoneNumber)) {
    // If the phone number starts with the Romanian country code, return it as-is
    if (/^\+4/.test(cleanedPhoneNumber)) {
      return cleanedPhoneNumber;
    }
    // If the phone number starts with the national prefix, add the Romanian country code (+4) while preserving the initial 0
    else {
      return `+4${cleanedPhoneNumber.slice(cleanedPhoneNumber.startsWith('0') ? 1 : 0)}`;
    }
  }
    // If the phone number doesn't start with the Romanian country code or national prefix, return null
    else {
      return 'invalid';
    }
  }


  signup() {
    // this.phoneNumber = this.formatPhoneNumber(this.phoneNumber);
    // this.connection
    //   .createAccount({
    //     email: '',
    //     phone: this.phoneNumber,
    //     password: '',
    //   })
    //   .subscribe((response) => {
    //     this.account.account_id = response.account_id;
    //     this.account.email = response.email;
    //     this.account.phone = response.phone;
    //   });
  }

  login() {
    // this.phoneNumber = this.formatPhoneNumber(this.phoneNumber);
    // if (this.scope == 'sign-up') this.signup();
    // this.connection
    //   .generateToken({
    //     email: this.account.email,
    //     phone: this.account.phone,
    //     password: '',
    //     device: 'Schedder Android App 6.6beta',
    //   })
    //   .subscribe((response) => {
    //     this.account.token = response.toString();
    //     console.log('token: ' + response);
    //   });
  }


  verifyCode(){

    console.log({
      "phone": this.phoneNumber, 
      "code": this.otp,
      "device": "plm"
    } );
    this.connection.verifyCode(
      {
        "phone": this.phoneNumber, 
        "code": this.otp,
        "device": "plm"
      }    
    ).subscribe(response => {
      console.log(response);
      this.data.updateuserStatus(true);
      if(response.token != undefined) this.account.token = response.token;
      this.account.phone=response.phone;
      this.goToPage('');
    })
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
