"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var crimes_component_1 = require("./crimes/crimes.component");
var new_profile_component_1 = require("./new-profile/new-profile.component");
var login_component_1 = require("./login/login.component");
var auth_service_1 = require("./shared/services/auth.service");
var crimesApi_service_1 = require("./shared/services/crimesApi.service");
var http_1 = require("@angular/http");
var logged_in_guard_1 = require("./shared/services/logged-in.guard");
var ng2_pagination_1 = require("ng2-pagination");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var core_2 = require("angular2-google-maps/core");
var usersApi_service_1 = require("./shared/services/usersApi.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.appRouting,
            http_1.HttpModule,
            ng2_pagination_1.Ng2PaginationModule,
            ng2_bootstrap_1.Ng2BootstrapModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyA4PbEHid5Cpv2h2peonwutOHk9Jvr-0oY'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            not_found_component_1.NotFoundComponent,
            crimes_component_1.CrimesComponent,
            new_profile_component_1.NewProfileComponent,
            login_component_1.LoginComponent,
            menu_component_1.MenuComponent
        ],
        providers: [auth_service_1.AuthService, crimesApi_service_1.CrimesApiService, usersApi_service_1.UsersApiService, logged_in_guard_1.LoggedInGuard, { provide: ng2_bootstrap_1.ComponentsHelper, useClass: ng2_bootstrap_1.ComponentsHelper }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map