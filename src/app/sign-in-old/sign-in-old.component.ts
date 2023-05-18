import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in-old',
  templateUrl: './sign-in-old.component.html',
  styleUrls: ['./sign-in-old.component.scss']
})
export class SignInOldComponent {
  hide = true;
  // accountRequest: GenerateTokenRequest = new GenerateTokenRequest();
  

  constructor(public connection: ConnectionService, public router: Router) {}

  ngOnInit() {}

  login() {
    // this.accountRequest.email = 'somebody@example.com';
    // this.accountRequest.password = 'hackmemeow';
    // this.accountRequest.device = 'deviceName';
    // this.connection
    //   .login(this.accountRequest)
    //   .subscribe((accountResponse) => console.log(accountResponse));
  } //this function is temporary, used just to check functionality, real login will be implemented soon

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
