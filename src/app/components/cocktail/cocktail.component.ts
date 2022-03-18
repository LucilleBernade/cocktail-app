import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink.interface';
import { CocktailRandomService } from 'src/app/services/cocktail-random-service.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  constructor(private randomCocktail: CocktailRandomService) { }

  randomCocktail$!: Observable<Drink>;

  ngOnInit(): void {
    this.randomCocktail$=this.randomCocktail.getRandomCocktail()
  }

  //onViewFaceSnap(){
  //  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  //}

}
