import { Component, OnInit } from '@angular/core';
import { GamesService, IGame } from '../../shared/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  public games: Array<IGame> = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getAll();
  }
}
