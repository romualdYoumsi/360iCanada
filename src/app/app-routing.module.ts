import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './auth.guard';

import { PublicComponent } from './pages/public/public.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/public/home/home.component';
import { WhatWeCanBringYouComponent } from './pages/public/what-we-can-bring-you/what-we-can-bring-you.component';
import { WorkingMethodComponent } from './pages/public/working-method/working-method.component';
import { InitialRequestComponent } from './pages/public/initial-request/initial-request.component';
import { ChooseUsComponent } from './pages/public/choose-us/choose-us.component';
import { FreeEvaluationComponent } from './pages/public/free-evaluation/free-evaluation.component';
import { FeesAndTermsOfPaymentComponent } from './pages/public/fees-and-terms-of-payment/fees-and-terms-of-payment.component';

export const routes: Routes = [
  {
    path: 'explorer',
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'what-we-can-bring-you', component: WhatWeCanBringYouComponent },
      { path: 'working-method', component: WorkingMethodComponent },
      { path: 'initial-request', component: InitialRequestComponent },
      { path: 'choose-us', component: ChooseUsComponent },
      { path: 'free-evaluation', component: FreeEvaluationComponent },
      { path: 'fees-and-terms-of-payment', component: FeesAndTermsOfPaymentComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'explorer' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
