"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var crimes_component_1 = require("./crimes/crimes.component");
var new_profile_component_1 = require("./new-profile/new-profile.component");
var login_component_1 = require("./login/login.component");
var logged_in_guard_1 = require("./shared/services/logged-in.guard");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule', canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'new-profile', component: new_profile_component_1.NewProfileComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'crimes', component: crimes_component_1.CrimesComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'contact', component: contact_component_1.ContactComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: '', component: login_component_1.LoginComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map