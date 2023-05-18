import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';
import { MainFeedPageComponent } from './main-feed-page/main-feed-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { SignInOldComponent } from './sign-in-old/sign-in-old.component';
import { SignUpOldComponent } from './sign-up-old/sign-up-old.component';
import { SignInPhoneComponent } from './sign-in-phone/sign-in-phone.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AccesCodeComponent } from './acces-code/acces-code.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CabinetProfilePresentationComponent } from './cabinet-profile-presentation/cabinet-profile-presentation.component';
import { MatChipsModule } from '@angular/material/chips';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SignUpPhoneComponent } from './sign-up-phone/sign-up-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PageNavigationComponent,
    ProfilePageComponent,
    FavouritesPageComponent,
    AppointmentsPageComponent,
    MainFeedPageComponent,
    EditProfilePageComponent,
    SignInOldComponent,
    SignUpOldComponent,
    SignInPhoneComponent,
    AccesCodeComponent,
    CalendarComponent,
    CabinetProfilePresentationComponent,
    SignUpPhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    MatChipsModule,
    NgxStarRatingModule,
    GoogleMapsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
