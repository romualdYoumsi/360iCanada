import { Component, OnInit } from '@angular/core';
import { ICanadaService } from '../../../services/icanada.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  TAG = 'CreatePageComponent';
  LANGS = [{code: 'fr', label: 'Français'}, {code: 'en', label: 'English'}];
  AVAILABLE_PAGES = [];
  SHOW_SAVE_LOADING = false;
  alertResponse = {
    type: '',
    dismissible: true,
    timeout: 0,
    msg: ''
  };

  constructor(
    private translate: TranslateService,
    private iservice: ICanadaService) { }
    ngOnInit() {
      this.findAllPages();
      this.alertResponse = {
        type: 'danger',
        dismissible: true,
        msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
        timeout: 5000
      };
    }
    
    findAllPages() {
      this.iservice.findAvailablePages().then(
        userString => {
          const userJSON = userString.json();
          // console.log(this.TAG, 'findAvailablePages:SUCCESS', userJSON);
          if (userJSON.code === 200) {
            // console.log(this.TAG, 'findAvailablePages:BODY', userJSON.body);
            this.AVAILABLE_PAGES = userJSON.body;
          } else {
            console.log(this.TAG, 'findAvailablePages:ERROR', userJSON);
          }
        },
        error => {
          console.log(this.TAG, 'findAvailablePages:ERROR', error);
        }
        );
      }
      
      createPage(pageSelected: any, langSelected: any) {
        console.log(pageSelected, langSelected);
        if (pageSelected == 0 || langSelected == 0) {
          return;
        }
        console.log(this.TAG, 'createPage', pageSelected, langSelected);
        this.SHOW_SAVE_LOADING = true;
        
        this.iservice.createPage(pageSelected, langSelected).then(
          pageString => {
            // const userJSON = userString;
            console.log(this.TAG, 'updatePage:SUCCESS', pageString);
            const pageJSON = pageString.json();
            if (pageJSON.code === 200 && pageJSON.body.length > 0) {
              console.log(this.TAG, 'findInfosPage:BODY', pageJSON);
              // this.AVAILABLE_PAGES = userJSON.body;
              this.SHOW_SAVE_LOADING = false;

              this.alertResponse = {
                type: 'success',
                msg: 'Page enregistrée avec succès.',
                timeout: 5000,
                dismissible: true
              };
            } else {
              this.SHOW_SAVE_LOADING = false;
              console.log(this.TAG, 'findAvailablePages:ERROR', pageJSON);
              this.alertResponse = {
                type: 'danger',
                msg: 'Echec d\'enregistrement de la page.',
                timeout: 5000,
                dismissible: true
              };
            }
          },
          error => {
            this.SHOW_SAVE_LOADING = false;
            console.log(this.TAG, 'createPage:ERROR', error);
            this.alertResponse = {
              type: 'danger',
              dismissible: true,
              msg: 'Echec d\'enregistrement de la page.',
              timeout: 5000
            };
          }
          );
        }

}
