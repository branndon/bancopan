import { GamesService2 } from './games/games.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { ResponsiveState } from 'responsive-directives-angular2';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { routing } from './app.routing';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GameComponent,
    GamesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing,
    InfiniteScrollModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [GamesService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
