import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  TAG = 'PublicComponent';
  LANGS = [{code: 'en', label: 'English'}, {code: 'fr', label: 'Français'}];

  constructor(private router: Router, private authService: AuthService, private translate: TranslateService) { }

  ngOnInit() {
  }

  setLang(lang: string) {
    // console.log(this.TAG, 'setLang', lang);
    this.translate.use(lang);
  }
  /*
  langChange(event: any) {
    // console.log(this.TAG, event, event.target.value);

    this.setLang(event.target.value);
  } */
  gotoLoginPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['login']);
    this.authService.setloggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  gotoWhatWeCanBringYouPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['explorer/what-we-can-bring-you']);
  }

  gotoWorkingPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['explorer/working-method']);
  }

  gotoInitialRequestPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['explorer/initial-request']);
  }

  gotoChooseUsPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['explorer/choose-us']);
  }

  gotoFreeEvaluationPage() {
    // console.log('gotoLoginPage');
    this.router.navigate(['explorer/free-evaluation']);
  }

  gotoFeesAndTermsPayment() {
    this.router.navigate(['explorer/fees-and-terms-of-payment']);
  }

  gotoAssistanceServiceOnArrival() {
    this.router.navigate(['explorer/assistance-service-on-arrival']);
  }

  gotoProvencialImmigration() {
    this.router.navigate(['explorer/provencial-immigration']);
  }

  gotoCanadianExperienceCLass() {
    this.router.navigate(['explorer/canadian-experience-class']);
  }

  gotoEEImmigrationDraws() {
    this.router.navigate(['explorer/express-entry-immigration-draws']);
  }

  gotoEESkilledImmigration() {
    this.router.navigate(['explorer/express-entry-skilled-immigration']);
  }

  gotoInvitationToApplyForPerResi() {
    this.router.navigate(['explorer/invitation-to-apply-for-permanent-residence']);
  }

  gotoImmigrationLevelsPlan() {
    this.router.navigate(['explorer/immigration-levels-plan']);
  }

  gotoBusinessImmigration() {
    this.router.navigate(['explorer/business-immigration']);
  }

  gotoBusiness() {
    this.router.navigate(['explorer/business']);
  }

  gotoStudy() {
    this.router.navigate(['explorer/study']);
  }

  gotoWork() {
    this.router.navigate(['explorer/work']);
  }

  gotoForum() {
    this.router.navigate(['explorer/forum']);
  }

  gotoContact() {
    this.router.navigate(['explorer/contact']);
  }
}
