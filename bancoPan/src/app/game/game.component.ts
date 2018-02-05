import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['../app.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  gameSingle = [];
  trataGames = [];

  gameArray = [];

  // Database
  readonly ROOT_URL = "https://api.twitch.tv/kraken/games/top?client_id=4t0ks23u023wq8xqid4b9lx6bkbn79&limit=100";
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.http.get(this.ROOT_URL).subscribe(res => {
        if(res.hasOwnProperty('top')) this.trataGames = res['top'];
        this.gameArray = this.trataGames;
        let games = this.gameArray;
        let game = games.filter( item => item.game._id == this.id )
        if(this.id == undefined) return games;
        this.gameSingle = game;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
