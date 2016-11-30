import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MoviesAppComponent} from './app.component';
import {QcmsAppComponent} from './qcm.component';
import {QcmEditionAppComponent} from './qcm-edition.component';
import { QcmService } from './qcm.service';


import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(ROUTES),FormsModule],
	declarations: [MoviesAppComponent,QcmsAppComponent,QcmEditionAppComponent],
	bootstrap: [MoviesAppComponent],
	providers: [QcmService]
})
export class AppModule{

}
