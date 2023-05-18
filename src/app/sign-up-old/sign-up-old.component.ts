import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-old',
  templateUrl: './sign-up-old.component.html',
  styleUrls: ['./sign-up-old.component.scss']
})
export class SignUpOldComponent {
  hide: boolean = true;
  checked: boolean = false;

  constructor(public connection: ConnectionService, public router: Router) {}

  ngOnInit() {}
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
