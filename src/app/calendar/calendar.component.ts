import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  selectedDate: any;
  
  constructor(public router: Router){

  }
  onSelect(event:any){
    console.log(event);
    this.selectedDate= event;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
