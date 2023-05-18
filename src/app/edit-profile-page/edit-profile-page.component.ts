import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent {
  phoneNumber:string = "";
  badNumber:boolean = false;

  constructor() {}

  ngOnInit() {}

  validatePhoneNumber() {
    console.log(this.phoneNumber)
    const phoneRegex = /^07[2-8](?:[ .-]?(\d{3})[ .-]?(\d{3})|\d{7})$/ ;
    if (phoneRegex.test(this.phoneNumber.replace(/\s/g, ''))) {
      this.badNumber = false;
    } else {
      this.badNumber = true;
    }
  }


}
