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
var http_1 = require("@angular/http");
// import { of } from 'rxjs/observable/of';
// import { map } from 'rxjs/operator/map';
require("rxjs/add/operator/map");
var CrimesApiService = (function () {
    // private loggedIn = false;
    function CrimesApiService(http) {
        this.http = http;
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }
    CrimesApiService.prototype.getcrimes = function (currentPage, itemsTotal) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get('http://localhost:3002/crimes/' + currentPage + '/' + itemsTotal)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        });
    };
    return CrimesApiService;
}());
CrimesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CrimesApiService);
exports.CrimesApiService = CrimesApiService;
//# sourceMappingURL=crimesApi.service.js.map