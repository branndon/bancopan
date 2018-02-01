import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: any, buscar: any): any {
  	// console.log(games);
  	// console.log(buscar);

    if(buscar == undefined) return games;

    return games.filter(function(game){
    	return game.name.toLowerCase().includes(buscar.toLowerCase());
    })
  }

}
