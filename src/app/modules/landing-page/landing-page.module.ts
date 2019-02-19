import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageLayoutComponent } from './landing-page-layout/landing-page-layout.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

@NgModule({
  declarations: [LandingPageLayoutComponent, IntroPageComponent],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
