"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var hotel_service_1 = require("../hotel/hotel.service");
var employee_service_1 = require("../employee/employee.service");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function (email, password) {
        var user = exports.USERS.filter(function (u) { return u.email === email; })[0];
        if (user.password === password)
            return user;
        else
            return null;
    };
    UserService.prototype.getHotelsForUser = function (id) {
        var hotels = [];
        for (var _i = 0, USERS_1 = exports.USERS; _i < USERS_1.length; _i++) {
            var user = USERS_1[_i];
            if (user.id === id) {
                hotels = user.hotels;
            }
        }
        return hotels;
    };
    UserService.prototype.getUserEmployees = function (id) {
        var emp = [];
        for (var _i = 0, USERS_2 = exports.USERS; _i < USERS_2.length; _i++) {
            var user = USERS_2[_i];
            if (user.id === id) {
                emp = user.employees;
            }
        }
        return emp;
    };
    UserService.prototype.addEmployeeToManager = function (id, empl) {
        for (var _i = 0, USERS_3 = exports.USERS; _i < USERS_3.length; _i++) {
            var user = USERS_3[_i];
            if (user.id === id) {
                user.employees.push(empl);
            }
        }
    };
    UserService.prototype.removeEmployeeFromManager = function (idMgr, idEmp) {
        for (var _i = 0, USERS_4 = exports.USERS; _i < USERS_4.length; _i++) {
            var user = USERS_4[_i];
            if (user.id === idMgr) {
                for (var _a = 0, _b = user.employees; _a < _b.length; _a++) {
                    var emp = _b[_a];
                    if (emp.id === idEmp) {
                        user.employees.slice(user.employees.indexOf(emp), 1);
                    }
                }
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
exports.USERS = [
    {
        id: 1,
        firstName: "Admin",
        lastName: "Admin",
        email: "admin@gmail.com",
        role: "admin",
        password: "admin",
        hotels: [],
        employees: []
    },
    {
        id: 2,
        firstName: "Manager",
        lastName: "Manager",
        email: "manager@gmail.com",
        role: "manager",
        password: "manager",
        hotels: [hotel_service_1.HOTELS[0], hotel_service_1.HOTELS[1]],
        employees: [employee_service_1.EMPLOYEES[0]]
    }
];
//# sourceMappingURL=user.service.js.map