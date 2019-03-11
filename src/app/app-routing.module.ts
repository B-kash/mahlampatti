import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {LandingPageLayoutComponent} from './modules/landing-page/landing-page-layout/landing-page-layout.component';


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: LandingPageLayoutComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'home', component: HomeComponent},
  // {path: 'patients', component: PatientListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
