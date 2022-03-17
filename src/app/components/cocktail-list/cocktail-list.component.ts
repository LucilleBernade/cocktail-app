import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Cocktails } from 'src/app/models/cocktails';
import { CocktailsListServiceService } from '../../services/cocktails-list-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  constructor(private cocktail: CocktailsListServiceService) {}

  cocktail$!: Observable<Cocktails>;
  

  ngOnInit(): void {
   this.cocktail$=this.cocktail.getCocktailList().pipe(
     delay(1000)
   );

   
   //this.cocktail$.subscribe(
   //  console.log
   //)

  }
}
