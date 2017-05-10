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
var AddRoomComponent = (function () {
    function AddRoomComponent(router, hotelService) {
        this.router = router;
        this.hotelService = hotelService;
    }
    AddRoomComponent.prototype.AddRoom = function () {
        this.room = {
            id: 4,
            description: "zer nice room",
            roomNumber: 909,
            available: true
        };
        this.hotelService.addRoomToHotel(this.hotelService.currentHotel.id, this.room);
        this.router.navigate(['emp/hotel/' + this.hotelService.currentHotel.id]);
    };
    return AddRoomComponent;
}());
AddRoomComponent = __decorate([
    core_1.Component({
        templateUrl: "app/room/add-room.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hotel_service_1.HotelService])
], AddRoomComponent);
exports.AddRoomComponent = AddRoomComponent;
//# sourceMappingURL=add-room.component.js.map