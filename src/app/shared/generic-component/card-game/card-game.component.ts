import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../../services/games.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {
  @Input() data: IGame;
  public notes: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit() {}
}
