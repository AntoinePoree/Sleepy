import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { GamesService } from './services/games.service';
import { CardGameComponent } from './generic-component/card-game/card-game.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  providers: [GamesService],
  declarations: [LoaderComponent, CardGameComponent],
  exports: [LoaderComponent, CardGameComponent]
})
export class SharedModule {}
