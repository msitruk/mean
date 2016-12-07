import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CrimesApiService } from '../shared/services/crimesApi.service';
import {Observable} from 'rxjs';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { SebmGoogleMap, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
// import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import { SebmGoogleMap } from 'angular2-google-maps/core';
// import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
declare var jQuery:any;
// import 'moment/moment.js';
// import { Moment } from 'moment';
import * as moment from 'moment';


// declare var moment: any;

@Component({
    selector: 'crimes-page',
	templateUrl: '../app/crimes/crimes.component.html',
	styles: ['body { font-size: 10px; }'],
	styleUrls: ['../app/crimes/crimes.component.css']
})

export class CrimesComponent implements OnInit {
    asyncData: Observable<any[]>;
	data;
	p: number = 1;
	itemTotal: number = 10;
	total: number;
	loading: boolean;
	modalData: any[];
	title: string = 'My first angular2-google-maps project';
	lat: number = 42.3600825;
	lng: number = -71.05888010000001;
	marks = [];
	now = moment();


	constructor(private crimesApiService: CrimesApiService) {}

	ngOnInit() {
        this.getPage(this.p, this.itemTotal);
    }

	getPage(page: number, itemTotal: number) {
		console.log('total item wanted : '+itemTotal);
		this.loading = true;
        this.itemTotal = itemTotal;
		this.crimesApiService.getcrimes(page, this.itemTotal).subscribe((result) => {
			// console.log(result);
			this.data = result.docs;
			this.p = page;
			this.loading = false;
			this.total = result.total;
			this.asyncData = this.crimesApiService.getcrimes(page, this.itemTotal).map(res => result.docs);
			this.updateMarks(this.data);
	    });
    }

    updateMarks(data) {
    	// console.log("funtion updateMarks");
    	// console.log(data);
    	let i: number;
    	let bref;
    	let plouf;
    	this.marks = [];
    	for (i = 0; i < data.length; i++) {

    		// console.log(data[i].location);
			bref = data[i].location.replace("(", "").replace(")", "");
			plouf = bref.split(', ');
			// console.log(plouf);
			// parseInt
	    	plouf[0] = parseFloat(plouf[0]);
	    	plouf[1] = parseFloat(plouf[1]);
			this.marks.push(plouf);
    		// this.marks[i] = data.[i].location;
    	}
    	    	// setTimeout(
          // () => { 
          // 	console.log( map.triggerResize() );
          // 	// console.log( map.centerChange() );
          // }, 1000);
    	// console.log(this.marks);
    }

    editModal(item: any, map:any) {
    	// console.log(map);
    	this.modalData = item;
    	// console.log(item.location);
    	let bref;
    	let plouf;
    	bref = item.location.replace("(", "").replace(")", "");
    	plouf = bref.split(', ');
    	this.lat = plouf[0];
    	this.lng = plouf[1];
    	// console.log(plouf);

    	// setTimeout(
     //      () => { 
     //      	console.log( map.triggerResize() );
     //      	// console.log( map.centerChange() );
     //      }, 1000);
    }
}