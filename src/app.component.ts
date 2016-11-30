import { Component } from '@angular/core';

@Component({
	selector: 'movies-app',
	template: `
		<a routerLink="/">Accueil</a>
		<a routerLink="/qcmEdition">Qcm</a>
		<router-outlet></router-outlet>
	`


})
export class MoviesAppComponent{

}