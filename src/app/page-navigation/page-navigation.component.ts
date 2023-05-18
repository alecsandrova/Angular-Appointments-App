import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageNavigationComponent {
  isUser:any;
  previousUserState:boolean = false;
  constructor(private router: Router, private data:DataService) {}

  ngOnInit() {
    
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  checkUser(){
    this.data.currentuserStatus.subscribe((value) => {
      this.isUser = value;
    });

    if(this.isUser != this.previousUserState){
      this.previousUserState = this.isUser;
      console.log("pn:" + this.isUser)
    }
  }
    
  }

