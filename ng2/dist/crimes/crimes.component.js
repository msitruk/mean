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
var crimesApi_service_1 = require("../shared/services/crimesApi.service");
// import 'moment/moment.js';
// import { Moment } from 'moment';
var moment = require("moment");
// declare var moment: any;
var CrimesComponent = (function () {
    function CrimesComponent(crimesApiService) {
        this.crimesApiService = crimesApiService;
        this.p = 1;
        this.itemTotal = 10;
        this.title = 'My first angular2-google-maps project';
        this.lat = 42.3600825;
        this.lng = -71.05888010000001;
        this.marks = [];
        this.now = moment();
    }
    CrimesComponent.prototype.ngOnInit = function () {
        this.getPage(this.p, this.itemTotal);
    };
    CrimesComponent.prototype.getPage = function (page, itemTotal) {
        var _this = this;
        console.log('total item wanted : ' + itemTotal);
        this.loading = true;
        this.itemTotal = itemTotal;
        this.crimesApiService.getcrimes(page, this.itemTotal).subscribe(function (result) {
            // console.log(result);
            _this.data = result.docs;
            _this.p = page;
            _this.loading = false;
            _this.total = result.total;
            _this.asyncData = _this.crimesApiService.getcrimes(page, _this.itemTotal).map(function (res) { return result.docs; });
            _this.updateMarks(_this.data);
        });
    };
    CrimesComponent.prototype.updateMarks = function (data) {
        // console.log("funtion updateMarks");
        // console.log(data);
        var i;
        var bref;
        var plouf;
        this.marks = [];
        for (i = 0; i < data.length; i++) {
            // console.log(data[i].location);
            bref = data[i].location.replace("(", "").replace(")", "");
            plouf = bref.split(', ');
            // console.log(plouf);
            // parseInt
            plouf[0] = parseFloat(plouf[0]);
            plouf[1] = parseFloat(plouf[1]);
            this.marks.push(plouf);
        }
        // setTimeout(
        // () => { 
        // 	console.log( map.triggerResize() );
        // 	// console.log( map.centerChange() );
        // }, 1000);
        // console.log(this.marks);
    };
    CrimesComponent.prototype.editModal = function (item, map) {
        // console.log(map);
        this.modalData = item;
        // console.log(item.location);
        var bref;
        var plouf;
        bref = item.location.replace("(", "").replace(")", "");
        plouf = bref.split(', ');
        this.lat = plouf[0];
        this.lng = plouf[1];
        // console.log(plouf);
        // setTimeout(
        //      () => { 
        //      	console.log( map.triggerResize() );
        //      	// console.log( map.centerChange() );
        //      }, 1000);
    };
    return CrimesComponent;
}());
CrimesComponent = __decorate([
    core_1.Component({
        selector: 'crimes-page',
        templateUrl: '../app/crimes/crimes.component.html',
        styles: ['body { font-size: 10px; }'],
        styleUrls: ['../app/crimes/crimes.component.css']
    }),
    __metadata("design:paramtypes", [crimesApi_service_1.CrimesApiService])
], CrimesComponent);
exports.CrimesComponent = CrimesComponent;
//# sourceMappingURL=crimes.component.js.map