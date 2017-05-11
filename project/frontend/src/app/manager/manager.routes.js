"use strict";
var manager_home_component_1 = require("../manager/manager-home.component");
var manager_profile_component_1 = require("../manager/manager-profile.component");
var create_employee_1 = require("../manager/create-employee");
exports.userRoutes = [
    {
        path: 'home',
        component: manager_home_component_1.ManagerHomeComponent
    },
    {
        path: 'profile',
        component: manager_profile_component_1.ManagerProfileComponent
    },
    {
        path: 'createEmp',
        component: create_employee_1.CreateEmployeeComponent
    },
];
//# sourceMappingURL=manager.routes.js.map