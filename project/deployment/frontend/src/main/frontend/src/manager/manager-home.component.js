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
var hotel_service_1 = require("../hotel/hotel.service");
var auth_service_1 = require("../services/auth.service");
var user_service_1 = require("../services/user.service");
var ManagerHomeComponent = (function () {
    function ManagerHomeComponent(hotelService, auth, userService, router) {
        this.hotelService = hotelService;
        this.auth = auth;
        this.userService = userService;
        this.router = router;
        this.employees = [];
        this.hotels = [];
        this.employees = this.getEmployees();
        this.hotels = this.getHotels();
    }
    ManagerHomeComponent.prototype.ngOnInit = function () {
        console.log(this.getHotels());
        console.log(this.employees);
    };
    //method returns hotels for current user 
    ManagerHomeComponent.prototype.getHotels = function () {
        return this.userService.getHotelsForUser(this.auth.currentUser.id);
    };
    //return employees for current user
    ManagerHomeComponent.prototype.getEmployees = function () {
        return this.userService.getUserEmployees(this.auth.currentUser.id);
    };
    return ManagerHomeComponent;
}());
ManagerHomeComponent = __decorate([
    core_1.Component({
        templateUrl: "app/manager/manager-home.component.html"
    }),
    __metadata("design:paramtypes", [hotel_service_1.HotelService,
        auth_service_1.AuthService,
        user_service_1.UserService,
        router_1.Router])
], ManagerHomeComponent);
exports.ManagerHomeComponent = ManagerHomeComponent;
//# sourceMappingURL=manager-home.component.js.map