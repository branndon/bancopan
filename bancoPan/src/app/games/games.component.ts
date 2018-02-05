import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

import { Ng2DeviceService } from 'ng2-device-detector';

// import { GlobalVariable } from '../global';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['../app.component.css']
})
export class GamesComponent implements OnInit {
 
  games = [];
  buscar:any;
  originalGames = [];
  fullGames = [];
  trataGames = [];
  top;
  i:number;
  count:number;
  itensValue:number;
  deviceInfo:String = "";

  readonly ROOT_URL = "https://api.twitch.tv/kraken/games/top?client_id=4t0ks23u023wq8xqid4b9lx6bkbn79&limit=100"; // URL do get
  posts: any;

  constructor(private http: HttpClient, private deviceService: Ng2DeviceService){}

  orderBy(field){

    if (field == "viewers"){
      this.games.sort(function(obj1, obj2) {
        return obj1.viewers-obj2.viewers;
      });
    } else {
      this.games.sort(function(obj1, obj2) {
        return obj2.popularity-obj1.popularity;
      });
    }
  }

  onScroll(){
    if(this.games.length < this.fullGames.length){  
     let len = this.games.length;

      for(this.i = len; this.i < len+this.itensValue; this.i++){
        this.games.push(this.fullGames[this.i]);
      }
    }
  }

  ngOnInit(){

    // Verifica se é mobile | tablet | desketop
    if (/iP(hone|od)|android.+mobile|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
      this.itensValue = 25;
    } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(navigator.userAgent)) {
      this.itensValue = 50;
    } else {
      this.itensValue = 100;
    }

    // Faz a requisição dos dados
    this.http.get(this.ROOT_URL).subscribe(res => {

      if(res.hasOwnProperty('top')) this.trataGames = res['top'];

      // loop para adicionar o campo de "popularity" na raiz de cada array e fazer o filtro posteriormente
      for(this.count=0; this.count < this.trataGames.length; this.count++){
        this.trataGames[this.count].popularity = this.trataGames[this.count].game.popularity;
      }

      this.fullGames = this.trataGames; // lista total dos games para o scroll infinito
      this.games = this.trataGames.slice(0,this.itensValue);

    });
  }

}
