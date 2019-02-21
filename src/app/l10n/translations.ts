import { InjectionToken } from '@angular/core';

// import translations
import { Translations } from './language/translation';

export const TRANSLATIONS = new InjectionToken('translations');

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: Translations },
];