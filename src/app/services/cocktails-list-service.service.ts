import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsListServiceService {

  constructor(private http:HttpClient) { }

  getCocktailList(): Observable<any>
    {
        let url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        return this.http.get<any>(url);
    }
}
