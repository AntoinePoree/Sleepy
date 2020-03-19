import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GameListComponent } from './game-list/game-list.component';
import { SomeInfoComponent } from './some-info/some-info.component';
import { CompleteInfoComponent } from './complete-info/complete-info.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, Angulartics2Module, HomeRoutingModule],
  declarations: [HomeComponent, GameListComponent, SomeInfoComponent, CompleteInfoComponent]
})
export class HomeModule {}
