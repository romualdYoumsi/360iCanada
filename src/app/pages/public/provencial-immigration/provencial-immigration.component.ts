import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ICanadaService } from '../../../services/icanada.service';
import { RyFunctionsService } from '../../../services/ry-functions.service';

@Component({
  selector: 'app-provencial-immigration',
  templateUrl: './provencial-immigration.component.html',
  styleUrls: ['./provencial-immigration.component.css']
})
export class ProvencialImmigrationComponent implements OnInit {
  TAG = 'ProvencialImmigrationComponent';
  CURRENT_PAGE: any;
  htmlContent: any;
  pageSelected = 'provencial-immigration';
  currentLang: any;

  constructor(
    private translate: TranslateService,
    private iservice: ICanadaService,
    private ryfunctions: RyFunctionsService) { }

    ngOnInit() {
      this.currentLang = this.translate.currentLang;
      this.findInfosPage();
      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        // console.log(this.TAG, 'ngOnInit:onLangChange', event);
        this.currentLang = event.lang;

        // Actualisation du contenu de la page
        this.findInfosPage();
      });
    }

    findInfosPage() {
      this.iservice.findInfosPages_public(this.pageSelected, this.currentLang).then(
        pageString => {
          const pageJSON = pageString.json();
          // const userJSON = userString;
          // console.log(this.TAG, 'findInfosPage:SUCCESS', pageString);
          if (pageJSON.code === 200 && pageJSON.body.length > 0) {
            // console.log(this.TAG, 'findInfosPage:BODY', pageJSON);
            // this.AVAILABLE_PAGES = userJSON.body;
            this.CURRENT_PAGE = pageJSON.body[0];
            this.htmlContent = this.ryfunctions.decodeHTMLEntities(this.CURRENT_PAGE.content);
            document.getElementById('htmlContent').innerHTML = this.htmlContent;
            // console.log(this.TAG, 'findInfosPage:CURRENT_PAGE', this.CURRENT_PAGE);
          } else {
            document.getElementById('htmlContent').innerHTML = 'empty page';
            // console.log(this.TAG, 'findAvailablePages:ERROR', pageJSON);
          }
        },
        error => {
          document.getElementById('htmlContent').innerHTML = 'empty page';
          // console.log(this.TAG, 'findAvailablePages:ERROR', error);
        }
        );
    }

}
