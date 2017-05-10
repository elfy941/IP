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
var RoomListComponent = (function () {
    function RoomListComponent() {
    }
    return RoomListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RoomListComponent.prototype, "rooms", void 0);
RoomListComponent = __decorate([
    core_1.Component({
        selector: "room-list",
        template: "\n            <hr>\n            <div *ngFor=\"let r of rooms\">\n                <room [room]=\"r\"></room>\n                <hr>\n            </div>\n        \n    "
    })
], RoomListComponent);
exports.RoomListComponent = RoomListComponent;
//# sourceMappingURL=room-list.component.js.map