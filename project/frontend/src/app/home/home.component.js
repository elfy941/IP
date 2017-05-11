"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "app/home/home.component.html",
        styles: ["\n        #imaginary_container{\n            margin-top:20%; /* Don't copy this */\n        }\n    .stylish-input-group .input-group-addon{\n     background: white !important; \n        }\n    .stylish-input-group .form-control{\n\t    border-right:0; \n\t    box-shadow:0 0 0; \n\t    border-color:#ccc;\n    }\n    .stylish-input-group button{\n        border:0;\n        background:transparent;\n    }\n    "]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map