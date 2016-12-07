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
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/services/auth.service");
var auth_1 = require("../shared/models/auth");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('Form Data: ');
        console.log(form.email);
        // console.log(email);
        // console.log(password);
        // let salut = JSON.stringify({ form.email, form.password });
        // console.log(salut);
        this.userService.login(form.email, form.password).subscribe(function (result) {
            //    	// console.log(this.auth.email);
            //    	// console.log(this.auth.password);
            console.log(result);
            if (result) {
                _this.router.navigate(['home']);
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", auth_1.Auth)
], LoginComponent.prototype, "auth", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-page',
        templateUrl: '../app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map