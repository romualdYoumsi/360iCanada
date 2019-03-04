import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

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
}
