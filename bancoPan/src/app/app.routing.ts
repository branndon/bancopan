import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';

const APP_ROUTES: Routes = [
	{ path: '', component: GamesComponent },
    { path: 'game/:id', component: GameComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);