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
var employee_routs_1 = require("../employee/employee.routs");
var employee_service_1 = require("../employee/employee.service");
var employee_home_component_1 = require("../employee/employee-home.component");
var hotel_component_1 = require("../hotel/hotel-component");
var hotel_service_1 = require("../hotel/hotel.service");
var room_component_1 = require("../room/room.component");
var room_list_component_1 = require("../room/room-list.component");
var add_room_component_1 = require("../room/add-room.component");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(employee_routs_1.userRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            employee_home_component_1.EmployeeHomeComponent,
            hotel_component_1.HotelComponent,
            room_component_1.RoomComponent,
            room_list_component_1.RoomListComponent,
            add_room_component_1.AddRoomComponent
        ],
        providers: [
            employee_service_1.EmployeeService,
            hotel_service_1.HotelService,
        ]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map