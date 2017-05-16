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
    HotelService.prototype.setCurrentHotel = function (hotel) {
        this.currentHotel = hotel;
    };
    HotelService.prototype.getHotel = function (id) {
        return exports.HOTELS.find(function (hotel) { return hotel.id === id; });
    };
    HotelService.prototype.addRoomToHotel = function (idHotel, room) {
        for (var _i = 0, HOTELS_1 = exports.HOTELS; _i < HOTELS_1.length; _i++) {
            var x = HOTELS_1[_i];
            if (x.id === idHotel) {
                x.rooms.push(room);
            }
        }
    };
    HotelService.prototype.generateRoomIdForHotel = function (idHotel) {
        var nr = 0;
        for (var _i = 0, HOTELS_2 = exports.HOTELS; _i < HOTELS_2.length; _i++) {
            var x = HOTELS_2[_i];
            if (x.id === idHotel) {
                nr = x.rooms.length + 1;
            }
        }
        return nr;
    };
    HotelService.prototype.bookRoom = function (idHotel, idRoom) {
        for (var _i = 0, HOTELS_3 = exports.HOTELS; _i < HOTELS_3.length; _i++) {
            var hotel = HOTELS_3[_i];
            if (hotel.id === idHotel) {
                for (var _a = 0, _b = hotel.rooms; _a < _b.length; _a++) {
                    var room = _b[_a];
                    if (room.id === idRoom) {
                        room.available = false;
                    }
                }
            }
        }
    };
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
                description: "This is a nice room",
                available: true,
                price: 300
            }, {
                id: 2,
                roomNumber: 202,
                description: "This is a very nice room",
                available: true,
                price: 100
            }],
        description: "This is the description of Rahova Hotel",
        nrRooms: 400,
        location: "Bucuresti"
    },
    {
        id: 2,
        name: "Berceni hotel",
        rooms: [{
                id: 3,
                roomNumber: 202,
                description: "This is another nice room",
                available: true,
                price: 250
            }],
        description: "This is the description of Berceni Hotel",
        nrRooms: 400,
        location: "Bucuresti"
    }
];
//# sourceMappingURL=hotel.service.js.map