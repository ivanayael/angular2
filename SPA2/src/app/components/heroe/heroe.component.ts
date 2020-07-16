import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService,
               private location: Location
  ) {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }

  Volver(): void {
    this.location.back();
  }

}
