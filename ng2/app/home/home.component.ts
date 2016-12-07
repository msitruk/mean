import { Component, Input } from '@angular/core';

declare let jQuery: any;

@Component({
 selector: 'home-page',
 templateUrl: '../app/home/home.component.html',
 styles: [`
   .well {
     margin-top: 6%;
   }
 `],
})
export class HomeComponent {
	@Input() isLogged: boolean;

	public ngOnInit() {
		// window.location.reload();
		jQuery('.carousel-homepage').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true
		});
	} 

}