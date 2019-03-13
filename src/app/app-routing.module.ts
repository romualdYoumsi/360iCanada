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
import { AssistanceServiceOnArrivalComponent } from './pages/public/assistance-service-on-arrival/assistance-service-on-arrival.component';
import { ProvencialImmigrationComponent } from './pages/public/provencial-immigration/provencial-immigration.component';
import { CanadianExperienceClassComponent } from './pages/public/canadian-experience-class/canadian-experience-class.component';
// tslint:disable-next-line:max-line-length
import { ExpressEntryImmigrationDrawsComponent } from './pages/public/express-entry-immigration-draws/express-entry-immigration-draws.component';
// tslint:disable-next-line:max-line-length
import { ExpressEntrySkilledImmigrationComponent } from './pages/public/express-entry-skilled-immigration/express-entry-skilled-immigration.component';
// tslint:disable-next-line:max-line-length
import { InvitationToApplyForPermanentResidenceComponent } from './pages/public/invitation-to-apply-for-permanent-residence/invitation-to-apply-for-permanent-residence.component';
import { ImmigrationLevelsPlanComponent } from './pages/public/immigration-levels-plan/immigration-levels-plan.component';
import { BusinessImmigrationComponent } from './pages/public/business-immigration/business-immigration.component';
import { BusinessComponent } from './pages/public/business/business.component';
import { StudyComponent } from './pages/public/study/study.component';
import { WorkComponent } from './pages/public/work/work.component';
import { ForumComponent } from './pages/public/forum/forum.component';
import { ContactComponent } from './pages/public/contact/contact.component';

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
      { path: 'assistance-service-on-arrival', component: AssistanceServiceOnArrivalComponent },
      { path: 'provencial-immigration', component: ProvencialImmigrationComponent },
      { path: 'canadian-experience-class', component: CanadianExperienceClassComponent },
      { path: 'express-entry-immigration-draws', component: ExpressEntryImmigrationDrawsComponent },
      { path: 'express-entry-skilled-immigration', component: ExpressEntrySkilledImmigrationComponent},
      { path: 'invitation-to-apply-for-permanent-residence', component: InvitationToApplyForPermanentResidenceComponent},
      { path: 'immigration-levels-plan', component: ImmigrationLevelsPlanComponent},
      { path: 'business-immigration', component: BusinessImmigrationComponent},
      { path: 'business', component: BusinessComponent},
      { path: 'study', component: StudyComponent},
      { path: 'work', component: WorkComponent},
      { path: 'forum', component: ForumComponent},
      { path: 'contact', component: ContactComponent},
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'explorer' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
