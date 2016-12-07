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
var usersApi_service_1 = require("../shared/services/usersApi.service");
var NewProfileComponent = (function () {
    function NewProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NewProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.nom, form.prenom, form.grade, form.email, form.password).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['']);
            }
        });
    };
    return NewProfileComponent;
}());
NewProfileComponent = __decorate([
    core_1.Component({
        selector: 'new-profile-page',
        templateUrl: '../app/new-profile/new-profile.component.html'
    }),
    __metadata("design:paramtypes", [usersApi_service_1.UsersApiService, router_1.Router])
], NewProfileComponent);
exports.NewProfileComponent = NewProfileComponent;
//# sourceMappingURL=new-profile.component.js.map