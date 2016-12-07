import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'contact-page',
  template: `
    i am the contact page
  `
})

@Injectable()
export class ContactComponent {
	constructor(private http: Http) {}

	getProfile() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let authToken = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${authToken}`);

		return this.http
		  .get('/contact', { headers })
		  .map(res => res.json());
  	}
}