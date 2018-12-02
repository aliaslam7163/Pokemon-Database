import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@NgModule({

  imports: [BrowserModule]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Poke Search. Your go to place to find your favorite pokemons';
  input = '';
  pokemons : any;

  constructor(public DS:DataService){

  }

  searchPoke(text){
    console.log(text);
    if(text != ''){
      this.DS.search(text).subscribe((items) => {
        this.pokemons = items;
      });
    }
    else
    {
      this.pokemons = [];
    }

  }
}
