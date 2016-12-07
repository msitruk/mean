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
var auth_service_1 = require("../shared/services/auth.service");
var MenuComponent = (function () {
    // public isLogged;
    function MenuComponent(user) {
        this.user = user;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // if (localStorage.length > 0){
        // 	this.localSto = localStorage;
        // }
        console.log(this.isLogged);
    };
    // public ngOnChanges(changes: SimpleChange) {
    //    	console.log(changes);
    //  	}
    MenuComponent.prototype.logout = function () {
        console.log('yolo jme deco');
        return this.user.logout();
    };
    return MenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MenuComponent.prototype, "isLogged", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu-mean',
        templateUrl: '../app/menu/menu.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map