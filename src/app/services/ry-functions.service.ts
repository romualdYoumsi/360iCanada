import { Injectable } from '@angular/core';

@Injectable()
export class RyFunctionsService {
  TAG = 'RyFunctionsService';
  LANGS = [{code: 'fr', label: 'Français'}, {code: 'en', label: 'English'}];

  constructor() { }

  decodeHTMLEntities(text) {
    const entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
    ];
    
    for (let i = 0, max = entities.length; i < max; ++i) {
      text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
    }
    
    return text;
  }

  get_langs() {
    return this.LANGS;
  }
}
