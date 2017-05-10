"use strict";
var employee_home_component_1 = require("../employee/employee-home.component");
var hotel_component_1 = require("../hotel/hotel-component");
var add_room_component_1 = require("../room/add-room.component");
exports.userRoutes = [
    {
        path: 'home',
        component: employee_home_component_1.EmployeeHomeComponent
    },
    {
        path: 'hotel/:id',
        component: hotel_component_1.HotelComponent
    },
    {
        path: 'add',
        component: add_room_component_1.AddRoomComponent
    }
];
//# sourceMappingURL=employee.routs.js.map