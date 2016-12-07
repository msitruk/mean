import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrimesComponent } from './crimes/crimes.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/services/logged-in.guard';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
    { path: 'about', loadChildren:'app/about/about.module#AboutModule', canActivate: [LoggedInGuard] },
    { path: 'new-profile', component: NewProfileComponent, canActivate: [LoggedInGuard]  },
    { path: 'crimes', component: CrimesComponent, canActivate: [LoggedInGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [LoggedInGuard] },
    { path: '', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);