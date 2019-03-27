import { Inject, Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ICanadaService } from '../../services/icanada.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { RyFunctionsService } from '../../services/ry-functions.service';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit, AfterViewInit {
  TAG = 'PublicComponent';
  LANGS: any;
  modalRef: BsModalRef;
  internaute = {
    username: '',
    password: '',
    is_logging: false,
    error: {
      show: false,
      message: ''
    }};
    
    
    constructor(
      @Inject(LOCAL_STORAGE) private storage: WebStorageService,
      private router: Router,
      private authService: AuthService,
      private translate: TranslateService,
      private modalService: BsModalService,
      private iservice: ICanadaService,
      private ryFunctions: RyFunctionsService) { }
      
      ngOnInit() {
        this.internaute.is_logging = false;
        this.LANGS = this.ryFunctions.get_langs();
      }
      
      ngAfterViewInit() {
      }
      
      setLang(lang: string) {
        // console.log(this.TAG, 'setLang', lang);
        this.translate.use(lang);
        // window.location.reload();
      }
      openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
      attemtLogin() {
        this.internaute.is_logging = true;
        console.log(this.internaute.username, this.internaute.password);
        this.iservice.login(this.internaute.username, this.internaute.password).then(
          userString => {
            this.internaute.is_logging = false;
            console.log(this.TAG, 'attemtLogin:SUCCESS string', userString);
            const userJSON = userString.json();
            console.log(this.TAG, 'attemtLogin:SUCCESS json', userJSON);
            if (userJSON.code === 200) {
              // mises a jour des parametres de session
              this.storage.set('ICANADA_USER', userJSON.body);
              this.storage.set('ICANADA_IS_LOGGEDIN', 1);
              const varuser = this.storage.get('ICANADA_USER');
              console.log('recieved= value: nom=' + varuser.nom);
              this.modalRef.hide();
              this.router.navigate(['admin']);
              window.location.href = '/admin/dashboard';
            } else {
              this.translate.get('INVALID_CREDENTIALS').subscribe(
                str => {
                  console.log(this.TAG, 'attemtLogin:ERROR', str);
                  this.internaute.error.show = true;
                  this.internaute.error.message = str;
                }
                );
              }
            },
            error => {
              console.log(this.TAG, 'attemtLogin:ERROR', error);
              this.internaute.is_logging = false;
            }
            );
          }
          
          gotoLoginPage() {
            // console.log('gotoLoginPage');
            this.router.navigate(['login']);
            this.authService.setloggedIn(true);
            localStorage.setItem('icanada_is_loggedin', 'true');
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
        