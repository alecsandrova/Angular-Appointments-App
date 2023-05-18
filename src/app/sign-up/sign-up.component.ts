import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  hide: boolean = true;
  checked: boolean = false;

  constructor(public connection: ConnectionService, public router: Router, public data: DataService) {}

  ngOnInit() {}
  signinWithGoogle(): void {}

  signinWithFacebook(): void {
    //TO DO
  }
  goToPage(pageName: string) {
    if(pageName == "sign-in") this.data.updateScope("sign-in");
    this.router.navigate([`${pageName}`]);
    
  }
}
