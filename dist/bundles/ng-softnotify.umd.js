(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ng-softnotify', ['exports', '@angular/core', '@angular/common', '@angular/animations'], factory) :
    (global = global || self, factory(global['ng-softnotify'] = {}, global.ng.core, global.ng.common, global.ng.animations));
}(this, function (exports, core, common, animations) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var SoftNotifyService = /** @class */ (function () {
        function SoftNotifyService() {
            this.notifications = [];
        }
        SoftNotifyService.prototype.launchNotification = function (notification) {
            this.notifications.push(notification);
        };
        SoftNotifyService.prototype.deleteNotification = function (notification) {
            var deleteIndex = this.notifications.indexOf(notification);
            this.notifications.splice(deleteIndex, 1);
        };
        SoftNotifyService = __decorate([
            core.Injectable()
        ], SoftNotifyService);
        return SoftNotifyService;
    }());

    /** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */
    /**
     * shrink and grow are used within most enter/leave animations so surrounding elements will appropriately slide
     */
    var shrink = animations.animation(animations.animate('{{time}}', animations.style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' })), { params: { time: '200ms' } });
    var grow = animations.animation([
        animations.style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }),
        animations.animate('{{time}}', animations.style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' })),
    ], { params: { time: '200ms' } });
    var slideFadeIn = animations.animation([
        animations.style({ opacity: '0', transform: 'translateX({{startPos}})' }),
        animations.group([
            animations.useAnimation(grow),
            animations.animate('{{time}}', animations.style({ opacity: '1', transform: '*' })),
        ]),
    ], { params: { time: '200ms', startPos: '100%' } });
    /**
     * fade in while sliding horizontally.
     *
     * @param time the duration of the animation
     * @param startPos the location that the element should start from before moving to its final position.
     * use a negative value to start to the left
     */
    function useSlideFadeInAnimation(time, startPos) {
        if (time === void 0) { time = '200ms'; }
        if (startPos === void 0) { startPos = '100%'; }
        return animations.useAnimation(slideFadeIn, { params: { time: time, startPos: startPos } });
    }
    var slideFadeOut = animations.animation([
        animations.group([
            animations.useAnimation(shrink, { params: { time: '{{time}}' } }),
            animations.animate('{{time}}', animations.style({ opacity: '0', transform: 'translateX({{endPos}})' })),
        ]),
    ], { params: { time: '200ms', endPos: '100%' } });
    /**
     * fade out while sliding horizontally.
     *
     * @param time the duration of the animation
     * @param endPos the amount that the element should move (horizontally) by the end of the animation.
     * Use a negative value to move left
     */
    function useSlideFadeOutAnimation(time, endPos) {
        if (time === void 0) { time = '200ms'; }
        if (endPos === void 0) { endPos = '100%'; }
        return animations.useAnimation(slideFadeOut, { params: { time: time, endPos: endPos } });
    }
    var growIn = animations.animation([
        animations.style({ height: '0px', transform: 'scaleY(0)' }),
        animations.group([
            animations.useAnimation(grow, { params: { time: '{{time}}' } }),
            animations.animate('{{time}}', animations.style({ transform: '*' })),
        ]),
    ], { params: { time: '200ms' } });
    /**
     * start at 0px height and grow to full height without any opacity changes
     * @param time the duration of the animation
     */
    function useGrowInAnimation(time) {
        if (time === void 0) { time = '200ms'; }
        return animations.useAnimation(growIn, { params: { time: time } });
    }
    var shrinkOut = animations.animation(animations.group([
        animations.useAnimation(shrink, { params: { time: '{{time}}' } }),
        animations.animate('{{time}}', animations.style({ transform: 'scaleY(0)' })),
    ]), { params: { time: '200ms' } });
    /**
     * shrink to 0px height without any opacity changes
     * @param time the duration of the animation
     */
    function useShrinkOutAnimation(time) {
        if (time === void 0) { time = '200ms'; }
        return animations.useAnimation(shrinkOut, { params: { time: time } });
    }
    var swingIn = animations.animation([
        animations.style({ transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }),
        animations.group([
            animations.useAnimation(grow, { params: { time: '200ms' } }),
            animations.animate('{{time}}', animations.keyframes([
                animations.style({ transform: 'perspective(500px) rotate3d(1, 0, 0, -70deg)' }),
                animations.style({ transform: 'perspective(500px) rotate3d(1, 0, 0, 40deg)' }),
                animations.style({ transform: 'perspective(500px) rotate3d(1, 0, 0, -15deg)' }),
                animations.style({ transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }),
            ])),
        ]),
    ], { params: { time: '600ms' } });
    /**
     * rotate element in on the X axis as if it is hanging on a hinge.
     * @param time the duration of the animation
     */
    function useSwingInAnimation(time) {
        if (time === void 0) { time = '600ms'; }
        return animations.useAnimation(swingIn, { params: { time: time } });
    }
    var swingOut = animations.animation([
        animations.animate('{{time}}', animations.keyframes([
            animations.style([{ transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }, { offset: 0 }]),
            animations.style([{ transform: 'perspective(500px) rotate3d(1, 0, 0, -30deg)' }, { offset: 0.3 }]),
            animations.style([{ transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }, { offset: 1 }]),
        ])),
        animations.useAnimation(shrink, { params: { time: '200ms' } }),
    ], { params: { time: '600ms' } });
    /**
     * rotate element out on the X axis until it is facing up and invisible to the user
     * @param time the duration of the animation
     */
    function useSwingOutAnimation(time) {
        if (time === void 0) { time = '300ms'; }
        return animations.useAnimation(swingOut, { params: { time: time } });
    }
    var bounceInUp = animations.animation([
        animations.style([{ opacity: 0 }]),
        animations.useAnimation(grow, { params: { time: '200ms' } }),
        animations.animate('{{time}} cubic-bezier(0.215, 0.610, 0.355, 1.000)', animations.keyframes([
            animations.style([{ opacity: 0, transform: 'translate3d(0, 20px, 0)', offset: 0 }]),
            animations.style([{ opacity: 1, transform: 'translate3d(0, -20px, 0)' }, { offset: 0.5 }]),
            animations.style([{ transform: 'translate3d(0, 10px, 0)' }, { offset: 0.75 }]),
            animations.style([{ transform: 'translate3d(0, -5px, 0)' }, { offset: 0.95 }]),
            animations.style([{ transform: 'translate3d(0, 0, 0)' }, { offset: 1 }]),
        ])),
    ], { params: { time: '600ms' } });
    /**
     * bounce from below
     * @param time the duration of the animation
     */
    function useBounceInUpAnimation(time) {
        if (time === void 0) { time = '200ms'; }
        return animations.useAnimation(bounceInUp, { params: { time: time } });
    }
    var bounceOutDown = animations.animation([
        animations.animate('{{time}}', animations.keyframes([
            animations.style([{ transform: 'translate3d(0, -5px, 0)' }, { offset: 0.05 }]),
            animations.style([{ transform: 'translate3d(0, 10px, 0)' }, { offset: 0.25 }]),
            animations.style([{ opacity: 1, transform: 'translate3d(0, -20px, 0)' }, { offset: .5 }]),
            animations.style([{ opacity: 0, transform: 'translate3d(0, 20px, 0)' }, { offset: 1 }]),
        ])),
        animations.useAnimation(shrink),
    ], { params: { time: '600ms' } });
    /**
     * bounce down to the area below
     * @param time The duration of the animation
     */
    function useBounceOutDownAnimation(time) {
        if (time === void 0) { time = '200ms'; }
        return animations.useAnimation(bounceOutDown, { params: { time: time } });
    }

    /**
     * BounceInUp and BounceOutDown: (inspired by: https://daneden.github.io/animate.css/)
     */
    var bounceInAndOut = animations.trigger('bounceInAndOut', [
        animations.transition(':enter', animations.useAnimation(bounceInUp)),
        animations.transition(':leave', animations.useAnimation(bounceOutDown)),
    ]);
    /**
     * grow or shrink when the element enters or leaves.
     */
    var growInShrinkOut = animations.trigger('growInShrinkOut', [
        animations.transition(':enter', animations.useAnimation(growIn)),
        animations.transition(':leave', animations.useAnimation(shrinkOut)),
    ]);
    /**
     * add this trigger to an element to add a simple fade animation, sliding to and from the right when entering or leaving
     */
    var enterAndLeaveFromRight = animations.trigger('enterAndLeaveFromRight', [
        animations.transition(':enter', animations.useAnimation(slideFadeIn)),
        animations.transition(':leave', animations.useAnimation(slideFadeOut)),
    ]);
    /**
     * add this trigger to an element to add a simple fade animation, sliding to and from the left when entering or leaving
     */
    var enterAndLeaveFromLeft = animations.trigger('enterAndLeaveFromLeft', [
        animations.transition(':enter', useSlideFadeInAnimation(undefined, '-100%')),
        animations.transition(':leave', useSlideFadeOutAnimation(undefined, '-100%')),
    ]);
    /**
     * add this trigger to an element to add a simple fade animation when entering or leaving the dom
     */
    var fadeInAndOut = animations.trigger('fadeInAndOut', [
        animations.transition(':enter', useSlideFadeInAnimation(undefined, '0px')),
        animations.transition(':leave', useSlideFadeOutAnimation(undefined, '0px')),
    ]);
    /**
     * swing the element when it first enters or leaves the DOM
     */
    var swingInAndOut = animations.trigger('swingInAndOut', [
        animations.transition(':enter', animations.useAnimation(swingIn)),
        animations.transition(':leave', animations.useAnimation(swingOut)),
    ]);
    /**
     * Fade in, pause, then fade out
     * like a page indicator when scrolling in most PDF viewers (including ngWebViewer).
     *
     * To use, set trigger equal to a value. Whenever that value changes, the animation will run.
     */
    var fadeInThenOut = animations.trigger('fadeInThenOut', [
        animations.state('*', animations.style({ opacity: 0 })),
        animations.transition('* => *', [
            animations.animate('200ms', animations.style({ opacity: 1 })),
            animations.animate('500ms 1s ease-out', animations.style({ opacity: 0 })),
        ]),
    ]);

    var SoftNotifyComponent = /** @class */ (function () {
        function SoftNotifyComponent(softNotifyService) {
            var _this = this;
            this.softNotifyService = softNotifyService;
            this.onDismiss = new core.EventEmitter();
            /**
            Sample Alert Notification object structure
            notification = {
              header: 'Signal is weak',
              subHeader: '',
              body: 'Expect slowness in the app',
              type: 'warning'
              autoDismiss:5000, //optional property
            }
            */
            /**
              Sample Chat Notification object structure
              {
                header: 'Tony Stark',
                subHeader: 'is online now',
                body: 'whats up bud :)',
                type: 'chat',
                avatar:'iron-man',
                status:'online',
                time: '03:09',
                autoDismiss:5000 //optional property
              }
            */
            //OnDismiss event triggered when Notification is dismissed(manually or autoDismissed)
            this.onDismissNotification = function (notification) {
                notification.__isExpired = true;
                if (_this.onDismiss) {
                    _this.onDismiss.emit(notification); //Notify subscriber with dismissed Notification object
                }
                _this.softNotifyService.deleteNotification(notification);
            };
            // Initialise the Notification object with timer(if Auto Dimiss configured)    
            this.onInit = function (notification) {
                notification.__isExpired = false; // flag to filter out expired notifications
                notification.__uniqueId = new Date().valueOf();
                if (notification.autoDismiss) {
                    var interval = notification.autoDismiss;
                    setTimeout(function () {
                        _this.onDismissNotification(notification);
                    }, interval);
                }
            };
            this.getFlowClass = function () {
                var flClass = 'right-flow';
                if (_this.direction === 'left-top') {
                    flClass = 'left-flow';
                }
                else if (_this.direction === 'right-top') {
                    flClass = 'right-flow';
                }
                return flClass;
            };
        }
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], SoftNotifyComponent.prototype, "onDismiss", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SoftNotifyComponent.prototype, "direction", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SoftNotifyComponent.prototype, "animationType", void 0);
        SoftNotifyComponent = __decorate([
            core.Component({
                //  it also helps angular compilation engine in understanding the code
                selector: 'ng-softnotify',
                providers: [],
                // When the component or any of its sub-components inject X, 
                // they get the component service instance, not the NgModule service instance.
                animations: [
                    // trigger(
                    //   'enterAnimation', [
                    //     transition(':enter', [
                    //       style({transform: 'translateX(100%)', opacity: 0}),
                    //       animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                    //     ]),
                    //     transition(':leave', [
                    //       style({transform: 'translateX(0)', opacity: 1}),
                    //       animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
                    //     ])
                    //   ]
                    // )
                    // trigger('shrinkOut', [
                    //    state('in', style({ height: '*' })),
                    //    transition('* => void', [
                    //      style({ height: '*' }),
                    //      animate(500, style({ height: 0 }))
                    //    ])
                    //  ])
                    //  trigger('fadeIn', [
                    //   transition(':enter', [
                    //     style({ opacity: '0' }),
                    //     animate('.5s ease-out', style({ opacity: '1' })),
                    //   ]),
                    // ])
                    // trigger('bounceInAndOut', [
                    //   transition(':enter', useAnimation(animations.bounceInUp)),
                    //   transition(':leave', useAnimation(animations.bounceOutDown)),
                    // ]),
                    growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
                    enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut,
                ],
                template: "<main>\r\n <div class=\"notification-cont\" [ngClass]=\"getFlowClass()\">\r\n  <div *ngFor=\"let notification of softNotifyService.notifications; last as islast\" [@bounceInAndOut]>\r\n    <div class=\"notification repeated-item\"  *ngIf = \"!notification.__isExpired\"  >\r\n      <ng-container *ngIf=\"notification.type === 'chat'\">  \r\n        <div class=\"notification-header\" [ngClass]=\"notification.status\" (onInitNotification)=\"onInit(notification)\" >\r\n          <div class=\"header-content\" >\r\n            <img class=\"notification-icon\" [src]=\"'https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/'+ notification.avatar +'.svg?sanitize=true'\" >\r\n         \r\n\r\n            <span class=\"header-txt\">{{notification.header}}</span>\r\n            <span class=\"sub-txt\">{{notification.subHeader}}</span>\r\n            <span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"notification-body cont-chat\">\r\n          <div class=\"body-content\">\r\n            <span>{{notification.body}}</span>\r\n            <div><span class=\"time-val\">{{notification.time}}</span></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"notification.type !== 'chat'\" >\r\n          <div class=\"notification_type cont-{{notification.type}}\" [ngClass]=\"notification.type\"></div>\r\n          <div class=\"notification_body cont-{{notification.type}}\">\r\n            <div class=\"notification_title\" [ngClass]=\"notification.type\">{{notification.header}}</div>\r\n            <div class=\"notification_desc\">{{notification.body}}</div>    \r\n          </div>\r\n          <div class=\"notification_ctrls cont-{{notification.type}}\"><span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span></div>  \r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</main>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro);.notification-cont{position:absolute;z-index:999;top:10px;font-family:'Roboto Mono',monospace,'Source Sans Pro',sans-serif}.left-flow{left:10px}.right-flow{right:10px}.notification{padding:10px;width:300px;height:70px;position:relative}.notification span{padding:3px 5px}.notification .notification-header{width:100%;height:25px;border-radius:5px 5px 0 0;border-bottom-style:none;font-size:12px;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-header .header-content{padding:3px;font-size:14px}.header-content span{margin-left:-3px}.online{background:#79b546;color:#34610e}.away{background:#fff599;color:#000}.offline{background:#dadada;color:#a3a3a3}.header-txt{font-weight:700}.sub-txt{font-color:#aca796;font-size:10px;vertical-align:sub}.notification .notification-header .notification-icon{height:22px;width:22px;vertical-align:middle}.close-icon{float:right;padding:5px;cursor:pointer;width:15px;height:10px}.notification .notification-body{width:100%;height:55px;border-radius:0 0 5px 5px;border-top-style:none;font-size:15px;background:#fff;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-body .body-content{padding:5px 8px;width:93%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.notification .notification-body .time-val{float:right;font-size:10px}.notification_type{width:10%;height:100%;left:0;float:left;background-color:#d3d3d3}.notification_body{width:85%;height:100%;float:left;background-color:#fff;padding:3px 5px;box-sizing:border-box}.notification_title{font-weight:700;font-size:15px}.error{background-color:red}.cont-error{box-shadow:5px 3px 5px #e57f7f}.error.notification_title{color:red;background-color:#fff}.info{background-color:#66f}.cont-info{box-shadow:5px 3px 5px #a3a3d8}.info.notification_title{color:#66f;background-color:#fff}.warning{background-color:orange}.cont-warning{box-shadow:5px 3px 5px #e5c17f}.warning.notification_title{color:orange;background-color:#fff}.success{background-color:#79b546}.cont-success{box-shadow:5px 3px 5px #a3d0a3}.success.notification_title{color:#79b546;background-color:#fff}.notification_desc{font-size:12px;color:#aca796;padding-top:3px}.notification_ctrls{float:right;width:5%;color:#000;background-color:#fff;height:100%}"]
            }),
            __metadata("design:paramtypes", [SoftNotifyService])
        ], SoftNotifyComponent);
        return SoftNotifyComponent;
    }());

    var OnInitNotification = /** @class */ (function () {
        function OnInitNotification() {
            this.onInitNotification = new core.EventEmitter();
        }
        OnInitNotification.prototype.ngOnInit = function () {
            this.onInitNotification.emit();
        };
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], OnInitNotification.prototype, "onInitNotification", void 0);
        OnInitNotification = __decorate([
            core.Directive({
                selector: '[onInitNotification]'
            }),
            __metadata("design:paramtypes", [])
        ], OnInitNotification);
        return OnInitNotification;
    }());

    var SoftNotifyModule = /** @class */ (function () {
        function SoftNotifyModule() {
        }
        SoftNotifyModule = __decorate([
            core.NgModule({
                //  this helps angular compilation engine to compile the code in best possible way
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    OnInitNotification, SoftNotifyComponent
                ],
                providers: [SoftNotifyService],
                exports: [SoftNotifyComponent]
            })
        ], SoftNotifyModule);
        return SoftNotifyModule;
    }()); // export this class so that it accessible for other classes

    exports.SoftNotifyModule = SoftNotifyModule;
    exports.SoftNotifyService = SoftNotifyService;
    exports.ɵa = OnInitNotification;
    exports.ɵb = SoftNotifyComponent;
    exports.ɵc = bounceInAndOut;
    exports.ɵd = growInShrinkOut;
    exports.ɵe = enterAndLeaveFromRight;
    exports.ɵf = enterAndLeaveFromLeft;
    exports.ɵg = fadeInAndOut;
    exports.ɵh = swingInAndOut;
    exports.ɵi = fadeInThenOut;
    exports.ɵj = slideFadeIn;
    exports.ɵk = useSlideFadeInAnimation;
    exports.ɵl = slideFadeOut;
    exports.ɵm = useSlideFadeOutAnimation;
    exports.ɵn = growIn;
    exports.ɵo = shrinkOut;
    exports.ɵp = swingIn;
    exports.ɵq = swingOut;
    exports.ɵr = bounceInUp;
    exports.ɵs = bounceOutDown;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-softnotify.umd.js.map
