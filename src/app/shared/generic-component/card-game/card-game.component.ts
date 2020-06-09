import { Component, Input, OnChanges } from '@angular/core';
import { IGame } from '../../services/games.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnChanges {
  @Input() data: IGame;
  @Input() flip: boolean;

  constructor() {}

  ngOnChanges() {
    if (this.flip) {
      const b = document.getElementsByClassName('flip-horizontal')[1];
      if (document.getElementsByClassName('flip-horizontal')[3]) {
        const c = document.getElementsByClassName('flip-horizontal')[3];
        c.setAttribute('dir', 'rtl');
      }
      if (b) {
        b.setAttribute('dir', 'rtl');
      }
    }
  }
}
