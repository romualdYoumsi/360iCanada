import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICanadaService } from '../../../services/icanada.service';
import { RyFunctionsService } from '../../../services/ry-functions.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  TAG = 'EditPageComponent';
  LANGS: any;
  AVAILABLE_PAGES = [];
  CURRENT_PAGE: any;
  SHOW_TABSET = false;
  SHOW_LOADING = false;
  SHOW_SAVE_LOADING = false;
  editerHtmlContent = '';
  
  editorConfig = {
    'editable': true,
    'spellcheck': true,
    'height': 'auto',
    'minHeight': '400',
    'width': 'auto',
    'minWidth': '0',
    'translate': 'yes',
    'enableToolbar': true,
    'showToolbar': true,
    'placeholder': 'Enter text here...',
    'imageEndPoint': 'http://localhost/api.360icanada',
    'toolbar': [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['fontName', 'fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink', 'image', 'video']
    ]
  };
  
  constructor(
    private translate: TranslateService,
    private iservice: ICanadaService,
    private ryfunctions: RyFunctionsService) { }
    
    ngOnInit() {
      this.findAllPages();
      this.SHOW_SAVE_LOADING = false;
      this.LANGS = this.ryfunctions.get_langs();
    }
    
    findAllPages() {
      this.iservice.findAvailablePages().then(
        userString => {
          const userJSON = userString.json();
          // const userJSON = userString;
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
      
    findInfosPage(pageSelected: any, langSelected: any) {
        console.log(pageSelected, langSelected);
        if (pageSelected == 0 || langSelected == 0) {
          return;
        }
        this.SHOW_LOADING = true;
        this.SHOW_TABSET = false;
        this.iservice.findInfosPages(pageSelected, langSelected).then(
          pageString => {
            const pageJSON = pageString.json();
            // const userJSON = userString;
            // console.log(this.TAG, 'findInfosPage:SUCCESS', pageString);
            if (pageJSON.code === 200 && pageJSON.body.length > 0) {
              console.log(this.TAG, 'findInfosPage:BODY', pageJSON);
              // this.AVAILABLE_PAGES = userJSON.body;
              this.CURRENT_PAGE = pageJSON.body[0];
              this.SHOW_LOADING = false;
              this.SHOW_TABSET = true;
              this.editerHtmlContent = this.ryfunctions.decodeHTMLEntities(this.CURRENT_PAGE.content);
              document.getElementById('prevEditerHtmlContent').innerHTML = this.editerHtmlContent;
              console.log(this.TAG, 'findInfosPage:CURRENT_PAGE', this.CURRENT_PAGE);
            } else {
              this.SHOW_LOADING = false;
              console.log(this.TAG, 'findAvailablePages:ERROR', pageJSON);
            }
          },
          error => {
            this.SHOW_LOADING = false;
            console.log(this.TAG, 'findAvailablePages:ERROR', error);
          }
          );
    }
        
    updatePage() {
          console.log(this.TAG, 'updatePage', this.editerHtmlContent);
          this.SHOW_SAVE_LOADING = true;
          
          this.iservice.updateInfosPage(this.CURRENT_PAGE.paragraphe_id, this.editerHtmlContent).then(
            pageString => {
              this.SHOW_SAVE_LOADING = false;
              // const userJSON = userString;
              // console.log(this.TAG, 'updatePage:SUCCESS', pageString);
              const pageJSON = pageString.json();
              if (pageJSON.code === 200 && pageJSON.body.length > 0) {
                console.log(this.TAG, 'findInfosPage:BODY', pageJSON);
                // this.AVAILABLE_PAGES = userJSON.body;
                this.CURRENT_PAGE = pageJSON.body[0];
                this.SHOW_TABSET = true;
                this.editerHtmlContent = this.ryfunctions.decodeHTMLEntities(this.CURRENT_PAGE.content);
                document.getElementById('prevEditerHtmlContent').innerHTML = this.editerHtmlContent;
                console.log(this.TAG, 'findInfosPage:CURRENT_PAGE', this.CURRENT_PAGE);
              } else {
                console.log(this.TAG, 'findAvailablePages:ERROR', pageJSON);
              }
            },
            error => {
              this.SHOW_SAVE_LOADING = false;
              console.log(this.TAG, 'findAvailablePages:ERROR', error);
            }
            );
    }
}
