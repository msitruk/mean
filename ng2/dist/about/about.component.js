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
var user_service_1 = require("../shared/services/user.service");
var AboutComponent = (function () {
    function AboutComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // OTHER WAY
        this.service.getUsers().then(function (users) { return _this.users = users; });
        //this.route.data.forEach(data => {
        //    console.log(data);
        //    this.users = data.users;
        //});
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: ["\n        .profile-card {\n            background: #f3f3f3;\n            border-radius: 4px;\n            padding: 30px;\n            text-align: center;\n        }\n        .profile-card img {\n            max-width: 50%;\n            margin: 15px auto;\n        }\n    "],
        template: "\n        <div class=\"row\" *ngIf=\"users\">\n            <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n                <div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n                    <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n                    <h2>{{ user.name }}</h2>\n                    <p><a href=\"https://github.com/{{ user.username }}\">{{ user.username }}</a></p>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map