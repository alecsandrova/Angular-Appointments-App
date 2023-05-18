import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  hide = true;
  // accountRequest: GenerateTokenRequest = new GenerateTokenRequest();

  constructor(
    public connection: ConnectionService,
    public router: Router,
    public data: DataService,

  ) {}

  ngOnInit() {}

  loginWithGoogle(): void {
    
  }

  loginWithFacebook(): void {
    //TO DO
  }

  goToPage(pageName: string) {
    if(pageName == "sign-up") this.data.updateScope("sign-up");
    this.router.navigate([`${pageName}`]);

  }
}
