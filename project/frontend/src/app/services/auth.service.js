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
var user_service_1 = require("../services/user.service");
var employee_service_1 = require("../employee/employee.service");
var AuthService = (function () {
    function AuthService(userService, router, employeeService) {
        this.userService = userService;
        this.router = router;
        this.employeeService = employeeService;
    }
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.login = function (username, password) {
        if (this.employeeService.getEmployee(username, password) != null) {
            this.employeeService.manager = this.employeeService.getEmployee(username, password);
            console.log(this.employeeService.manager);
            this.router.navigate(['home']);
        }
        if (this.userService.getUser(username, password) != null) {
            this.currentUser = this.userService.getUser(username, password);
            this.router.navigate(['home']);
        }
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        this.router.navigate(['home']);
    };
    /*
        shitty way to do it
    */
    AuthService.prototype.isAdmin = function () {
        if (this.isAuthenticated()) {
            return this.currentUser.role === 'admin';
        }
    };
    AuthService.prototype.isManager = function () {
        if (this.isAuthenticated()) {
            return this.currentUser.role === 'manager';
        }
    };
    AuthService.prototype.isEmployee = function () {
        return this.isAuthenticated() && !this.isManager() && !this.isAdmin();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router,
        employee_service_1.EmployeeService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map