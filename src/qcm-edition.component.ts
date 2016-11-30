import { Component } from '@angular/core';
import { QcmService } from './qcm.service';

@Component({
	selector: 'qcm-edition',
	template: `
		<ul>
			<li *ngFor="let qcm of tabQcm; let i = index ">{{qcm.nom}} <button (click)="deleteQcm(i)">Suppr</button></li> 
		</ul>
		<button>Créer</button>
		<br>
		<form (ngSubmit)="addQcm(qcmForm.value)" #qcmForm="ngForm">
			<div>
				<label>QCM:</label><input name="qcmInput" ngModel required>
			</div>
			<button type="submit" [disabled]="!qcmForm.valid">Valider</button>
		</form>
	`,
	styles:['input.ng-invalid{ border-left: 5px red solid}','input.ng-valid{ border-left: 5px green solid}']


})
export class QcmEditionAppComponent{

	constructor(private _qcmService:QcmService){}

	tabQcm = [];

	ngOnInit(){
		this.tabQcm= this._qcmService.getQcms();
	}

	deleteQcm(i: number): void{
		this._qcmService.remove(i);
	}

	addQcm(qcm): void{
		this._qcmService.add(qcm.qcmInput);
	}

}