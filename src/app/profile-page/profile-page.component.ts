import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  // user:
  constructor(public router: Router, public data:DataService) {}

  ngOnInit() {
    this.data.currentUser.subscribe(user=>{})
  }

  editProfile(){
    this.router.navigate(['/edit-profile']);
  }

  logout(){
    // this.router.navigate(['/sign-in']);
    this.data.updateuserStatus(false);
  }
}
