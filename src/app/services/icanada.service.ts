import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable()
export class ICanadaService {
  TAG = 'ICanadaService';
  BASE_URL = 'http://localhost/api.360icanada';
  // BASE_URL = 'http://api.360icanada.org';
  
  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private http: Http) { }

  login(username: string, password: string): Promise<any> {
    return this.http.get(this.BASE_URL + '/login.php?username=' + username + '&&password=' + password).toPromise();
  }

  findAvailablePages(): Promise<any> {
    const varuser = this.storage.get('ICANADA_USER');
    // console.log(varuser);
    return this.http.get(this.BASE_URL + '/find_pages.php?token=' + varuser.token).toPromise();
  }

  // recupere les information d'une page
  findInfosPages(code_page: string, lang: string): Promise<any> {
    const varuser = this.storage.get('ICANADA_USER');
    // console.log(varuser);
    const params = 'codep=' + code_page + '&&lang=' + lang;
    return this.http.get(this.BASE_URL + '/find_infos_pages.php?token=' + varuser.token + '&&' + params).toPromise();
  }

  // recupere les information d'une page
  findInfosPages_public(code_page: string, lang: string): Promise<any> {
    // console.log(varuser);
    const params = 'codep=' + code_page + '&&lang=' + lang;
    return this.http.get(this.BASE_URL + '/get_infos_page.php?' + params).toPromise();
  }

  // recupere les information d'une page
  updateInfosPage(para_id: number, content: string): Promise<any> {
    const varuser = this.storage.get('ICANADA_USER');
    // console.log(varuser);
    const body = {
      paragraphe_id: para_id,
      content: content
    };
    return this.http.post(this.BASE_URL + '/update_infos_page.php?token=' + varuser.token, JSON.stringify(body)).toPromise();
  }

  // recupere les information d'une page
  createPage(code_page: string, lang: string): Promise<any> {
    const varuser = this.storage.get('ICANADA_USER');
    // console.log(varuser);
    const body = {
      code: code_page,
      lang: lang
    };
    return this.http.post(this.BASE_URL + '/create_page.php?token=' + varuser.token, JSON.stringify(body)).toPromise();
  }

  // recupere les information d'une page
  createAnnonce(title: string, content: string, lang: string): Promise<any> {
    const varuser = this.storage.get('ICANADA_USER');
    // console.log(varuser);
    const body = {
      title: title,
      content: content,
      lang: lang
    };
    return this.http.post(this.BASE_URL + '/create_annonce.php?token=' + varuser.token, JSON.stringify(body)).toPromise();
  }
}

