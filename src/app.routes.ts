import {Routes} from '@angular/router';
import {QcmsAppComponent} from './qcm.component'
import {QcmEditionAppComponent} from './qcm-edition.component';


export const ROUTES: Routes = [
	{path:'', component: QcmsAppComponent},
	{path:'qcmEdition',component:QcmEditionAppComponent}
];
