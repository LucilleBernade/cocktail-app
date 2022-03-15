import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CocktailListComponent } from "./components/cocktail-list/cocktail-list.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'list', component: CocktailListComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}