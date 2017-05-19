(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(config) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var /**
     * 构造类
     * 
     */

XdModule = function () {
  function XdModule() {
    var funcs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, XdModule);

    this.funcs = funcs;
    this.outputModule = {};

    this.injectFuncs();
    this.freezeFuncs();

    return this.outputModule;
  }

  _createClass(XdModule, [{
    key: 'injectFuncs',
    value: function injectFuncs() {
      var _this = this;

      Object.keys(this.funcs).forEach(function (key, index) {
        _this['outputModule'][key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (args[0] === undefined) args = [];
          var copyArgs = args.map(function (i, k) {
            if (typeof i === 'function') return i;else return JSON.parse(JSON.stringify(i));
          });
          if (copyArgs.length) {
            for (var i = copyArgs.length - 1; i > 0; i--) {
              copyArgs.splice(i, 0, ',');
            }
          }
          return function () {
            try {
              var result = _this['funcs'][key].apply(_this.outputModule, args);
              if (config.showTrace()) {
                var _console;

                var infoMsg = ['[trace] ' + key];
                if (copyArgs.length) {
                  infoMsg = [infoMsg[0] + ' | params >'].concat(_toConsumableArray(copyArgs));
                }
                infoMsg = [].concat(_toConsumableArray(infoMsg), ['| result >', result]);
                (_console = console).info.apply(_console, _toConsumableArray(infoMsg));
              }
              return result;
            } catch (e) {
              if (config.showErr()) {
                var _console2;

                var errMsg = ['[error] ' + key];
                if (copyArgs.length) {
                  errMsg = [errMsg[0] + ' | params >'].concat(_toConsumableArray(copyArgs));
                }
                (_console2 = console).error.apply(_console2, _toConsumableArray(errMsg));
              }
              return null;
            }
          }();
        };
      });
    }
  }, {
    key: 'freezeFuncs',
    value: function freezeFuncs() {
      Object.freeze(this.outputModule);
    }
  }]);

  return XdModule;
}();

module.exports = XdModule;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 配置文件
 *
 * 
 */

var ENV = "production";
var DEVELOP = 'develop';
var PRODUCTION = 'production';
var SHOW_TRACE = true;
var SHOW_ERROR = true;

var config = {
  isDevelop: function isDevelop() {
    return ENV === DEVELOP;
  },
  isNotDevelop: function isNotDevelop() {
    return ENV !== DEVELOP;
  },
  showTrace: function showTrace() {
    return this.isDevelop() && !!SHOW_TRACE;
  },
  showErr: function showErr() {
    return this.isDevelop() && !!SHOW_ERROR;
  }
};

module.exports = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * 类型模块
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdType = new _2.default({

  /* 通用类型判断 */
  getType: function getType(obj) {
    if (Number.isNaN(obj)) return 'NaN';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },


  /* 类型判断 */
  isStr: function isStr(obj) {
    return this.getType(obj) === 'string';
  },
  isNum: function isNum(obj) {
    return this.getType(obj) === 'number';
  },
  isArr: function isArr(obj) {
    return this.getType(obj) === 'array';
  },
  isObj: function isObj(obj) {
    return this.getType(obj) === 'object';
  },
  isFunc: function isFunc(obj) {
    return this.getType(obj) === 'function';
  },
  isRegExp: function isRegExp(obj) {
    return obj instanceof RegExp;
  },


  /* 类型转换 */
  toNum: function toNum(obj) {
    return Number(obj);
  },
  toStr: function toStr(obj) {
    return obj.toString();
  }
});

module.exports = xdType;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdObject = new _2.default({
  clone: function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  isObjEqual: function isObjEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
}); /**
     * 对象模块
     *
     * 
     */

module.exports = xdObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * 
 */

var xdArray = new _2.default({
  toggleArrItem: function toggleArrItem(array, item) {
    var index = array.indexOf(item);
    if (index === -1) array.push(item);else array.splice(index, 1);
    return array;
  },
  addArrUniqItem: function addArrUniqItem(array, item) {
    if (!array.includes(item)) array.push(item);
    return array;
  }
});

module.exports = xdArray;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdDevice = new _2.default({
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
  },
  isMobile: function isMobile() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (this.isiOS(userAgent) || this.isAndroid(userAgent)) && !this.isPad(userAgent);
  },
  isPad: function isPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/pad/i.test(userAgent)
    );
  },
  isAndroid: function isAndroid() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/Android/i.test(userAgent)
    );
  },
  isiOS: function isiOS() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return this.isiPhone(userAgent) || this.isiPad(userAgent) || this.isiPod(userAgent);
  },
  isiPhone: function isiPhone() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPhone/.test(userAgent) && !/iPod/.test(userAgent)
    );
  },
  isiPad: function isiPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPad/.test(userAgent)
    );
  },
  isiPod: function isiPod() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPod/.test(userAgent)
    );
  }
}); /**
     * 设备类型模块
     *
     * 
     */

