import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysageListComponent } from './paysage-list.component';
import { CardGameComponent } from '../../shared/generic-component/card-game/card-game.component';

describe('PaysageListComponent', () => {
  let component: PaysageListComponent;
  let fixture: ComponentFixture<PaysageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaysageListComponent, CardGameComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
