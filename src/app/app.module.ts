import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
import { FormsModule, NgControl } from '@angular/forms';
import {
  NgbModule,
  NgbAccordion,
  NgbAccordionConfig,
  NgbPaginationConfig
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
import { ContactComponent } from './pages/public/contact/contact.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { NgxEditorModule } from 'ngx-editor';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ICanadaService } from './services/icanada.service';

import { StorageServiceModule} from 'angular-webstorage-service';
import { EditPageComponent } from './pages/admin/edit-page/edit-page.component';
import { ListPageComponent } from './pages/admin/list-page/list-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CreatePageComponent } from './pages/admin/create-page/create-page.component';
import { ActualiteComponent } from './pages/admin/actualite/actualite.component';
import { AnnonceComponent } from './pages/admin/annonce/annonce.component';
import { ApplicationsComponent } from './pages/admin/applications/applications.component';
import { AdminFreeEvaluationComponent } from './pages/admin/admin-free-evaluation/admin-free-evaluation.component';
import { AdminForumComponent } from './pages/admin/admin-forum/admin-forum.component';
import { RyFunctionsService } from './services/ry-functions.service';
import { ForumComponent } from './pages/public/forum/forum.component';
import { FreeEvaluationComponent } from './pages/public/free-evaluation/free-evaluation.component';
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
    ForumComponent,
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
    ContactComponent,
    DashboardComponent,
    EditPageComponent,
    ListPageComponent,
    CreatePageComponent,
    ActualiteComponent,
    AnnonceComponent,
    AdminFreeEvaluationComponent,
    ApplicationsComponent,
    AdminForumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    NgxEditorModule,
    StorageServiceModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    NgbAccordion,
  ],
  providers: [
    AuthService,
    ICanadaService,
    RyFunctionsService,
    AuthGuard,
    NgbAccordionConfig,
    NgbPaginationConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
