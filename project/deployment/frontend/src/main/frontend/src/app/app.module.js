"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./nav/navbar.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var auth_service_1 = require("./services/auth.service");
var user_service_1 = require("./services/user.service");
var employee_service_1 = require("./employee/employee.service");
var search_component_1 = require("./search/search.component");
var search_service_1 = require("./search/search.service");
var search_result_component_1 = require("./search/search-result.component");
var hotel_service_1 = require("./hotel/hotel.service");
var angular2_toaster_1 = require("angular2-toaster");
var routs_1 = require("./routs");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routs_1.appRoutes),
            forms_1.FormsModule,
            angular2_toaster_1.ToasterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavigationComponent,
            home_component_1.HomeComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            search_component_1.SearchComponent,
            search_result_component_1.SearchResult
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            auth_service_1.AuthService,
            user_service_1.UserService,
            employee_service_1.EmployeeService,
            search_service_1.SearchService,
            hotel_service_1.HotelService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map