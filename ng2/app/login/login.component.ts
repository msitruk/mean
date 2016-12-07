import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { Auth } from '../shared/models/auth'

@Component({
	selector: 'login-page',
	templateUrl: '../app/login/login.component.html'
})
export class LoginComponent {
	@Input() auth: Auth;
  constructor(private userService: AuthService, private router: Router) {}

  onSubmit(form: any): void{
  	console.log('Form Data: ');
  	console.log(form.email);
	// console.log(email);
	// console.log(password);
	// let salut = JSON.stringify({ form.email, form.password });
	// console.log(salut);
    this.userService.login(form.email, form.password).subscribe((result) => {
 //    	// console.log(this.auth.email);
 //    	// console.log(this.auth.password);
    	console.log(result);
      if (result) {
        this.router.navigate(['home']);
      }
    });
  }
// submitForm(form: any): void{
//     console.log('Form Data: ');
//     console.log(form);
//   }
}