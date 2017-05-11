"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var hotel_service_1 = require("../hotel/hotel.service");
var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.getHotels = function () {
        return this.hotels;
    };
    SearchService.prototype.coppyArray = function () {
        this.hotelsCoppy = [];
        for (var _i = 0, HOTELS_1 = hotel_service_1.HOTELS; _i < HOTELS_1.length; _i++) {
            var h = HOTELS_1[_i];
            this.hotelsCoppy.push(h);
        }
    };
    SearchService.prototype.search = function (obj) {
        var hotels = [];
        this.coppyArray();
        console.log(hotel_service_1.HOTELS);
        //search all the hotels after hotel location
        hotels = this.hotelsCoppy.filter(function (h) { return h.location === obj.location; });
        for (var _i = 0, hotels_1 = hotels; _i < hotels_1.length; _i++) {
            var hotel = hotels_1[_i];
            hotel.rooms = hotel.rooms.filter(function (room) { return room.price <= obj.price; });
        }
        //remove hotels with 0 rooms
        hotels = hotels.filter(function (h) { return h.rooms.length > 0; });
        this.hotels = hotels;
        this.hotelsCoppy = null;
        return hotels;
    };
    SearchService.prototype.emptyHotelArray = function () {
        this.hotels = null;
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable()
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map