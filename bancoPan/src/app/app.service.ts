import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class GamesService{
	baseUrl:string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=724507f00e6cb4113749c98dbdaf29c8&hash=ea22af419959a1c5d4e3da8261d2f592";
	// branndon = [];

	constructor(private _http:Http) {}

	getGames(){

		let database = [
			{"id": 1, "name": 'Gears of Wars', "img": "http://www.oxpal.com/wp-content/uploads/2014/08/gears_of_war_judgement_-_cover.jpg", "info": "Xbox", "preco": "$20"},
			{"id": 2, "name": 'GTA', "img": "https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/1.jpg", "info": "PS4", "preco": "$40"},
			{"id": 3, "name": 'Call of Duty', "img": "https://venturebeat.com/wp-content/uploads/2012/07/call_of_duty_modern_warfare_3_cover-900x900.jpg", "info": "PC", "preco": "$40"},
			{"id": 4, "name": 'Far Cry', "img": "http://www.oxpal.com/wp-content/uploads/2014/08/far_cry_3_-_cover.jpg", "info": "PC", "preco": "$50"},
			{"id": 5, "name": 'Mass Effect', "img": "https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/27.jpg", "info": "PC", "preco": "$70"},
			{"id": 6, "name": 'Tomb Raider', "img": "https://i.imgur.com/eOtEAB7.jpg", "info": "PS3", "preco": "$90"},
			{"id": 7, "name": 'Red Dead - Redemption', "img": "http://www.gamesintime.com/wp-content/uploads/2015/09/RedDeadRedemptionCover.png", "info": "Xbox One", "preco": "$100"},
			{"id": 8, "name": 'Killzone 2', "img": "https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/41.jpg", "info": "Xbox 360", "preco": "$60"},
			{"id": 9, "name": 'Deus Ex', "img": "http://i39.tinypic.com/50l9o4.jpg", "info": "PC", "preco": "$40"},
			{"id": 10, "name": 'PES 2018', "img": "https://i2-prod.mirror.co.uk/incoming/article10788868.ece/ALTERNATES/s615b/Luis-Suarez-unveiled-as-PES-2018s-cover-star-ahead-of-games-September-release.jpg", "info": "PS4", "preco": "$20"},
		]	
		return database;
	}

	getGame(id:number){
		let games = this.getGames();
		let game = games.filter( item => item.id == id )

		if(id == undefined) return games;
		return game;
	}

	// getDataObservable(url:string) {
 //        return this._http.get(url)
 //            .map(data => {
 //                data.json();
 //                console.log("I CAN SEE DATA HERE: ", data.json());
 //                return data.json();
 //        });
	// }
}










































