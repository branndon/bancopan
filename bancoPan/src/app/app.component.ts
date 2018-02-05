import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  // posts: any;

  constructor(){
  	// this.gamesService = new GamesService;
  }

  // getPosts(){
  //   this.posts = this.http.get(this.ROOT_URL + '/posts');
  //   console.log(this.posts);
  // }

  ngOnInit(){
  	// this.games = this.gamesService.getGames();
  }
}
