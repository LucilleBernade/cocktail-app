import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktails } from '../models/cocktails';

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
}

//getCocktailList(): Observable<{"drinks":Array<Drink>}>
//    {
//        let url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
//        return this.http.get<{"drinks":Array<Drink>}>(url);
//    }