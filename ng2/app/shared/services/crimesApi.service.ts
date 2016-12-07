
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class CrimesApiService {
  // private loggedIn = false;

  constructor(private http: Http) {
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }

  getcrimes(currentPage, itemsTotal)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get('http://localhost:3002/crimes/'+currentPage+'/'+itemsTotal)
      .map(res => res.json())
      .map((res) => {
        if (res) {
        }
        return res;
    });
  }
}