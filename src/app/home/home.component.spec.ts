import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { GameListComponent } from './game-list/game-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { SomeInfoComponent } from './some-info/some-info.component';
import { CompleteInfoComponent } from './complete-info/complete-info.component';
import { PaysageListComponent } from './paysage-list/paysage-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [HomeComponent, GameListComponent, SomeInfoComponent, CompleteInfoComponent, PaysageListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
