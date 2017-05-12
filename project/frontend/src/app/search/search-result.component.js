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
var angular2_toaster_1 = require("angular2-toaster");
var search_service_1 = require("../search/search.service");
var hotel_service_1 = require("../hotel/hotel.service");
var SearchResult = (function () {
    function SearchResult(searchService, hotelService, toasterService, router) {
        this.searchService = searchService;
        this.hotelService = hotelService;
        this.toasterService = toasterService;
        this.router = router;
    }
    SearchResult.prototype.ngOnInit = function () {
        this.hotels = this.searchService.getHotels();
        console.log(this.hotels);
        if (this.hotels.length == 0) {
            this.empty = true;
        }
        //    this.searchService.emptyHotelArray()
    };
    SearchResult.prototype.book = function (hotelId, roomId) {
        //change availibity to a room
        this.hotelService.bookRoom(hotelId, roomId);
        this.popToast();
        this.router.navigate(['home']);
    };
    SearchResult.prototype.popToast = function () {
        this.toasterService.pop('success', 'Important Message', 'You have booked a room :)');
    };
    return SearchResult;
}());
SearchResult = __decorate([
    core_1.Component({
        templateUrl: "app/search/search-result.component.html"
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService,
        hotel_service_1.HotelService,
        angular2_toaster_1.ToasterService,
        router_1.Router])
], SearchResult);
exports.SearchResult = SearchResult;
//# sourceMappingURL=search-result.component.js.map