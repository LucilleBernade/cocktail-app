import { Component, OnInit } from '@angular/core';
import { CocktailsListServiceService } from '../../services/cocktails-list-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  constructor(private cocktail: CocktailsListServiceService) {}

  drinks!:any

  ngOnInit(): void {
    this.cocktail.getCocktailList().subscribe((data) => {
      console.log('data', data);
    this.drinks = data.drinks
    });
  }
}
