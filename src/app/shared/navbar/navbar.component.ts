import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeroesService } from '../../heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router ) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  buscarHeroe( terminoBusqueda:string){
    this.router.navigate(['/search',terminoBusqueda])
  }
  

}
