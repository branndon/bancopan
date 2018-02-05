import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService2{
	readonly ROOT_URL = "https://api.twitch.tv/kraken/games/top?client_id=4t0ks23u023wq8xqid4b9lx6bkbn79"; // URL do get
	posts: any;

	constructor(private http: HttpClient) {
		console.log("Games Services");
		console.log(http);
	}

	getGames(){
		// console.log("chegou lá!");
		// this.http.get(this.ROOT_URL).subscribe(res => {
		//   console.log(res.top);
		//   this.posts = res.top;
		//   console.log("branndon");
		// });
	}
}










































