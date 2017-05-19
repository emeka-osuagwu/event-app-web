import { Component } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { 
	BookHallPopup
} from '../components';


import { HallService } from '../services';

@Component({
	selector: 'app-root',
	templateUrl: '../pages/home.html',
	styleUrls: ['../../assets/css/style.css']
})

export class HomeComponent {

	lat: number = 6.6014802
	lng: number = 3.3492688
	halls: any;

	constructor
	(
		public dialog: MdDialog,
		private route: ActivatedRoute,
		private HallService: HallService,
		private localStorageService: LocalStorageService
	) 
	{
	}

	openDialog(hall) {
		this.dialog.open(BookHallPopup)
		this.localStorageService.set('hall_data', hall);
	}

	ngOnInit() {
		this.halls = this.route.snapshot.data['halls']['data'];
	}
}



