import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IDataService } from './IDataService';
import { IPokeItem } from '../models/IPokeItem';


@Injectable()
export class DataService implements IDataService {

  constructor(public http: HttpClient) { }

  public search(text:string) : Observable<IPokeItem[]>{
    return this.http.get("./assets/pokemon.json")
    .map((res:any) =>  {
      let items = res;
      let index = 0;
      let results = [];

      //search the json object we have mapped for filtered input(text)

      for(var i = 0; i <= items.length-1; i++)
      {
        //the following if statement will search for pokemons within the items array.
        //instead of having multiple if statements, one to tackle the name and the types, we can put everything into one if-statement with || statements
        if( (items[i].name.toLowerCase().indexOf(text.toLowerCase()) > -1)){
          results.push(items[i]);
        }
        for(var j = 0; j <= items[i].types.length -1; j++)
        {
          if((items[i].types[j].indexOf(text.toLowerCase()) > -1))
          {
            if(!results.includes(items[i]))
            {
              results.push(items[i]);
            }
          }
        }
      }
      //console.log(results);
      return results;
    });
  }

}
