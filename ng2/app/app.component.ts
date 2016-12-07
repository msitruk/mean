import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import {ComponentsHelper} from 'ng2-bootstrap/ng2-bootstrap';
declare var jQuery:any;
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  styles: [`
    .active {
      color: #fafafa !important;
    }
  `],
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  private viewContainerRef: ViewContainerRef;
  public isLogged: boolean;

	constructor(
    private user: AuthService,
    viewContainerRef:ViewContainerRef,
    componentsHelper:ComponentsHelper,
    vcr:ViewContainerRef
    ) {
      this.viewContainerRef = viewContainerRef;
      componentsHelper.setRootViewContainerRef(vcr);
      // this.isLogged = this.user.isLoggedIn();
    }
  message = 'This is the sample message.';

  ngOnInit() {
    console.log(this.user.isLoggedIn());
    this.isLogged = this.user.isLoggedIn();
    console.log(localStorage);
  }
  public logout() {
    console.log('yolo jme deco');
    return this.user.logout();
  } 
}