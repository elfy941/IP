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
    //not working momentarly
    SearchService.prototype.sortByCriteria = function (hotels, obj) {
        var results;
        for (var _i = 0, hotels_1 = hotels; _i < hotels_1.length; _i++) {
            var hotel = hotels_1[_i];
            hotel.rooms.sort(function (h1, h2) {
                if (obj.order === 'Ascending') {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            results.push(hotel);
        }
        return results;
    };
    /*
        search algorithm uses an ISearch object as parameter.
        The alg searches first for the location of the hote that was introduced ,
            then after the room price
        The final results will contain only hotels that have at least on room suited for the
            search criteria
    */
    SearchService.prototype.search = function (obj) {
        var hotels = [];
        var results = [];
        console.log(hotel_service_1.HOTELS);
        //search all the hotels after hotel location
        hotels = hotel_service_1.HOTELS.filter(function (h) { return h.location === obj.location; });
        for (var _i = 0, hotels_2 = hotels; _i < hotels_2.length; _i++) {
            var hotel = hotels_2[_i];
            // hotel.rooms = hotel.rooms.filter(room => room.price <= obj.price)   
            var result = {
                id: hotel.id,
                description: hotel.description,
                name: hotel.name,
                nrRooms: hotel.nrRooms,
                location: hotel.location,
                rooms: []
            };
            for (var _a = 0, _b = hotel.rooms; _a < _b.length; _a++) {
                var room = _b[_a];
                if (room.price <= obj.price && room.available === true) {
                    result.rooms.push(room);
                }
            }
            if (result != undefined && result != null) {
                if (result.rooms.length > 0) {
                    results.push(result);
                }
            }
        }
        console.log(results);
        // this.hotels =  this.sortByCriteria(results,obj)        
        this.hotels = results;
        return this.hotels;
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable()
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map