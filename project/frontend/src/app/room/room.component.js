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
var RoomComponent = (function () {
    function RoomComponent() {
    }
    return RoomComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RoomComponent.prototype, "room", void 0);
RoomComponent = __decorate([
    core_1.Component({
        selector: "room",
        template: "\n       \n    <!-- Page Content -->\n    \n\n        <!-- Project One -->\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-hover\" src=\"http://placehold.it/700x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-5\">\n                <h3>Room : {{room.roomNumber}}</h3>\n                <h4>Description : {{room.description}} </h4>\n                <h3>Available : {{room.available}}</h3>  \n                <h3>Price: {{room.price}} &euro;</h3>                          \n                <a class=\"btn btn-primary\" href=\"portfolio-item.html\">Book Room</a>\n            </div>\n       \n        <!-- /.row -->\n\n        \n\n\n  \n\n\n    "
    })
], RoomComponent);
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=room.component.js.map