module.exports = xdDevice;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * 函数模块
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * 
                                                                                                                                                                                                     */

var xdFunction = new _2.default({
  safelyExecFunc: function safelyExecFunc(func) {
    if (_type2.default.isFunc(func)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      func.apply(undefined, _toConsumableArray(args));
      return true;
    } else {
      return false;
    }
  }
});

module.exports = xdFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 格式模块
 *
 * 
 */

var xdMask = new _2.default({
  mobileMask: function mobileMask(mobile) {
    mobile = _type2.default.toStr(mobile);
    return '' + mobile.slice(0, 3) + '*'.repeat(4) + mobile.slice(-4);
  },
  emailMask: function emailMask(email) {
    var emailArray = email.split('@');
    if (emailArray[0].length > 4) email = emailArray[0].slice(0, -4) + '****@' + emailArray[1];else email = '' + emailArray[0].charAt(0) + '*'.repeat(emailArray[0].length - 1) + '@' + emailArray[1];
    return email;
  },
  idNumMask: function idNumMask(id) {
    id = _type2.default.toStr(id);
    var start = 3;
    var end = -4;
    var reduce = 7;
    if (id.length > 4 && id.length <= 8) {
      start = 1;
      end = -2;
      reduce = 3;
    } else if (id.length <= 4) {
      return '' + id.slice(0, 1) + '*'.repeat(id.length - 1);
    }
    return '' + id.slice(0, start) + '*'.repeat(id.length - reduce) + id.slice(end);
  }
});

module.exports = xdMask;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 算术模块
 *
 * 
 */

var NUM_1000 = 1000;
var NUM_1024 = 1024;

var xdMath = new _2.default({
  multiply1k: function multiply1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return _type2.default.toNum(num) * Math.pow(NUM_1000, _type2.default.toNum(times));
  },
  devide1k: function devide1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return _type2.default.toNum(num) / Math.pow(NUM_1000, _type2.default.toNum(times));
  },
  multiply1024: function multiply1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return _type2.default.toNum(num) * Math.pow(NUM_1024, _type2.default.toNum(times));
  },
  devide1024: function devide1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return _type2.default.toNum(num) / Math.pow(NUM_1024, _type2.default.toNum(times));
  },


  /* 补零 */
  fillZero: function fillZero(num, width) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    num = _type2.default.toStr(num);
    var len = num.length;
    if (len >= width) return num;else {
      if (direction === 'right') return '' + num + '0'.repeat(width - len);else return '' + '0'.repeat(width - len) + num;
    }
  }
});

module.exports = xdMath;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdSupport = new _2.default({
  sseSupport: function sseSupport() {
    return window.EventSource !== undefined;
  }
}); /**
     * 支持模块
     *
     * 
     */

module.exports = xdSupport;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdUrl = new _2.default({
  buildQueryStr: function buildQueryStr(data) {
    var queries = [];
    Object.keys(data).forEach(function (key, index) {
      queries.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    });
    return queries.join('&');
  },
  getQueryParams: function getQueryParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    var urlArray = void 0;
    var resultObj = {};
    if (!url) urlArray = [];else if (url.charAt(0) === '?') urlArray = url.slice(1).split('&');else urlArray = url.split('&');
    urlArray.forEach(function (item, key) {
      var array = item.split('=');
      resultObj[array[0]] = array[1];
    });
    return resultObj;
  }
}); /**
     * url模块
     *
     * 
     */

module.exports = xdUrl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 入口文件
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

var _array = __webpack_require__(4);

var _array2 = _interopRequireDefault(_array);

var _device = __webpack_require__(5);

var _device2 = _interopRequireDefault(_device);

var _function = __webpack_require__(6);

var _function2 = _interopRequireDefault(_function);

var _mask = __webpack_require__(7);

var _mask2 = _interopRequireDefault(_mask);

var _math = __webpack_require__(8);

var _math2 = _interopRequireDefault(_math);

var _object = __webpack_require__(3);

var _object2 = _interopRequireDefault(_object);

var _support = __webpack_require__(9);

var _support2 = _interopRequireDefault(_support);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _url = __webpack_require__(10);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xd = _extends({}, _array2.default, _device2.default, _function2.default, _mask2.default, _math2.default, _object2.default, _support2.default, _type2.default, _url2.default);

Object.freeze(xd);

module.exports = xd;

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map