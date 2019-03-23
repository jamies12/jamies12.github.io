(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageContainer {\r\n    padding-left: 30px;\r\n}\r\n\r\n.titleContainer {\r\n    color: #C2C2C3;\r\n    /* padding-left: 20px; */\r\n}\r\n\r\n.Title {\r\n    font-size: 65px;\r\n}\r\n\r\n#siteLogo {\r\n    \r\n}\r\n\r\n#socialWrapper {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" id=\"pageContainer\">\n  <div class=\"row no-gutters\">\n    <div class=\"titleContainer col-6\">\n      <h1 class=\"Title\">\n         {{ title }}\n      </h1>\n    </div>\n    <!-- <div class=\"col-6\" id=\"logoContainer\">\n        <img src=\"assets/Site Logo.png\" alt=\"Logo\" class=\"img-fluid\" id=\"siteLogo\" />\n    </div> -->\n  </div>\n  \n  <div class=\"row my-4\" id=\"socialWrapper\">\n    <app-socials></app-socials>\n  </div>\n  <div class=\"row no-gutters\">\n    <app-projects></app-projects>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jamie Simpson';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
            // animation triggers go here
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socials/socials.component */ "./src/app/socials/socials.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _socials_socials_component__WEBPACK_IMPORTED_MODULE_4__["SocialsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-projects.ts":
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [
    { id: 1, name: 'Miami Runner', date: 'September 2016', url: 'https://miami-runner.herokuapp.com/', image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=T9FrpbrsjPYRkspgoYYWI3GQQmc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3HheMLeLLHwuVRDcC8clAYwd_L6QTDoD5W4It_pftxxjsK3Io24ZxUBbFImi24', description: 'My first project at GA was an endless-runner game built using HTML, CSS and jQuery. Tackling the issue of collision and object-oriented programming proved to be an insightful project for me. Being able to self-manage my time and priorities helped me achieve the end result.', languages: 'HTML, JavaScript, CSS, jQuery' },
    { id: 2, name: 'Conquiztador', date: 'October 2016', url: 'https://conquiztadors.herokuapp.com/', image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=WCQyVn2cdUY9UA6ByZ1C43FIdmo%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdfybgcMLdLLqluVVCfy0clAI0e_KgRmHlD8W-KonqeolwipfjcY24ZxUBbFImi24', description: 'Built around the Google Maps and Marvel Comics API, this app tests your knowledge on all the countries of the world with a Marvel-based theme. Users can choose a hero to represent them as they compete against an AI to have the most points by the end of the game. Originally planned as a tactical game based on RISK, adding the Marvel theme gave a much-needed identity to project.', languages: 'HTML, JavaScript, CSS, Express, Node.js, bcrypt' },
    { id: 3, name: 'Align', date: 'November 2016', url: 'https://tranquil-plateau-11910.herokuapp.com/', image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Mvh45IhvjtvB2OB3CockuaY8yMk%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3bgeseJeuemuV4Ufy8clANgefKhEjLkD5C-KYu-et0nj8LhcY24ZxUBbFI8lWxI', description: 'A web based application built with mobile displays in mind. Align was made with the idea of mindfulness and mental well-being, giving the user a place to go to and relax through various means. This being our second group-project I made all music-based sessions as well as handling the journal, search engine and database. I also wrote all music within the application.', languages: 'HTML, MongoDB, Express, AngularJS, Node.js, ES6, bcrypt, SCSS' },
    { id: 4, name: 'Spaces', date: 'December 2016', url: 'https://spaces-wdi.herokuapp.com/', image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=3L8piPOG3tRUpnhQS7wEMp7yqn4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3_hfsDcfOPwuV9AfSoclFE7d_KgEzPoD5e_K9y8e9QnjJfmJ424ZxUBbFImi24', description: 'A RESTful app built the purpose of allowing the user to create their own space with their own purpose in mind. Allowing the user to upload their own text, images, audio and video as well as change positions and size was a massive undertaking. Self-management and prioritizing tasks in order of necessity proved invaluable to achieving the end result.', languages: 'HTML, Ruby on Rails, SQL, AngularJS, SCSS, JSON, bcrypt' }
];


/***/ }),

/***/ "./src/app/mock-socials.ts":
/*!*********************************!*\
  !*** ./src/app/mock-socials.ts ***!
  \*********************************/
/*! exports provided: SOCIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIALS", function() { return SOCIALS; });
var SOCIALS = [
    { id: 1, name: 'Github', url: 'https://github.com/jamies12', image: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png' },
    { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/jamie-simpson/', image: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png' },
    { id: 3, name: 'Twitter', url: 'https://twitter.com/jambolovepanda', image: 'https://cdn1.iconfinder.com/data/icons/capsocial/500/twitter-512.png' }
];


/***/ }),

/***/ "./src/app/project-details/project-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projectImage {\r\n    max-width: 70%;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#projectWrapper {\r\n    /* background-color: #04080c; */\r\n    background-image: linear-gradient(to bottom, #04080c00, #04080c );\r\n    padding: 20px;\r\n    color: #C2C2C3;\r\n    margin-bottom: 20px;\r\n    border-bottom-left-radius: 3px;\r\n    border-bottom-right-radius: 3px;\r\n}\r\n\r\n#projectTitle {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/project-details/project-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" id=\"projectContainer\">\n  <h2 id=\"sectionTitle\" style=\"color:white;\">Project Details</h2> -->\n  <!-- <ul class=\"listItem\">\n    <li *ngFor=\"let project of projects\"> -->\n      <!-- <img src=\"{{project.image}}\" alt=\"{{ project.name | lowercase }}\" class=\"projectImage\"/> -->\n      <!-- <h3><a target=\"_blank\" rel=\"noopener\" href=\"{{project.url}}\">{{project.name | uppercase}}</a></h3>\n    </li>\n  </ul> -->\n<!-- </div> -->\n\n<div *ngIf=\"project\" id=\"projectWrapper\">\n\n  <h2 id=\"projectTitle\">{{project.name | uppercase}}</h2>\n  <!-- <div> -->\n    <img src=\"{{project.image}}\" alt=\"{{ project.name | lowercase }}\" class=\"img-fluid rounded mx-auto d-block\" id=\"projectImage\"/>\n    <h3>{{project.date}}</h3>\n    <p><span>Built with: </span>{{project.languages}}<br/>{{project.description}}</p>\n\n  <!-- </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/app/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PROJECTDETAILS } from '../mock-projectdetails';

var ProjectDetailsComponent = /** @class */ (function () {
    // projectdetails = PROJECTDETAILS;
    function ProjectDetailsComponent() {
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_1__["Project"])
    ], ProjectDetailsComponent.prototype, "project", void 0);
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Project Styling */\r\n\r\n#projectContainer {\r\n    color: #C2C2C3;\r\n    /* padding-left: 20px; */\r\n}\r\n\r\n/* .projectItem {\r\n    border: 1px solid #0A1E24;\r\n    border-radius: 2px;\r\n    background-color: #050E11;\r\n    text-align: center;\r\n} */\r\n\r\n.projectItem > div {\r\n    border-right: 1px solid black;\r\n    margin: 2px;\r\n    border-radius: 2px;\r\n    background-color: #050E11;\r\n    text-align: center;\r\n}\r\n\r\n.projectLink {\r\n    min-width: 263.5px;\r\n}\r\n\r\n.projectLink:hover {\r\n    box-shadow: 0px 0px 18px;\r\n    transition: 0.23s ease;\r\n}\r\n\r\n.listItem {\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\n\r\n.listItem li {\r\n    /* list-style-type: none; */\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" id=\"projectContainer\">\n  <!-- <table id=\"projectContainer\">\n    <th>\n      <tr>\n        <td><h2 id=\"sectionTitle\">Projects</h2></td>\n      </tr>\n     </th>\n     <tbody>\n      <tr>\n        <td class=\"project\" *ngFor=\"let project of projects\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\">\n          <h3>{{project.name | uppercase}}</h3>\n         </td>\n       </tr>\n     </tbody>\n  </table> -->\n  <!-- <div class=\"\"> -->\n    <h2>Projects</h2>\n  <!-- </div> -->\n\n  <div class=\"row projectItem\">\n    <div class=\"col projectLink\" *ngFor=\"let project of projects\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\">\n      <h3>{{project.name | uppercase}}</h3>\n    </div>\n  </div>\n  \n  <!-- <ul class=\"listItem\">\n    <li *ngFor=\"let project of projects\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\">\n      <h3>{{project.name | uppercase}}</h3>\n    </li>\n  </ul> -->\n</div>\n<!-- <div class=\"col-8 align-self-end\"> -->\n  <app-project-details [project]=\"selectedProject\"></app-project-details>\n<!-- </div> -->\n\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-projects */ "./src/app/mock-projects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = _mock_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    }
    ProjectsComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/socials/socials.component.css":
/*!***********************************************!*\
  !*** ./src/app/socials/socials.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#socialContainer {\r\n    border-radius: 2px;\r\n    background-color: #050E11;\r\n}\r\n\r\n#socialContainer:hover {\r\n    box-shadow: 0px 0px 18px;\r\n    transition: 0.23s ease;\r\n}\r\n\r\n.socials {\r\n    list-style-type: none;\r\n    padding-left: 10px;\r\n}\r\n\r\n.socialIcon {\r\n    height: 30px;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n.socials h2 {\r\n    display: inline-block;\r\n}\r\n\r\n.socialLink {\r\n    color: #C4BBB6;\r\n}\r\n\r\n.listItem {\r\n    display: inline-block;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/socials/socials.component.html":
/*!************************************************!*\
  !*** ./src/app/socials/socials.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"socialContainer\">\n  <ul class=\"socials\">\n    <li *ngFor=\"let social of socials\" class=\"listItem\">\n        <img src=\"{{social.image}}\" alt=\"{{social.name | lowercase}} icon\" class=\"socialIcon\"/>\n        <h2><a class=\"socialLink\" target=\"_blank\" rel=\"noopener\" href=\"{{social.url}}\">{{social.name | uppercase}}</a></h2>\n        <br style=\"float: clear;\"/>\n        \n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/socials/socials.component.ts":
/*!**********************************************!*\
  !*** ./src/app/socials/socials.component.ts ***!
  \**********************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_socials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-socials */ "./src/app/mock-socials.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialsComponent = /** @class */ (function () {
    function SocialsComponent() {
        this.socials = _mock_socials__WEBPACK_IMPORTED_MODULE_1__["SOCIALS"];
    }
    SocialsComponent.prototype.ngOnInit = function () {
    };
    SocialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socials',
            template: __webpack_require__(/*! ./socials.component.html */ "./src/app/socials/socials.component.html"),
            styles: [__webpack_require__(/*! ./socials.component.css */ "./src/app/socials/socials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialsComponent);
    return SocialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jamie\Desktop\Projects\jamies12.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map