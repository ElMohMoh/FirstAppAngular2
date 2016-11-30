import { Component } from '@angular/core';
import { QcmService } from './qcm.service';

@Component({
	selector: 'qcms-app',
	template: `<h1>QCMs disponibles</h1>
				<ul>
					<li *ngFor="let qcm of qcms" (click)="setCurrentQcm(qcm)"><h2>{{qcm}}</h2></li>
				</ul>

				<h1 *ngIf="currentQcm"> {{currentQcm}} sélectionné</h1>

				<p>Partie 2</p>
				<ul>
					<li *ngFor="let qcm of tabQcm" (click)="setCurrentQuestion(qcm)">{{qcm.nom}}</li>
				</ul>

				<div *ngIf="questionCourante">
					<p>{{questionCourante.questions[questionCourante.question]}}</p>
					<ul>
						<li (click)="nextQuestion(i)" *ngFor="let response of questionCourante.reponses[questionCourante.question]; let i = index">{{response}}</li>
					</ul>
				</div>

				<div *ngIf="(questionCourante) && (questionCourante.question==questionCourante.questions.lenght)">
					<p>Bravo, vous avez reponsesJustes réponses justes sur questionCourante.questions.lenght!</p>
				</div>
	`
})
export class QcmsAppComponent{

	constructor(private _qcmService:QcmService){}


	qcms: Array<string> = [
		'JAVA',
		'PHP',
		'JavaScript',
		'HTML'
	]

	tabQcm = [];

	ngOnInit(){
		this.tabQcm = this._qcmService.getQcms();
	}
	

	currentQcm=null;
	questionCourante=null;
	reponsesCourantes=null;
	reponsesJustes=0;
	qcmTermine=false;

	setCurrentQcm(qcm: string): void{
		this.currentQcm=qcm;
	}

	setCurrentQuestion(qcm: any): void{
		qcm.question=0;
		this.questionCourante=qcm;
	}

	nextQuestion(index): void{

		if(this.questionCourante.valeursIndex[this.questionCourante.question]===index){
			this.reponsesJustes++;
		}
		this.questionCourante.question++;
	}
}