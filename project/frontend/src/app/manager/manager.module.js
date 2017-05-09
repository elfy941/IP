"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var manager_routes_1 = require("../manager/manager.routes");
var manager_home_component_1 = require("../manager/manager-home.component");
var hotel_service_1 = require("../hotel/hotel.service");
var manager_profile_component_1 = require("../manager/manager-profile.component");
var create_employee_1 = require("../manager/create-employee");
var employee_service_1 = require("../employee/employee.service");
var ManagerModule = (function () {
    function ManagerModule() {
    }
    return ManagerModule;
}());
ManagerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(manager_routes_1.userRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            manager_home_component_1.ManagerHomeComponent,
            manager_profile_component_1.ManagerProfileComponent,
            create_employee_1.CreateEmployeeComponent
        ],
        providers: [
            hotel_service_1.HotelService,
            employee_service_1.EmployeeService
        ]
    })
], ManagerModule);
exports.ManagerModule = ManagerModule;
//# sourceMappingURL=manager.module.js.map