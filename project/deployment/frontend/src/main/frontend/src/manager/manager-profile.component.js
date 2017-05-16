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
var auth_service_1 = require("../services/auth.service");
var user_service_1 = require("../services/user.service");
var employee_service_1 = require("../employee/employee.service");
var ManagerProfileComponent = (function () {
    function ManagerProfileComponent(auth, router, userService, empService) {
        this.auth = auth;
        this.router = router;
        this.userService = userService;
        this.empService = empService;
        this.employees = [];
        this.hotels = [];
        this.employees = this.getEmployees();
        this.hotels = this.getHotels();
    }
    ManagerProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = this.auth.currentUser;
    };
    ManagerProfileComponent.prototype.cancel = function () {
        this.router.navigate(['/manager/home']);
    };
    ManagerProfileComponent.prototype.addEmployee = function () {
        this.router.navigate(['/manager/createEmp']);
    };
    ManagerProfileComponent.prototype.getHotels = function () {
        return this.userService.getHotelsForUser(this.auth.currentUser.id);
    };
    //return employees for current user
    ManagerProfileComponent.prototype.getEmployees = function () {
        return this.userService.getUserEmployees(this.auth.currentUser.id);
    };
    //not working
    ManagerProfileComponent.prototype.remove = function (emp) {
        console.log(emp);
        this.empService.removeEmp(emp.id);
        this.userService.removeEmployeeFromManager(this.auth.currentUser.id, emp.id);
    };
    return ManagerProfileComponent;
}());
ManagerProfileComponent = __decorate([
    core_1.Component({
        templateUrl: "app/manager/manager-profile.component.html"
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        user_service_1.UserService,
        employee_service_1.EmployeeService])
], ManagerProfileComponent);
exports.ManagerProfileComponent = ManagerProfileComponent;
//# sourceMappingURL=manager-profile.component.js.map