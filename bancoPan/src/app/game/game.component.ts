import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { GamesService } from '../app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['../app.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  gameSingle = [];
  gamesService: GamesService;
  
  constructor(private route: ActivatedRoute) {
  	this.gamesService = new GamesService;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.gameSingle = this.gamesService.getGame(this.id);
       console.log(this.gameSingle);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
