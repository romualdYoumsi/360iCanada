import { Component, OnInit, QueryList, ViewChildren, Directive, PipeTransform, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { RyFunctionsService } from '../../../services/ry-functions.service';
import { ICanadaService } from '../../../services/icanada.service';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css'],
  providers: [DecimalPipe]
})
export class AnnonceComponent implements OnInit {
  TAG = 'AnnonceComponent';
  countries: Country[];
  page = 1;
  pageSize = 10;
  collectionSize = COUNTRIES.length;
  modalRef: BsModalRef;
  LANGS: any;
  annonce = {
    title: '',
    content: '',
    lang: '',
    is_logging: false,
    error: {
      show: false,
      message: ''
    }
  };
  
  editorConfig = {
    'editable': true,
    'spellcheck': true,
    'height': 'auto',
    'minHeight': '400',
    'width': 'auto',
    'minWidth': '0',
    'translate': 'no',
    'enableToolbar': true,
    'showToolbar': true,
    'placeholder': 'Enter content here...',
    'toolbar': [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['fontName', 'fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink']
    ]
  };

  get find_countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private iservice: ICanadaService,
    private ryFunctions: RyFunctionsService) {
    this.countries = COUNTRIES;
    this.LANGS = this.ryFunctions.get_langs();
  }
  ngOnInit() {
  }

  makeFilter(input) {

    console.log(input, input.value);
    this.countries.filter((book: Country) => book.name === input);
  }

  openModalAddAnnonce(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' }));
  }
  hideModal() {
    this.modalRef.hide();
  }

  createAnnonce() {
    console.log(this.TAG, this.annonce);
    this.annonce.is_logging = true;

    this.iservice.createAnnonce(this.annonce.title, this.annonce.content, this.annonce.lang).then(
      pageString => {
        this.annonce.is_logging = false;
        // const userJSON = userString;
        // console.log(this.TAG, 'updatePage:SUCCESS', pageString);
        const pageJSON = pageString.json();
        if (pageJSON.code === 200 && pageJSON.body.length > 0) {
          console.log(this.TAG, 'findInfosPage:BODY', pageJSON);
          // this.AVAILABLE_PAGES = userJSON.body;
          /*this.CURRENT_PAGE = pageJSON.body[0];
          this.SHOW_TABSET = true;
          this.editerHtmlContent = this.ryfunctions.decodeHTMLEntities(this.CURRENT_PAGE.content);
          document.getElementById('prevEditerHtmlContent').innerHTML = this.editerHtmlContent;
          console.log(this.TAG, 'findInfosPage:CURRENT_PAGE', this.CURRENT_PAGE); */
        } else {
          console.log(this.TAG, 'findAvailablePages:ERROR', pageJSON);
        }
      },
      error => {
        this.annonce.is_logging = false;
        console.log(this.TAG, 'findAvailablePages:ERROR', error);
      }
      );
  }
}
