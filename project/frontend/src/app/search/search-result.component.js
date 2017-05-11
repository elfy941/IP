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
var search_service_1 = require("../search/search.service");
var SearchResult = (function () {
    function SearchResult(searchService) {
        this.searchService = searchService;
    }
    SearchResult.prototype.ngOnInit = function () {
        this.hotels = this.searchService.getHotels();
        console.log(this.hotels);
        //    this.searchService.emptyHotelArray()
    };
    SearchResult.prototype.book = function (hotelId, roomId) {
        //change availibity to a room
    };
    return SearchResult;
}());
SearchResult = __decorate([
    core_1.Component({
        templateUrl: "app/search/search-result.component.html"
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchResult);
exports.SearchResult = SearchResult;
//# sourceMappingURL=search-result.component.js.map