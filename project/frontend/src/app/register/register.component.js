"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: "app/register/register.component.html",
        styles: ["\n        /*\n/* Created by Filipe Pina\n * Specific styles of signin, register, component\n */\n/*\n * General styles\n */\n\nbody, html{\n     height: 100%;\n \tbackground-repeat: no-repeat;\n \tbackground-color: #d3d3d3;\n \tfont-family: 'Oxygen', sans-serif;\n}\n\n.main{\n \tmargin-top: 70px;\n}\n\nh1.title { \n\tfont-size: 50px;\n\tfont-family: 'Passion One', cursive; \n\tfont-weight: 400; \n}\n\nhr{\n\twidth: 10%;\n\tcolor: #fff;\n}\n\n.form-group{\n\tmargin-bottom: 15px;\n}\n\nlabel{\n\tmargin-bottom: 15px;\n}\n\ninput,\ninput::-webkit-input-placeholder {\n    font-size: 11px;\n    padding-top: 3px;\n}\n\n.main-login{\n \tbackground-color: #fff;\n    /* shadows and rounded borders */\n    -moz-border-radius: 2px;\n    -webkit-border-radius: 2px;\n    border-radius: 2px;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n\n}\n\n.main-center{\n \tmargin-top: 30px;\n \tmargin: 0 auto;\n \tmax-width: 330px;\n    padding: 40px 40px;\n\n}\n\n.login-button{\n\tmargin-top: 5px;\n}\n\n.login-register{\n\tfont-size: 11px;\n\ttext-align: center;\n}\n\n    "]
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map