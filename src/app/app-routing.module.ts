import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { SignInPhoneComponent } from './sign-in-phone/sign-in-phone.component';
import { AccesCodeComponent } from './acces-code/acces-code.component';
import { CabinetProfilePresentationComponent } from './cabinet-profile-presentation/cabinet-profile-presentation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SignUpPhoneComponent } from './sign-up-phone/sign-up-phone.component';

const routes: Routes = [
  { path: '',             component: PageNavigationComponent            },
  { path: 'sign-in',      component: SignInComponent                    },
  { path: 'sign-in-phone',component: SignInPhoneComponent               },
  { path: 'sign-up-phone',component: SignUpPhoneComponent               },
  { path: 'sign-up',      component: SignUpComponent                    },
  { path: 'edit-profile', component: EditProfilePageComponent           },
  { path: 'acces-code',   component: AccesCodeComponent                 },
  { path: 'cabinet',      component: CabinetProfilePresentationComponent},
  { path: 'calendar',     component: CalendarComponent                  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
