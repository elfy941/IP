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
var employee_service_1 = require("../employee/employee.service");
var user_service_1 = require("../services/user.service");
var auth_service_1 = require("../services/auth.service");
var EmployeeHomeComponent = (function () {
    function EmployeeHomeComponent(empService, userService, authService, router) {
        this.empService = empService;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.manager = this.userService.getManagerForEmployee(this.authService.currentUser.id);
        console.log(this.manager);
        this.hotels = this.manager.hotels;
    }
    EmployeeHomeComponent.prototype.goToHotel = function (id) {
        this.router.navigate(['emp/hotel/' + id]);
    };
    return EmployeeHomeComponent;
}());
EmployeeHomeComponent = __decorate([
    core_1.Component({
        templateUrl: "app/employee/employee-home.component.html"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        user_service_1.UserService,
        auth_service_1.AuthService,
        router_1.Router])
], EmployeeHomeComponent);
exports.EmployeeHomeComponent = EmployeeHomeComponent;
//# sourceMappingURL=employee-home.component.js.map