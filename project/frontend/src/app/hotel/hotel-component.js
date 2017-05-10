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
var HotelComponent = (function () {
    function HotelComponent(hotelService, route, auth, router) {
        this.hotelService = hotelService;
        this.route = route;
        this.auth = auth;
        this.router = router;
    }
    HotelComponent.prototype.ngOnInit = function () {
        this.hotel = this.hotelService.getHotel(+this.route.snapshot.params['id']);
        this.rooms = this.hotel.rooms;
        console.log(this.rooms);
    };
    HotelComponent.prototype.addRoom = function () {
        this.hotelService.setCurrentHotel(this.hotel);
        this.router.navigate(['/emp/add']);
    };
    return HotelComponent;
}());
HotelComponent = __decorate([
    core_1.Component({
        templateUrl: "app/hotel/hotel.component.html"
    }),
    __metadata("design:paramtypes", [hotel_service_1.HotelService,
        router_1.ActivatedRoute,
        auth_service_1.AuthService,
        router_1.Router])
], HotelComponent);
exports.HotelComponent = HotelComponent;
//# sourceMappingURL=hotel-component.js.map