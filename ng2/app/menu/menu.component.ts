import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
 selector: 'menu-mean',
 templateUrl: '../app/menu/menu.component.html',
})
export class MenuComponent implements OnInit {
	// public isLogged;

	constructor(private user: AuthService) {}

	@Input() isLogged: boolean;

	public ngOnInit() {
		// if (localStorage.length > 0){
		// 	this.localSto = localStorage;
		// }
		console.log(this.isLogged);
	}

	// public ngOnChanges(changes: SimpleChange) {
 //    	console.log(changes);
 //  	}

	public logout() {
		console.log('yolo jme deco');
		return this.user.logout();
	}

}