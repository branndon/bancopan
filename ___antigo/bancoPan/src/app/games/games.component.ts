import { Component, OnInit } from '@angular/core';

import { GamesService } from '../app.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['../app.component.css']
})
export class GamesComponent implements OnInit {

  games = [];
  gamesService: GamesService;
  url:string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=724507f00e6cb4113749c98dbdaf29c8&hash=ea22af419959a1c5d4e3da8261d2f592"; // URL do get

  constructor(){
  	this.gamesService = new GamesService;
  }

  ngOnInit(){
    this.games = this.gamesService.getGames();
  	// this.games = this.gamesService.getDataObservable(); // Chamando o get
  }

}
