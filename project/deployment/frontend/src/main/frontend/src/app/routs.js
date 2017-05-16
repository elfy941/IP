"use strict";
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var search_result_component_1 = require("./search/search-result.component");
exports.appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'manager',
        loadChildren: 'app/manager/manager.module#ManagerModule'
    },
    {
        path: 'emp',
        loadChildren: 'app/employee/employee.module#EmployeeModule'
    },
    {
        path: 'result',
        component: search_result_component_1.SearchResult
    }
];
//# sourceMappingURL=routs.js.map