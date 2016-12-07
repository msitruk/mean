import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersApiService {
  private postResult = false;
  constructor(private http: Http) {
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }
  postUser(nom, prenom, grade, email, password)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(email);
    return this.http
       .post(
         'http://localhost:3002/post-user', 
         JSON.stringify({ nom, prenom, grade, email, password }), 
            { headers }
       )
       .map(res => res.json())
       .map((res) => {
         if (res.success) {
           this.postResult = true;
          }
        return res.success;
      });
     }
  }