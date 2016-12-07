import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrimesComponent } from './crimes/crimes.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';
import { CrimesApiService } from './shared/services/crimesApi.service';
import { HttpModule } from '@angular/http';
import { LoggedInGuard } from './shared/services/logged-in.guard';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2BootstrapModule, ComponentsHelper} from 'ng2-bootstrap/ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { UsersApiService } from './shared/services/usersApi.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      appRouting,
      HttpModule,
      Ng2PaginationModule,
      Ng2BootstrapModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA4PbEHid5Cpv2h2peonwutOHk9Jvr-0oY'
      })
     ],
  declarations: [
      AppComponent,
      HomeComponent,
      ContactComponent,
      NotFoundComponent,
      CrimesComponent,
      NewProfileComponent,
      LoginComponent,
      MenuComponent
  ],
  providers: [AuthService, CrimesApiService, UsersApiService, LoggedInGuard, {provide: ComponentsHelper, useClass: ComponentsHelper}],
  bootstrap: [ AppComponent ]
})
export class AppModule {}