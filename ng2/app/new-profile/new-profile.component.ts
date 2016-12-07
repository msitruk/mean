import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from '../shared/services/usersApi.service';
import { User } from '../shared/models/user'
@Component({
    selector: 'new-profile-page',
    templateUrl: '../app/new-profile/new-profile.component.html'
})
export class NewProfileComponent {
    constructor(private userService: UsersApiService, private router: Router) {}
    onSubmit(form: any): void{
    this.userService.postUser(form.nom, form.prenom, form.grade, form.email, form.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
}