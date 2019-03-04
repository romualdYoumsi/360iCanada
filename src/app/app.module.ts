import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './pages/public/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { routes } from './app-routing.module';
import { WhatWeCanBringYouComponent } from './pages/public/what-we-can-bring-you/what-we-can-bring-you.component';
import { WorkingMethodComponent } from './pages/public/working-method/working-method.component';
import { InitialRequestComponent } from './pages/public/initial-request/initial-request.component';
import { ChooseUsComponent } from './pages/public/choose-us/choose-us.component';
import { FreeEvaluationComponent } from './pages/public/free-evaluation/free-evaluation.component';
import { FormsModule } from '@angular/forms';
import {
  NgbModule,
  NgbAccordion,
  NgbAccordionConfig
} from '@ng-bootstrap/ng-bootstrap';
import { FeesAndTermsOfPaymentComponent } from './pages/public/fees-and-terms-of-payment/fees-and-terms-of-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PublicComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    WhatWeCanBringYouComponent,
    WorkingMethodComponent,
    InitialRequestComponent,
    ChooseUsComponent,
    FreeEvaluationComponent,
    FeesAndTermsOfPaymentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NgbAccordion,
  ],
  providers: [
    AuthService,
    AuthGuard,
    NgbAccordionConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
