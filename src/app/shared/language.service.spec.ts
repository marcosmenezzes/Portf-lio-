import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  it('toggles every translated text and the document language', () => {
    const service = TestBed.inject(LanguageService);

    expect(service.text('Projetos')).toBe('Projetos');
    service.toggle();
    expect(service.text('Projetos')).toBe('Projects');
    expect(document.documentElement.lang).toBe('en');
  });
});
