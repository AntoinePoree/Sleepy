import { Injectable } from '@angular/core';

export interface IGame {
  id: number;
  name: string;
  description: string;
  asset: string;
  rate: number;
  releaseDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: Array<IGame> = [
    {
      id: 1,
      name: 'Hollow knight',
      asset: 'assets/games/hollow.jpg',
      description: 'HK',
      rate: 5,
      releaseDate: ''
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
      asset: 'assets/games/horizon-Zero-dawn.jpg',
      description: 'HZD',
      rate: 10,
      releaseDate: ''
    },
    {
      id: 3,
      name: 'Monster Hunter',
      asset: 'assets/games/monster-hunter.jpg',
      description: 'MH',
      rate: 10,
      releaseDate: ''
    }
  ];

  constructor() {}

  public get(id: number): IGame {
    const target = this.games.find(g => g.id === id);
    return target;
  }

  public getAll(): Array<IGame> {
    return this.games;
  }
}
