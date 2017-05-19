import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { routing, navigateComponent } from '../routes/routes';

import { 
	AppComponent,
	BookHallPopup
} from '../components';

import { 
	HallService
} from '../services';

@NgModule({
	imports: [
		routing,
		HttpModule,
		JsonpModule,
		FormsModule,
		BrowserModule,
		FlexLayoutModule,
		MaterialModule.forRoot(),
		BrowserAnimationsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAoJ-u0gp-apK-5_K9nnKQVoLY84l936-w'
		}),
		LocalStorageModule.withConfig({
		    prefix: 'my-app',
		    storageType: 'localStorage'
		})
	],
	declarations: [
		AppComponent,
		navigateComponent,
		BookHallPopup
	],
	providers: [
		HallService
	],
	bootstrap: [ 
		AppComponent,
		BookHallPopup
	],    
	entryComponents: []
})

export class AppModule { }