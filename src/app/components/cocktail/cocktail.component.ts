import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsListServiceService } from 'src/app/services/cocktails-list-service.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  constructor(
    private CocktailsListServiceService : CocktailsListServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //onViewFaceSnap(){
  //  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  //}

}
