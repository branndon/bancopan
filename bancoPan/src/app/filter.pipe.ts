import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: any, buscar: any): any {
    if(buscar == undefined) return games;
    return games.filter(function(game){
    	return game.game.name.toLowerCase().includes(buscar.toLowerCase());
    })
  }
}
