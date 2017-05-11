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
var search_service_1 = require("../search/search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
    }
    SearchComponent.prototype.search = function (form) {
        this.searchObject = {
            location: form.location,
            order: form.order,
            price: form.price
        };
        console.log(this.searchObject);
        this.hotels = this.searchService.search(this.searchObject);
        console.log(this.hotels);
        this.router.navigate(['result']);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: "search",
        templateUrl: "app/search/search.component.html",
        styles: ["\n            .container{\n             margin-top:30px;\n        }\n\n        .filter-col{\n            padding-left:10px;\n            padding-right:10px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService,
        router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map