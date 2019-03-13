import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

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
// import { TranslateService } from './translate.service';
// import { TranslatePipe } from './translate.pipe';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// export function setupTranslateFactory(
//   service: TranslateService): Function {
//   return () => service.use('en');
// }


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
    FeesAndTermsOfPaymentComponent,
    AssistanceServiceOnArrivalComponent,
    ProvencialImmigrationComponent,
    CanadianExperienceClassComponent,
    ExpressEntryImmigrationDrawsComponent,
    ExpressEntrySkilledImmigrationComponent,
    InvitationToApplyForPermanentResidenceComponent,
    ImmigrationLevelsPlanComponent,
    BusinessImmigrationComponent,
    BusinessComponent,
    StudyComponent,
    WorkComponent,
    ForumComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes)
  ],
  exports: [
    NgbAccordion,
  ],
  providers: [
    AuthService,
    AuthGuard,
    NgbAccordionConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
