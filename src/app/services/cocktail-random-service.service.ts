import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.interface';

@Injectable({
    providedIn: 'root'
})

export class CocktailRandomService {

    constructor(private http:HttpClient) { }

    getRandomCocktail(): Observable<Drink>
    {
        let url="https://www.thecocktaildb.com/api/json/v1/1/random.php";
        return this.http.get<Drink>(url);
    }
    
}

