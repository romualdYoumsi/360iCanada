import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { TranslateService } from '@ngx-translate/core';
import { RyFunctionsService } from '../../services/ry-functions.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  TAG = 'AdminComponent';
  LANGS: any;
  modalRef: BsModalRef;
  conUser: any;
  
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private modalService: BsModalService,
    private ryFunctions: RyFunctionsService) {}
    
    gotoHomePage() {
      this.router.navigate(['explorer/home']);
      this.authService.setloggedIn(false);
      localStorage.setItem('isLoggedIn', 'false');
    }
    
    ngOnInit() {
      this.initUserValue();
      this.LANGS = this.ryFunctions.get_langs();
    }
    
    initUserValue() {
      this.conUser = this.storage.get('ICANADA_USER');
      // console.log(this.TAG, 'initUserValue', this.conUser);
    }
    
    openSignOutModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }
    
    confirmSignOut(): void {
      console.log(this.TAG, 'confirmSignOut');
      // mises a jour des parametres de session
      this.storage.set('ICANADA_USER', null);
      this.storage.set('ICANADA_IS_LOGGEDIN', 0);
      const varuser = this.storage.get('ICANADA_USER');
      console.log('recieved= value: nom=' + varuser);
      this.modalRef.hide();
      this.router.navigate(['explorer/home']);
      window.location.reload();
    }
    
    declineSingOut(): void {
      console.log(this.TAG, 'declineSingOut');
      this.modalRef.hide();
    }
    
    setLang(lang: string) {
      // console.log(this.TAG, 'setLang', lang);
      this.translate.use(lang);
    }
    
    gotoDashboardPage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/dashboard']);
    }
    
    gotoCreatePagePage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/create-page']);
    }
    
    gotoEditPagePage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/edit-page']);
    }
    
    gotoListPagePage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/list-page']);
    }
    
    gotoForumPage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/admin-forum']);
    }
    
    gotoApplicationsPage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/applications']);
    }
    
    gotoFreeEvaluationPage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/admin-free-evaluation']);
    }
    
    gotoAnnoncePage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/annonce']);
    }
    
    gotoActualitePage() {
      // console.log('gotoLoginPage');
      this.router.navigate(['admin/actualite']);
    }
  }
  