"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HotelService = (function () {
    function HotelService() {
    }
    return HotelService;
}());
HotelService = __decorate([
    core_1.Injectable()
], HotelService);
exports.HotelService = HotelService;
exports.HOTELS = [
    {
        id: 1,
        name: "Rahova hotel",
        rooms: [{
                id: 1,
                roomNumber: 201,
                available: true
            }],
        description: "This is the description of Rahova Hotel",
        nrRooms: 400
    },
    {
        id: 2,
        name: "Berceni hotel",
        rooms: [{
                id: 1,
                roomNumber: 201,
                available: true
            }],
        description: "This is the description of Berceni Hotel",
        nrRooms: 400
    }
];
//# sourceMappingURL=hotel.service.js.map