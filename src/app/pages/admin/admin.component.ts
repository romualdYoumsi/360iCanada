import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  gotoHomePage() {
    this.router.navigate(['explorer/home']);
    this.authService.setloggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  }

  ngOnInit() {
  }
  gotoLoginPage() {}
}
