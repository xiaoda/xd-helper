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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var ENV = "prod";
var DEV = 'dev';
var PROD = 'prod';
var SHOW_TRACE = true;
var SHOW_ERROR = true;

var config = {
  isDev: function isDev() {
    return ENV === DEV;
  },
  isNotDev: function isNotDev() {
    return ENV !== DEV;
  },
  showTrace: function showTrace() {
    return this.isDev() && !!SHOW_TRACE;
  },
  showErr: function showErr() {
    return this.isDev() && !!SHOW_ERROR;
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
    return this.getType(obj) === 'regexp';
  },
  isBoolean: function isBoolean(obj) {
    return this.getType(obj) === 'boolean';
  },
  isDate: function isDate(obj) {
    return this.getType(obj) === 'date';
  },
  isNull: function isNull(obj) {
    return this.getType(obj) === 'null';
  },
  isUndefined: function isUndefined(obj) {
    return this.getType(obj) === 'undefined';
  },


  /* 类型转换 */
  toStr: function toStr(obj) {
    return obj.toString();
  },
  toNum: function toNum(obj) {
    return Number(obj);
  },
  toBoolean: function toBoolean(obj) {
    return !!obj;
  },
  objToArr: function objToArr(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
});

module.exports = xdType;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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

/***/ })
/******/ ])));
//# sourceMappingURL=math.js.map