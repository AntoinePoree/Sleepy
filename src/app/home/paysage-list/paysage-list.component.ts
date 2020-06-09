import { Component, OnInit } from '@angular/core';
import { GamesService, IGame } from '../../shared/services/games.service';

@Component({
  selector: 'app-paysage-list',
  templateUrl: './paysage-list.component.html',
  styleUrls: ['./paysage-list.component.scss']
})
export class PaysageListComponent implements OnInit {
  public paysages: Array<IGame> = [
    {
      id: 1,
      name: 'Les montagnes noires',
      asset: 'assets/games/montagnenoire.jpg',
      description: 'montagnenoire',
      rate: 5,
      releaseDate: ''
    },
    {
      id: 2,
      name: 'Vacances à Hawaï',
      asset: 'assets/games/vacanceshiver.jpg',
      description: 'vacanceshiver',
      rate: 5,
      releaseDate: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
