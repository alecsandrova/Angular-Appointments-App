import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'schedder-web';
  isMobile: boolean = false;
  isDesktop: boolean = false;
  
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe(Breakpoints.Handset)
      .subscribe((result) => {
        this.isMobile = false;
        this.isDesktop = false;
        if (result.matches) {
          this.isMobile = true;
        }
        else this.isDesktop = true;
      });
  }
}
