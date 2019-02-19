import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LandingPageLayoutComponent } from './landing-page-layout/landing-page-layout.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

@NgModule({
  declarations: [LandingPageLayoutComponent, IntroPageComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LandingPageModule { }
