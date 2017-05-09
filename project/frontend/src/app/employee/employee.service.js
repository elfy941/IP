"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.addEmployee = function (empl) {
        exports.EMPLOYEES.push(empl);
    };
    EmployeeService.prototype.generateId = function () {
        return exports.EMPLOYEES[exports.EMPLOYEES.length - 1].id + 1;
    };
    EmployeeService.prototype.removeEmp = function (id) {
        for (var _i = 0, EMPLOYEES_1 = exports.EMPLOYEES; _i < EMPLOYEES_1.length; _i++) {
            var emp = EMPLOYEES_1[_i];
            if (emp.id === id) {
                console.log(exports.EMPLOYEES.indexOf(emp));
                exports.EMPLOYEES.splice(exports.EMPLOYEES.indexOf(emp), 1);
            }
        }
    };
    EmployeeService.prototype.getEmployee = function (email, password) {
        for (var _i = 0, EMPLOYEES_2 = exports.EMPLOYEES; _i < EMPLOYEES_2.length; _i++) {
            var emp = EMPLOYEES_2[_i];
            if (emp.email === email && emp.password === password) {
                return emp;
            }
        }
        return null;
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
exports.EMPLOYEES = [
    {
        id: 1,
        firstName: "Ion",
        lastName: "Gheorghe",
        email: "emp@gmail.com",
        password: "emp"
    }
];
//# sourceMappingURL=employee.service.js.map