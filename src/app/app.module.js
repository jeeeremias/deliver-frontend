"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var app_component_1 = require("./app.component");
var route_component_1 = require("./route/route.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCgwb2-5lARCTURTC0_eFf5fV9_1tY4MQs',
                libraries: ['places', 'geometry']
            }),
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            route_component_1.RouteComponent
        ],
        bootstrap: [
            route_component_1.RouteComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map