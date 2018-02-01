import { Component,OnInit } from '@angular/core';

import { GamesService } from './app.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // pipes: [ FilterPipe ]
})
export class AppComponent implements OnInit {
  // title = 'app';

  games = [];
  gamesService: GamesService;

  constructor(){
  	this.gamesService = new GamesService;
  }

  ngOnInit(){
  	this.games = this.gamesService.getGames();
  }
}
