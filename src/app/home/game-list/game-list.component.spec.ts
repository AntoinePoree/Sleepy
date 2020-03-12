import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';
import { CardGameComponent } from '../../shared/generic-component/card-game/card-game.component';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameListComponent, CardGameComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
