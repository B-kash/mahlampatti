import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translations';
// import {TranslatorService} from "../../services/translation.service";
// import {TranslationModel} from "../../models/common-models/Translation.model";

@Injectable()
export class TranslateService {
	// default english
	private _currentLang: string = "ne";
private _translations = {};
	languageChanged: EventEmitter <string> = new EventEmitter();
	public get currentLang() {
		// console.log(this._currentLang);
	  return this._currentLang;
	}

  // inject our translations
	constructor(
	  // private  translatorService:TranslatorService
    ) {
		this._translations = TRANSLATIONS;
		// this._translations = translatorService.translations;
	}

	public use(lang: string): void {
		// set current language
		this._currentLang = lang;
		// this._translations = this.translatorService.translations;

	}

	private translate(key: string): string {
        let translation = key;
        key = key.toLocaleLowerCase();
        if(this._translations[key] && this._translations[key][this.currentLang]){
            let obj = this._translations[key];
            return obj[this.currentLang];
            // return this._translations[key][this.currentLang];
        }
        return translation;
	}

	public instant(key: string) {
		// public perform translation
		return this.translate(key);
	}
}
