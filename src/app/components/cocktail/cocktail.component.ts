import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  //onViewFaceSnap(){
  //  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  //}

}
