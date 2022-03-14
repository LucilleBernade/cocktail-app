import { Component, OnInit } from '@angular/core';
import {CocktailRandomService} from '../../services/cocktail-random-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cocktail:CocktailRandomService) { 

    this.cocktail.getData().subscribe( data => {console.log(data)})
  }

  ngOnInit(): void {
  }

}
