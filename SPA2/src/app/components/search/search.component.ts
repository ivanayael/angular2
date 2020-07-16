import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  heroes: any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService,
               private location: Location
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroe(params['nombre']);
    })
  }
  

} 

