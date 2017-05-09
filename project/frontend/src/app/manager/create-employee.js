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
var CreateEmployeeComponent = (function () {
    function CreateEmployeeComponent(router, empService, userService, auth) {
        this.router = router;
        this.empService = empService;
        this.userService = userService;
        this.auth = auth;
    }
    CreateEmployeeComponent.prototype.cancel = function () {
        this.router.navigate(['/manager/profile']);
    };
    CreateEmployeeComponent.prototype.create = function (createEmpForm) {
        console.log(createEmpForm);
        var idEmp = this.empService.generateId();
        this.emp = {
            id: idEmp,
            firstName: createEmpForm.firstName,
            lastName: createEmpForm.lastName,
            email: createEmpForm.email,
            password: createEmpForm.password
        };
        this.empService.addEmployee(this.emp);
        this.userService.addEmployeeToManager(this.auth.currentUser.id, this.emp);
        this.router.navigate(['/manager/profile']);
    };
    return CreateEmployeeComponent;
}());
CreateEmployeeComponent = __decorate([
    core_1.Component({
        templateUrl: "app/manager/create-employee.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, employee_service_1.EmployeeService,
        user_service_1.UserService, auth_service_1.AuthService])
], CreateEmployeeComponent);
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//# sourceMappingURL=create-employee.js.map