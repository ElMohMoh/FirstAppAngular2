import {Injectable} from '@angular/core';

@Injectable()
export class QcmService{
	qcms = [
		{nom:"JAVA",
		questions:["Le mot clé this représente","Le mot clé implemente réprésente"],
		question: 0,
		reponses:[[
			"L'objet fonction lui-même",
			"L'objet qui contient la fonction",
			"Un objet de contexte (window par défaut)"],
			[
			"Un héritage",
			"L'implémentation d'une interface"]
		],
		valeursIndex:[2,1]
		},
		{nom:"PHP",
		questions:["PHP Question 1","PHP Question 2"],
		question:0,
		reponses:[["A","B"],["A","B","C","D"]]},
		{nom:"JavaScript",
		questions:["JavaScript Question 1","JavaScript Question 2"],
		question:0,
		reponses:[["A","B"],["A","B","C","D"]]},
		{nom:"HTML",
		question:0,
		questions:["HTML Question 1","HTM Question 2"],
		reponses:[]},
	]

	getQcms(){
		return this.qcms;
	}

	add(qcm : string): void{
		this.qcms.push({nom:qcm,
		questions:[],
		question: 0,
		reponses:[],
		valeursIndex:[]
		});
	}

	remove(index : number): void{
		this.qcms.splice(index,1);
	}
}