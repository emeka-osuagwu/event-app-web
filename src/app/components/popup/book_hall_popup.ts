import { Component, Input } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {MdDialog, MdDialogRef, MdSnackBar, MdDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { HallService } from '../../services';

@Component({
  templateUrl: './../../pages/popup/book_hall_popup.html',
  styleUrls: ['../../../assets/css/style.css'],
})

export class BookHallPopup {
	
	hall_data: any;
	user_name: string
	user_email: string
	user_phone: string
	user_logo: string = "http://lorempixel.com/200/200/cats/TestImage/?89368";

	error_msg: boolean = false;
	pass_msg: boolean = false;
	loading: boolean = false;

	constructor
	(
		public dialogRef: MdDialogRef<BookHallPopup>,
		public HallService: HallService,
		private localStorageService: LocalStorageService
	) 
	{
		this.hall_data = this.localStorageService.get('hall_data')
	}

	ngOnInit(){
		// console.log(this.dialogRef._containerInstance.dialogConfig.data)
	}
	
	book(){
		console.log(this.hall_data)
		if 
		(
			this.user_name == null || this.user_name == '' ||
			this.user_email == null || this.user_email == '' ||
			this.user_phone == null || this.user_phone == '' 
		) 
		{
			this.error_msg = true;
			console.log('bad')
		}
		else
		{
			this.error_msg = false;
			
		}

		this.loading = true;

		var data = {
			hall_id: this.hall_data.id,
			user_name: this.user_name,
			user_phone: this.user_phone,
			user_logo: this.user_logo,
			user_email: this.user_email 
		}

		this.HallService.bookHall(data)
		.subscribe(
			data => {
				this.loading = false
				this.pass_msg = true
				console.log(JSON.stringify(data))
			},
			error => 
			{
				this.loading = false
				console.log(JSON.stringify(error))
			}
		)	
	}


}