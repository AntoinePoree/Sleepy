import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';

interface ILanguage {
  id: string;
  asset: string;
  display: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  public arrLanguages: Array<ILanguage> = [
    {
      id: 'fr-FR',
      asset: 'assets/language/drapeau-france.png',
      display: 'Français'
    },
    {
      id: 'en-US',
      asset: 'assets/language/drapeau-anglais.png',
      display: 'Anglais'
    }
  ];
  constructor(private i18nService: I18nService) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
