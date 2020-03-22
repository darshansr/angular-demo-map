function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_incidentService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/incidentService */
    "./src/app/shared/incidentService.ts");
    /* harmony import */


    var _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./incident-list/incident-list.component */
    "./src/app/incident-list/incident-list.component.ts");
    /* harmony import */


    var _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-area/map-area.component */
    "./src/app/map-area/map-area.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(incidentService) {
        _classCallCheck(this, AppComponent);

        this.incidentService = incidentService;
        this.title = 'traffic-incident-app';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 20000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () {
            return _this.incidentService.getIncident();
          })).subscribe(function (val) {
            return console.log(_this.incidentLists = val);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_incidentService__WEBPACK_IMPORTED_MODULE_3__["IncidentService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-3", "leftcol"], [3, "data"], [1, "col-9", "rightcol"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-incident-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-map-area", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.incidentLists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.incidentLists);
        }
      },
      directives: [_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__["IncidentListComponent"], _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_5__["MapAreaComponent"]],
      styles: [".leftcol[_ngcontent-%COMP%]{\r\n    padding: 3px;\r\n}\r\n\r\n.rightcol[_ngcontent-%COMP%]{\r\n    padding: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdGNvbHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLnJpZ2h0Y29se1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_incidentService__WEBPACK_IMPORTED_MODULE_3__["IncidentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./incident-list/incident-list.component */
    "./src/app/incident-list/incident-list.component.ts");
    /* harmony import */


    var _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-area/map-area.component */
    "./src/app/map-area/map-area.component.ts");
    /* harmony import */


    var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pop-up/pop-up.component */
    "./src/app/pop-up/pop-up.component.ts");
    /* harmony import */


    var _shared_dom_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/dom-helper */
    "./src/app/shared/dom-helper.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_mock_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/mock-api */
    "./src/app/shared/mock-api.ts");
    /* harmony import */


    var _shared_incidentService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/incidentService */
    "./src/app/shared/incidentService.ts");
    /* harmony import */


    var _shared_pipe_delay_conversion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/pipe/delay-conversion */
    "./src/app/shared/pipe/delay-conversion.ts");
    /* harmony import */


    var _shared_sort_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/sort.service */
    "./src/app/shared/sort.service.ts");
    /* harmony import */


    var _shared_directive_sort_by_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/directive/sort-by.directive */
    "./src/app/shared/directive/sort-by.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_dom_helper__WEBPACK_IMPORTED_MODULE_7__["DomFactory"], _shared_incidentService__WEBPACK_IMPORTED_MODULE_10__["IncidentService"], _shared_sort_service__WEBPACK_IMPORTED_MODULE_12__["SortService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"],
        useClass: _shared_mock_api__WEBPACK_IMPORTED_MODULE_9__["MockXHRBackend"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__["IncidentListComponent"], _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_5__["MapAreaComponent"], _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_6__["PopUpComponent"], _shared_pipe_delay_conversion__WEBPACK_IMPORTED_MODULE_11__["DelayConversion"], _shared_directive_sort_by_directive__WEBPACK_IMPORTED_MODULE_13__["SortByDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_4__["IncidentListComponent"], _map_area_map_area_component__WEBPACK_IMPORTED_MODULE_5__["MapAreaComponent"], _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_6__["PopUpComponent"], _shared_pipe_delay_conversion__WEBPACK_IMPORTED_MODULE_11__["DelayConversion"], _shared_directive_sort_by_directive__WEBPACK_IMPORTED_MODULE_13__["SortByDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [_shared_dom_helper__WEBPACK_IMPORTED_MODULE_7__["DomFactory"], _shared_incidentService__WEBPACK_IMPORTED_MODULE_10__["IncidentService"], _shared_sort_service__WEBPACK_IMPORTED_MODULE_12__["SortService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"],
            useClass: _shared_mock_api__WEBPACK_IMPORTED_MODULE_9__["MockXHRBackend"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/incident-list/incident-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/incident-list/incident-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: IncidentListComponent */

  /***/
  function srcAppIncidentListIncidentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidentListComponent", function () {
      return IncidentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/sort.service */
    "./src/app/shared/sort.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pop-up/pop-up.component */
    "./src/app/pop-up/pop-up.component.ts");
    /* harmony import */


    var _shared_directive_sort_by_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/directive/sort-by.directive */
    "./src/app/shared/directive/sort-by.directive.ts");
    /* harmony import */


    var _shared_pipe_delay_conversion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/pipe/delay-conversion */
    "./src/app/shared/pipe/delay-conversion.ts");

    function IncidentListComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncidentListComponent_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var incident_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.modelEvent(incident_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function IncidentListComponent_div_9_Template_div_sorted_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.sort($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "delay");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var incident_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](incident_r1.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](incident_r1.incident);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, incident_r1.delay));
      }
    }

    var IncidentListComponent =
    /*#__PURE__*/
    function () {
      function IncidentListComponent(sortService) {
        _classCallCheck(this, IncidentListComponent);

        this.sortService = sortService;
        this.show = false; //create an interface to map incident

        this.incidentMapping = {
          0: 'default',
          1: 'Jam',
          2: 'Dangerous Conditions',
          3: 'Lane closed'
        };
      }

      _createClass(IncidentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //load the data into UI template by mapping incident value into new key value

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this2 = this;

          // only run when property "data" changed
          if (changes['data'].currentValue != undefined && this.data) {
            this.data.forEach(function (point, index) {
              switch (point.type) {
                case 1:
                  point['incident'] = _this2.incidentMapping['1'];
                  break;

                case 2:
                  point['incident'] = _this2.incidentMapping['2'];
                  break;

                case 3:
                  point['incident'] = _this2.incidentMapping['3'];
                  break;

                default:
                  point['incident'] = _this2.incidentMapping['0'];
                  break;
              }
            });
            this.incidentLists = this.data;
            this.incidentLists = this.incidentLists.sort(function (a, b) {
              return b.delay - a.delay;
            });
          }
        } //Best Approach is to create custom model as service to access across the application

      }, {
        key: "modelEvent",
        value: function modelEvent(incident) {
          this.modalIncident = incident;
          if (typeof incident == "boolean") this.show = incident;
        } //TODO on click of header item in the incident list by ascending and descending

      }, {
        key: "sort",
        value: function sort(prop) {
          this.sortService.sortDelay(this.data, prop);
        }
      }]);

      return IncidentListComponent;
    }();

    IncidentListComponent.ɵfac = function IncidentListComponent_Factory(t) {
      return new (t || IncidentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]));
    };

    IncidentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IncidentListComponent,
      selectors: [["app-incident-list"]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 3,
      consts: [[1, "left-section"], [1, "sidebarlist", "top_bar"], [1, "scrollerDiv"], ["class", "sidebarlist list", 3, "click", 4, "ngFor", "ngForOf"], [3, "incidentValue", "show", "popup"], [1, "sidebarlist", "list", 3, "click"], ["appSortBy", "delay", 3, "sorted"]],
      template: function IncidentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IncidentListComponent_div_9_Template, 8, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-pop-up", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popup", function IncidentListComponent_Template_app_pop_up_popup_10_listener($event) {
            return ctx.modelEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incidentLists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("incidentValue", ctx.modalIncident)("show", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"], _shared_directive_sort_by_directive__WEBPACK_IMPORTED_MODULE_4__["SortByDirective"]],
      pipes: [_shared_pipe_delay_conversion__WEBPACK_IMPORTED_MODULE_5__["DelayConversion"]],
      styles: [".sidebarlist[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  \r\n}\r\n.sidebarlist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 5px;\r\n    word-break: break-all;\r\n}\r\n.sidebarlist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    max-width: 60px;\r\n}\r\n.sidebarlist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    max-width: 70px\r\n}\r\n.sidebarlist.list[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 5px 0;\r\n    border-bottom: 1px solid #022e40;\r\n}\r\n.sidebarlist.list[_ngcontent-%COMP%]:hover {\r\n    background: #16151542;\r\n}\r\n\r\n.top_bar[_ngcontent-%COMP%]   .avtar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.left-section[_ngcontent-%COMP%] {\r\n    background: rgba(2, 46, 64, 0.001);\r\n    box-shadow: 0 0px 3px 2px #666;\r\n}\r\n.dataList[_ngcontent-%COMP%] {\r\n    height: calc(100% - 103px);\r\n    overflow-y: auto;\r\n}\r\n.dataList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .add_collection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    color: #666;\r\n    border-bottom: 1px solid var(--lightgray);\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 55px;\r\n    cursor: pointer;\r\n}\r\n.dataId[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    margin-right: 15px;\r\n    \r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.dataList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    width: 14px;\r\n    height: 14px;\r\n    border-radius: 14px;\r\n}\r\n.scrollerDiv[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    height: calc(100vh - 52px);\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRztBQUNIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0EsR0FBRztBQUNIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFHQSxpQkFBaUI7QUFDakI7SUFDSSxrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW5jaWRlbnQtbGlzdC9pbmNpZGVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiovXHJcbi5zaWRlYmFybGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4uc2lkZWJhcmxpc3QgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5zaWRlYmFybGlzdCBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbn1cclxuLnNpZGViYXJsaXN0IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiA3MHB4XHJcbn1cclxuLnNpZGViYXJsaXN0Lmxpc3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAyMmU0MDtcclxufVxyXG4uc2lkZWJhcmxpc3QubGlzdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNTE1NDI7XHJcbn1cclxuLyoqL1xyXG4udG9wX2JhciAuYXZ0YXIgaW1nIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLyogbGVmdCBzZWN0aW9uICovXHJcbi5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyLCA0NiwgNjQsIDAuMDAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCAycHggIzY2NjtcclxufVxyXG4uZGF0YUxpc3Qge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDNweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5kYXRhTGlzdCBsaSwgLmFkZF9jb2xsZWN0aW9uIGxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRhdGFJZCB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIC8qIC8vYmFja2dyb3VuZDogI2VmZWZlZjsgKi9cclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4uZGF0YUxpc3QgbGkgaSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi5zY3JvbGxlckRpdiB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTJweCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-incident-list',
          templateUrl: './incident-list.component.html',
          styleUrls: ['./incident-list.component.css']
        }]
      }], function () {
        return [{
          type: _shared_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/map-area/map-area.component.ts":
  /*!************************************************!*\
    !*** ./src/app/map-area/map-area.component.ts ***!
    \************************************************/

  /*! exports provided: MapAreaComponent */

  /***/
  function srcAppMapAreaMapAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapAreaComponent", function () {
      return MapAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_dom_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/dom-helper */
    "./src/app/shared/dom-helper.ts");
    /* harmony import */


    var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pop-up/pop-up.component */
    "./src/app/pop-up/pop-up.component.ts");

    var MapAreaComponent =
    /*#__PURE__*/
    function () {
      function MapAreaComponent(dom) {
        _classCallCheck(this, MapAreaComponent);

        this.dom = dom;
        this.points = [];
        this.show = false;
        this.incidentMapping = {
          0: 'default.png',
          1: 'jam.png',
          2: 'dangerous_conditions.png',
          3: 'lane_closed.png'
        };
      }

      _createClass(MapAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createMap();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // only run when property "data" changed
          if (changes['data']) {
            this.createMarker(this.data);
          }
        }
      }, {
        key: "createMap",
        value: function createMap() {
          this.div = document.getElementById('mapView');
          var svg = this.dom.createSvg();
          this.dom.setAttribute(svg, {
            "viewBox": "0 0 3094 1865"
          });
          var staticMap = this.dom.createSvgImg();
          this.dom.setAttribute(staticMap, {
            "id": "staticImage",
            "href": "../../assets/img/berlin_map.png",
            "width": "100%",
            "height": "100%",
            "preserveAspectRatio": "none"
          });
          svg.appendChild(staticMap);
          this.div.appendChild(svg);
        }
      }, {
        key: "createMarker",
        value: function createMarker(data) {
          var _this3 = this;

          this.generateLatLon(data);
          this.points.forEach(function (point, index) {
            data.filter(function (incident) {
              if (incident.id === point.id) {
                var markerImg = _this3.dom.createSvgImg();

                var marker = _this3.incidentMapping[incident.type] || _this3.incidentMapping[0];

                _this3.dom.setAttribute(markerImg, {
                  "id": point.id,
                  "href": '../../assets/img/' + marker,
                  "x": point.latlan[0],
                  "y": point.latlan[1],
                  "width": '100',
                  "height": '100',
                  "class": "cursor",
                  "preserveAspectRatio": "none"
                });

                markerImg.addEventListener("click", function () {
                  return _this3.modelEvent(incident);
                });
                var staticImg = document.getElementById("staticImage");
                staticImg.after(markerImg);
              } else {//points are needs to be defined
              }
            });
          });
        }
      }, {
        key: "generateLatLon",
        value: function generateLatLon(data) {
          var _this4 = this;

          if (data !== undefined) {
            data.forEach(function (val, index) {
              var x = Math.floor(Math.random() * 3000);
              var y = Math.floor(Math.random() * 1800);

              _this4.points.push({
                id: val.id,
                latlan: [x, y]
              });
            });
          }
        }
      }, {
        key: "modelEvent",
        value: function modelEvent(incident) {
          this.modalIncident = incident;
          if (typeof incident == "boolean") this.show = incident;
        }
      }]);

      return MapAreaComponent;
    }();

    MapAreaComponent.ɵfac = function MapAreaComponent_Factory(t) {
      return new (t || MapAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dom_helper__WEBPACK_IMPORTED_MODULE_1__["DomFactory"]));
    };

    MapAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapAreaComponent,
      selectors: [["app-map-area"]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "right-section"], ["id", "mapView"], [3, "incidentValue", "show", "popup"]],
      template: function MapAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pop-up", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popup", function MapAreaComponent_Template_app_pop_up_popup_2_listener($event) {
            return ctx.modelEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("incidentValue", ctx.modalIncident)("show", ctx.show);
        }
      },
      directives: [_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"]],
      styles: [".cursor[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.dataListTable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.dataListTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWFyZWEvbWFwLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcC1hcmVhL21hcC1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSaWdodCBzZWN0aW9uICovXHJcbi5jdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRhTGlzdFRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kYXRhTGlzdFRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-area',
          templateUrl: './map-area.component.html',
          styleUrls: ['./map-area.component.css']
        }]
      }], function () {
        return [{
          type: _shared_dom_helper__WEBPACK_IMPORTED_MODULE_1__["DomFactory"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pop-up/pop-up.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pop-up/pop-up.component.ts ***!
    \********************************************/

  /*! exports provided: PopUpComponent */

  /***/
  function srcAppPopUpPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopUpComponent", function () {
      return PopUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PopUpComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopUpComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.modelClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Magnitude of delay ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "From: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "To: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Details: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.incidentValue.magnitudeDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.incidentValue.from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.incidentValue.to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.incidentValue.details, "");
      }
    }

    var PopUpComponent =
    /*#__PURE__*/
    function () {
      function PopUpComponent() {
        _classCallCheck(this, PopUpComponent);

        this.popup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.incidentMagnitude = {
          0: 'Unknown',
          1: 'Minor',
          2: 'Moderate',
          3: 'Major'
        };
      }

      _createClass(PopUpComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // only run when property "data" changed
          if (changes['incidentValue'].currentValue != undefined && this.incidentValue) {
            for (var item in this.incidentMagnitude) {
              if (this.incidentValue['magnitude'] === parseInt(item)) {
                this.incidentValue['magnitudeDetails'] = this.incidentMagnitude[this.incidentValue['magnitude']];
              }
            }

            this.modelOpen();
          } else {
            this.show = false;
          }
        }
      }, {
        key: "modelOpen",
        value: function modelOpen() {
          this.show = true;
        }
      }, {
        key: "modelClose",
        value: function modelClose() {
          this.popup.emit(false);
        }
      }]);

      return PopUpComponent;
    }();

    PopUpComponent.ɵfac = function PopUpComponent_Factory(t) {
      return new (t || PopUpComponent)();
    };

    PopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopUpComponent,
      selectors: [["app-pop-up"]],
      inputs: {
        incidentValue: "incidentValue",
        show: "show"
      },
      outputs: {
        popup: "popup"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "modelBox", 3, "click", 4, "ngIf"], [1, "modelBox", 3, "click"], [1, "model"], [1, "model-head"], [1, "model-content"]],
      template: function PopUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopUpComponent_div_0_Template, 20, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".modelBox[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.1);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.modelBox[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #fff;\r\n    max-width: 500px;\r\n    box-shadow: 0 0 15px #333;\r\n    border-radius: 5px;\r\n}\r\n.modelBox[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n}\r\n.modelBox[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .model-head[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wLXVwL3BvcC11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9wb3AtdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RlbEJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vZGVsQm94IC5tb2RlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5tb2RlbEJveCAubW9kZWwgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubW9kZWxCb3ggLm1vZGVsIC5tb2RlbC1oZWFkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pop-up',
          templateUrl: './pop-up.component.html',
          styleUrls: ['./pop-up.component.css']
        }]
      }], null, {
        incidentValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directive/sort-by.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/directive/sort-by.directive.ts ***!
    \*******************************************************/

  /*! exports provided: SortByDirective */

  /***/
  function srcAppSharedDirectiveSortByDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByDirective", function () {
      return SortByDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortByDirective =
    /*#__PURE__*/
    function () {
      function SortByDirective() {
        _classCallCheck(this, SortByDirective);

        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SortByDirective, [{
        key: "onClick",
        value: function onClick() {
          event.preventDefault();
          this.sorted.next(this.sortProperty); // Raise clicked event
        }
      }, {
        key: "sortBy",
        set: function set(value) {
          this.sortProperty = value;
        }
      }]);

      return SortByDirective;
    }();

    SortByDirective.ɵfac = function SortByDirective_Factory(t) {
      return new (t || SortByDirective)();
    };

    SortByDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SortByDirective,
      selectors: [["", "appSortBy", ""]],
      hostBindings: function SortByDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortByDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        sortBy: ["appSortBy", "sortBy"]
      },
      outputs: {
        sorted: "sorted"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appSortBy]'
        }]
      }], function () {
        return [];
      }, {
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sortBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['appSortBy']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/dom-helper.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/dom-helper.ts ***!
    \**************************************/

  /*! exports provided: DomFactory */

  /***/
  function srcAppSharedDomHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomFactory", function () {
      return DomFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DomFactory =
    /*#__PURE__*/
    function () {
      function DomFactory() {
        _classCallCheck(this, DomFactory);
      }

      _createClass(DomFactory, [{
        key: "elementProducer",
        value: function elementProducer(tag, attribute, value, content) {
          var element = document.createElement(tag);

          if (typeof attribute !== 'undefined') {
            element.setAttribute(attribute, value);
          }

          if (typeof content !== 'undefined') {
            element.textContent = content;
          }

          return element;
        }
      }, {
        key: "svgElement",
        value: function svgElement(tag, value) {
          return document.createElementNS(tag, value);
        }
      }, {
        key: "svgImgElement",
        value: function svgImgElement(tag, value) {
          return document.createElementNS(tag, value);
        }
      }, {
        key: "createSvg",
        value: function createSvg() {
          return this.svgElement("http://www.w3.org/2000/svg", "svg");
        }
      }, {
        key: "createSvgImg",
        value: function createSvgImg() {
          return this.svgImgElement("http://www.w3.org/2000/svg", "image");
        }
      }, {
        key: "createItem",
        value: function createItem() {
          return this.elementProducer('li', 'list-item', 'class');
        }
      }, {
        key: "createList",
        value: function createList() {
          return this.elementProducer('ul', 'results-list', 'class');
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(tag, attribute) {
          for (var prop in attribute) {
            tag.setAttribute(prop, attribute[prop]);
          }

          return tag;
        }
      }]);

      return DomFactory;
    }();

    DomFactory.ɵfac = function DomFactory_Factory(t) {
      return new (t || DomFactory)();
    };

    DomFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DomFactory,
      factory: DomFactory.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/incidentService.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/incidentService.ts ***!
    \*******************************************/

  /*! exports provided: IncidentService */

  /***/
  function srcAppSharedIncidentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidentService", function () {
      return IncidentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //import {map } from 'rxjs/add/operator/map';


    var IncidentService =
    /*#__PURE__*/
    function () {
      function IncidentService(_http) {
        _classCallCheck(this, IncidentService);

        this._http = _http;
      }

      _createClass(IncidentService, [{
        key: "getIncident",
        value: function getIncident() {
          var url = '../../assets/incidents.json';
          return this._http.get('incidentLists').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.incidentLists;
          }));
        }
      }]);

      return IncidentService;
    }();

    IncidentService.ɵfac = function IncidentService_Factory(t) {
      return new (t || IncidentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    IncidentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IncidentService,
      factory: IncidentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/mock-api.ts":
  /*!************************************!*\
    !*** ./src/app/shared/mock-api.ts ***!
    \************************************/

  /*! exports provided: MockXHRBackend */

  /***/
  function srcAppSharedMockApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockXHRBackend", function () {
      return MockXHRBackend;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MockXHRBackend =
    /*#__PURE__*/
    function () {
      function MockXHRBackend() {
        _classCallCheck(this, MockXHRBackend);

        this.incidentLists = [{
          "id": "europe_HD_DE_TTL6000",
          "type": 1,
          "point": {
            "x": 13.072789,
            "y": 52.388527
          },
          "from": "Am Buchhorst (Arthur-Scheunert-Allee/L78)",
          "to": "Potsdam-Brauhausberg - Friedrich-Engels-Straße (Heinrich-Mann-Allee/L78)",
          "details": "stationary traffic",
          "delay": 232,
          "magnitude": 2
        }, {
          "id": "europe_HD_DE_TTL1211",
          "type": 2,
          "point": {
            "x": 13.045512,
            "y": 52.395312
          },
          "from": "Breite Straße - Feuerbachstraße (Zeppelinstraße/B2)",
          "to": "Schopenhauerstraße (Hegelallee/B2)",
          "details": "broken down vehicle",
          "delay": 135,
          "magnitude": 1
        }, {
          "id": "europe_HD_DE_TTL5231",
          "type": 1,
          "point": {
            "x": 13.57957,
            "y": 52.462065
          },
          "from": "Gehsenerstraße - Mittelheide (Mahlsdorfer Straße/L1152)",
          "to": "Seelenbinderstraße (Bahnhofstraße/L1152)",
          "details": "stationary traffic",
          "delay": 166,
          "magnitude": 1
        }, {
          "id": "europe_HD_DE_TTL4451",
          "type": 1,
          "point": {
            "x": 13.347768,
            "y": 52.435064
          },
          "from": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
          "to": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
          "details": "queuing traffic",
          "delay": 876,
          "magnitude": 3
        }, {
          "id": "europe_HD_DE_TTL2451",
          "type": 3,
          "point": {
            "x": 13.498329,
            "y": 52.481859
          },
          "from": "Blockdammweg (Rummelsburger Landstraße/L1075)",
          "to": "Treskowallee - Edisonstraße (Rummelsburger Straße/L1075)",
          "details": "carriageway reduced to one lane",
          "delay": 190,
          "magnitude": 1
        }];
      }

      _createClass(MockXHRBackend, [{
        key: "handle",
        value: function handle(request) {
          var _this5 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            var responseOptions;

            switch (request.method) {
              case 'GET':
                if (request.url === 'incidentLists') {
                  responseOptions = {
                    body: {
                      incidentLists: _this5.incidentLists
                    },
                    status: 200
                  };
                }

            }

            var responseObject = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"](responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return function () {};
          });
        }
      }]);

      return MockXHRBackend;
    }();
    /***/

  },

  /***/
  "./src/app/shared/pipe/delay-conversion.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/pipe/delay-conversion.ts ***!
    \*************************************************/

  /*! exports provided: DelayConversion */

  /***/
  function srcAppSharedPipeDelayConversionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelayConversion", function () {
      return DelayConversion;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DelayConversion =
    /*#__PURE__*/
    function () {
      function DelayConversion() {
        _classCallCheck(this, DelayConversion);
      }

      _createClass(DelayConversion, [{
        key: "transform",
        value: function transform(secondsValue) {
          if (secondsValue === 0) {
            return 'No delay';
          }

          var hours = Math.floor(secondsValue / 3600),
              minutes = Math.floor((secondsValue - hours * 3600) / 60),
              seconds = secondsValue - hours * 3600 - minutes * 60;
          return (hours ? hours + 'h ' : '') + (minutes ? minutes + 'm ' : '') + (seconds ? seconds + 's' : ''); // throw new Error("Method not implemented.");
        }
      }]);

      return DelayConversion;
    }();

    DelayConversion.ɵfac = function DelayConversion_Factory(t) {
      return new (t || DelayConversion)();
    };

    DelayConversion.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "delay",
      type: DelayConversion,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DelayConversion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'delay'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sort.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/sort.service.ts ***!
    \****************************************/

  /*! exports provided: SortService */

  /***/
  function srcAppSharedSortServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortService", function () {
      return SortService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortService =
    /*#__PURE__*/
    function () {
      function SortService() {
        _classCallCheck(this, SortService);
      }

      _createClass(SortService, [{
        key: "sortDelay",
        value: function sortDelay(incidentList, _sortDelay) {
          console.log(incidentList, _sortDelay);
        }
      }]);

      return SortService;
    }();

    SortService.ɵfac = function SortService_Factory(t) {
      return new (t || SortService)();
    };

    SortService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SortService,
      factory: SortService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\600041205\Desktop\traffic-incident\traffic-incident-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map