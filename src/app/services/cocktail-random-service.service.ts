import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CocktailRandomService {

    constructor(private http:HttpClient) { }

    getRandomCocktail(): Observable<any>
    {
        let url="https://www.thecocktaildb.com/api/json/v1/1/random.php";
        return this.http.get<any>(url);
    }
}