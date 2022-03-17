import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Cocktails } from '../models/cocktails';
import { Drink } from '../models/drink.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailsListServiceService {

  constructor(private http:HttpClient) { }

  getCocktailList(): Observable<Cocktails>
    {
        let url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        return this.http.get<Cocktails>(url);
    }

    getDrinks(param=""): Observable<Drink[]>
  {
    return this.getCocktailList().pipe(
      //tap(cocktail=>console.log("tap1", cocktail)),
      map(({drinks})=> drinks.filter(drink=>drink.strDrink.includes(param))),
      tap(drinks=>console.log("tap3", drinks)),
     )
  }

}

//getCocktailList(): Observable<{"drinks":Array<Drink>}>
//    {
//        let url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
//        return this.http.get<{"drinks":Array<Drink>}>(url);
//    }