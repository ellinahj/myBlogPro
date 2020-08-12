webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic.js */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly.js */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin.js */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp.js */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.js */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce.js */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.js */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic.js */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/kapellmeister/es/BaseNode.js":
/*!***************************************************!*\
  !*** ./node_modules/kapellmeister/es/BaseNode.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./node_modules/kapellmeister/es/Events.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BaseNode = function () {
  function BaseNode(state) {
    _classCallCheck(this, BaseNode);

    this.state = state || {};
  }

  _createClass(BaseNode, [{
    key: "transition",
    value: function transition(config) {
      if (Array.isArray(config)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            this.parse(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        this.parse(config);
      }
    }
  }, {
    key: "isTransitioning",
    value: function isTransitioning() {
      return !!this.transitionData;
    }
  }, {
    key: "stopTransitions",
    value: function stopTransitions() {
      var transitions = this.transitionData;

      if (transitions) {
        Object.keys(transitions).forEach(function (t) {
          transitions[t].timer.stop();
        });
      }
    }
  }, {
    key: "setState",
    value: function setState(update) {
      if (typeof update === 'function') {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update(this.state));
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update);
      }
    }
  }, {
    key: "parse",
    value: function parse(config) {
      var _this = this;

      var clone = _objectSpread({}, config);

      var events = new _Events__WEBPACK_IMPORTED_MODULE_2__["default"](clone);

      if (clone.events) {
        delete clone.events;
      }

      var timing = _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_1__["timingDefaults"], clone.timing || {}, {
        time: Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["now"])()
      });

      if (clone.timing) {
        delete clone.timing;
      }

      Object.keys(clone).forEach(function (stateKey) {
        var tweens = [];
        var next = clone[stateKey];

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNamespace"])(next)) {
          Object.keys(next).forEach(function (attr) {
            var val = next[attr];

            if (Array.isArray(val)) {
              if (val.length === 1) {
                tweens.push(_this.getTween(attr, val[0], stateKey));
              } else {
                _this.setState(function (state) {
                  var _objectSpread2, _ref;

                  return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                });

                tweens.push(_this.getTween(attr, val[1], stateKey));
              }
            } else if (typeof val === 'function') {
              var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                  _this.setState(function (state) {
                    var _objectSpread3, _ref2;

                    return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                  });
                };

                return kapellmeisterNamespacedTween;
              };

              tweens.push(getNameSpacedCustomTween);
            } else {
              _this.setState(function (state) {
                var _objectSpread4, _ref3;

                return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
              });

              tweens.push(_this.getTween(attr, val, stateKey));
            }
          });
        } else {
          if (Array.isArray(next)) {
            if (next.length === 1) {
              tweens.push(_this.getTween(stateKey, next[0], null));
            } else {
              var _this$setState;

              _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

              tweens.push(_this.getTween(stateKey, next[1], null));
            }
          } else if (typeof next === 'function') {
            var getCustomTween = function getCustomTween() {
              var kapellmeisterTween = function kapellmeisterTween(t) {
                var _this$setState2;

                _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
              };

              return kapellmeisterTween;
            };

            tweens.push(getCustomTween);
          } else {
            var _this$setState3;

            _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

            tweens.push(_this.getTween(stateKey, next, null));
          }
        }

        _this.update({
          stateKey: stateKey,
          timing: timing,
          tweens: tweens,
          events: events,
          status: 0
        });
      });
    }
  }, {
    key: "getTween",
    value: function getTween(attr, endValue, nameSpace) {
      var _this2 = this;

      return function () {
        var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

        if (begValue === endValue) {
          return null;
        }

        var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

        var stateTween;

        if (nameSpace === null) {
          stateTween = function stateTween(t) {
            var _this2$setState;

            _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
          };
        } else {
          stateTween = function stateTween(t) {
            _this2.setState(function (state) {
              var _objectSpread5, _ref4;

              return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
            });
          };
        }

        return stateTween;
      };
    }
  }, {
    key: "update",
    value: function update(transition) {
      if (!this.transitionData) {
        this.transitionData = {};
      }

      this.init(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTransitionId"])(), transition);
    }
  }, {
    key: "init",
    value: function init(id, transition) {
      var _this3 = this;

      var n = transition.tweens.length;
      var tweens = new Array(n);

      var queue = function queue(elapsed) {
        transition.status = 1;
        transition.timer.restart(start, transition.timing.delay, transition.timing.time);

        if (transition.timing.delay <= elapsed) {
          start(elapsed - transition.timing.delay);
        }
      };

      this.transitionData[id] = transition;
      transition.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timer"])(queue, 0, transition.timing.time);

      var start = function start(elapsed) {
        if (transition.status !== 1) return stop();

        for (var tid in _this3.transitionData) {
          var t = _this3.transitionData[tid];

          if (t.stateKey !== transition.stateKey) {
            continue;
          }

          if (t.status === 3) {
            return Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(start);
          }

          if (t.status === 4) {
            t.status = 6;
            t.timer.stop();

            if (t.events.interrupt) {
              t.events.interrupt.call(_this3);
            }

            delete _this3.transitionData[tid];
          } else if (+tid < id) {
            t.status = 6;
            t.timer.stop();
            delete _this3.transitionData[tid];
          }
        }

        Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(function () {
          if (transition.status === 3) {
            transition.status = 4;
            transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
            tick(elapsed);
          }
        });
        transition.status = 2;

        if (transition.events.start) {
          transition.events.start.call(_this3);
        }

        if (transition.status !== 2) {
          return;
        }

        transition.status = 3;
        var j = -1;

        for (var i = 0; i < n; ++i) {
          var res = transition.tweens[i]();

          if (res) {
            tweens[++j] = res;
          }
        }

        tweens.length = j + 1;
      };

      var tick = function tick(elapsed) {
        var t = 1;

        if (elapsed < transition.timing.duration) {
          t = transition.timing.ease(elapsed / transition.timing.duration);
        } else {
          transition.timer.restart(stop);
          transition.status = 5;
        }

        var i = -1;

        while (++i < tweens.length) {
          tweens[i](t);
        }

        if (transition.status === 5) {
          if (transition.events.end) {
            transition.events.end.call(_this3);
          }

          stop();
        }
      };

      var stop = function stop() {
        transition.status = 6;
        transition.timer.stop();
        delete _this3.transitionData[id];

        for (var _ in _this3.transitionData) {
          return;
        }

        delete _this3.transitionData;
      };
    }
  }]);

  return BaseNode;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseNode);

/***/ }),

/***/ "./node_modules/kapellmeister/es/Events.js":
/*!*************************************************!*\
  !*** ./node_modules/kapellmeister/es/Events.js ***!
  \*************************************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Events = function Events(config) {
  var _this = this;

  _classCallCheck(this, Events);

  this.start = null;
  this.interrupt = null;
  this.end = null;

  if (config.events) {
    Object.keys(config.events).forEach(function (d) {
      if (typeof config.events[d] !== 'function') {
        throw new Error('Event handlers must be a function');
      } else {
        _this[d] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["once"])(config.events[d]);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./node_modules/kapellmeister/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/index.js ***!
  \************************************************/
/*! exports provided: BaseNode, now, timer, interval, timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseNode */ "./node_modules/kapellmeister/es/BaseNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _BaseNode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["interval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"]; });




/***/ }),

/***/ "./node_modules/kapellmeister/es/utils.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/utils.js ***!
  \************************************************/
/*! exports provided: getTransitionId, extend, once, isNamespace, timingDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionId", function() { return getTransitionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamespace", function() { return isNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingDefaults", function() { return timingDefaults; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transitionId = 0;
function getTransitionId() {
  return ++transitionId;
}
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
}
function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}
function isNamespace(prop) {
  return _typeof(prop) === 'object' && Array.isArray(prop) === false;
}

var linear = function linear(t) {
  return +t;
};

var timingDefaults = {
  delay: 0,
  duration: 250,
  ease: linear
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/all-transitions.js":
/*!**********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/all-transitions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transitions_scroll_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitions/scroll-transition */ "./node_modules/nuka-carousel/es/transitions/scroll-transition.js");
/* harmony import */ var _transitions_fade_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions/fade-transition */ "./node_modules/nuka-carousel/es/transitions/fade-transition.js");
/* harmony import */ var _transitions_3d_scroll_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions/3d-scroll-transition */ "./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fade: _transitions_fade_transition__WEBPACK_IMPORTED_MODULE_1__["default"],
  scroll: _transitions_scroll_transition__WEBPACK_IMPORTED_MODULE_0__["default"],
  scroll3d: _transitions_3d_scroll_transition__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/nuka-carousel/es/announce-slide.js":
/*!*********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/announce-slide.js ***!
  \*********************************************************/
/*! exports provided: defaultRenderAnnounceSlideMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRenderAnnounceSlideMessage", function() { return defaultRenderAnnounceSlideMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AnnounceSlide = function AnnounceSlide(_ref) {
  var message = _ref.message;
  var styles = {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: styles,
    tabIndex: -1
  }, message);
};

var defaultRenderAnnounceSlideMessage = function defaultRenderAnnounceSlideMessage(_ref2) {
  var currentSlide = _ref2.currentSlide,
      slideCount = _ref2.slideCount;
  return "Slide ".concat(currentSlide + 1, " of ").concat(slideCount);
};
/* harmony default export */ __webpack_exports__["default"] = (AnnounceSlide);

/***/ }),

/***/ "./node_modules/nuka-carousel/es/default-controls.js":
/*!***********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/default-controls.js ***!
  \***********************************************************/
/*! exports provided: PreviousButton, NextButton, PagingDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousButton", function() { return PreviousButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return NextButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingDots", function() { return PagingDots; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var defaultButtonStyles = function defaultButtonStyles(disabled) {
  return {
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    textTransform: 'uppercase',
    opacity: disabled && 0.3,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
};

var PreviousButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PreviousButton, _React$Component);

  function PreviousButton() {
    var _this;

    _classCallCheck(this, PreviousButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreviousButton).apply(this, arguments));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PreviousButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.previousSlide();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$defaultCo = this.props.defaultControlsConfig,
          prevButtonClassName = _this$props$defaultCo.prevButtonClassName,
          _this$props$defaultCo2 = _this$props$defaultCo.prevButtonStyle,
          prevButtonStyle = _this$props$defaultCo2 === void 0 ? {} : _this$props$defaultCo2,
          prevButtonText = _this$props$defaultCo.prevButtonText;
      var disabled = this.props.currentSlide === 0 && !this.props.wrapAround || this.props.slideCount === 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: prevButtonClassName,
        style: _objectSpread({}, defaultButtonStyles(disabled), {}, prevButtonStyle),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "previous",
        type: "button"
      }, prevButtonText || 'Prev');
    }
  }]);

  return PreviousButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var NextButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextButton, _React$Component2);

  function NextButton() {
    var _this2;

    _classCallCheck(this, NextButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NextButton).apply(this, arguments));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.nextButtonDisable = _this2.nextButtonDisabled.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(NextButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.nextSlide();
    }
  }, {
    key: "nextButtonDisabled",
    value: function nextButtonDisabled(params) {
      var cellAlign = params.cellAlign,
          cellSpacing = params.cellSpacing,
          currentSlide = params.currentSlide,
          frameWidth = params.frameWidth,
          positionValue = params.positionValue,
          slideCount = params.slideCount,
          slidesToShow = params.slidesToShow,
          slideWidth = params.slideWidth,
          wrapAround = params.wrapAround;
      var buttonDisabled = false;

      if (!wrapAround) {
        var alignmentOffset = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_1__["getAlignmentOffset"])(currentSlide, {
          cellAlign: cellAlign,
          cellSpacing: cellSpacing,
          frameWidth: frameWidth,
          slideWidth: slideWidth
        });
        var relativePosition = positionValue - alignmentOffset;
        var width = slideWidth + cellSpacing;
        var endOffset = cellAlign === 'center' ? 2 * alignmentOffset : alignmentOffset;
        var endPosition = -width * slideCount + width * slidesToShow - endOffset;
        buttonDisabled = relativePosition < endPosition || Math.abs(relativePosition - endPosition) < 0.01;
      }

      return buttonDisabled;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cellAlign = _this$props.cellAlign,
          cellSpacing = _this$props.cellSpacing,
          currentSlide = _this$props.currentSlide,
          frameWidth = _this$props.frameWidth,
          left = _this$props.left,
          slideCount = _this$props.slideCount,
          slidesToShow = _this$props.slidesToShow,
          slideWidth = _this$props.slideWidth,
          top = _this$props.top,
          vertical = _this$props.vertical,
          wrapAround = _this$props.wrapAround;
      var _this$props$defaultCo3 = this.props.defaultControlsConfig,
          nextButtonClassName = _this$props$defaultCo3.nextButtonClassName,
          _this$props$defaultCo4 = _this$props$defaultCo3.nextButtonStyle,
          nextButtonStyle = _this$props$defaultCo4 === void 0 ? {} : _this$props$defaultCo4,
          nextButtonText = _this$props$defaultCo3.nextButtonText;
      var disabled = this.nextButtonDisabled({
        cellAlign: cellAlign,
        cellSpacing: cellSpacing,
        currentSlide: currentSlide,
        frameWidth: frameWidth,
        positionValue: vertical ? top : left,
        slideCount: slideCount,
        slidesToShow: slidesToShow,
        slideWidth: slideWidth,
        wrapAround: wrapAround
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: nextButtonClassName,
        style: _objectSpread({}, defaultButtonStyles(disabled), {}, nextButtonStyle),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "next",
        type: "button"
      }, nextButtonText || 'Next');
    }
  }]);

  return NextButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var PagingDots =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PagingDots, _React$Component3);

  function PagingDots() {
    _classCallCheck(this, PagingDots);

    return _possibleConstructorReturn(this, _getPrototypeOf(PagingDots).apply(this, arguments));
  }

  _createClass(PagingDots, [{
    key: "getDotIndexes",
    value: function getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign, scrollMode) {
      var dotIndexes = [];
      var lastDotIndex = slideCount - slidesToShow;

      switch (cellAlign) {
        case 'center':
        case 'right':
          lastDotIndex += slidesToShow - 1;
          break;
      }

      if (lastDotIndex < 0) {
        return [0];
      }

      for (var i = 0; i < lastDotIndex; i += slidesToScroll) {
        dotIndexes.push(i);
      }

      if (cellAlign === 'left' && scrollMode === 'page') {
        lastDotIndex = Math.floor(slideCount - (slideCount % slidesToShow || slidesToShow));
      }

      dotIndexes.push(lastDotIndex);
      return dotIndexes;
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      return {
        position: 'relative',
        top: -10,
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none'
      };
    }
  }, {
    key: "getButtonStyles",
    value: function getButtonStyles(active) {
      return {
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        background: 'transparent',
        border: 'none',
        fill: 'black'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var indexes = this.getDotIndexes(this.props.slideCount, this.props.slidesToScroll, this.props.slidesToShow, this.props.cellAlign, this.props.scrollMode);
      var _this$props$defaultCo5 = this.props.defaultControlsConfig,
          pagingDotsContainerClassName = _this$props$defaultCo5.pagingDotsContainerClassName,
          pagingDotsClassName = _this$props$defaultCo5.pagingDotsClassName,
          _this$props$defaultCo6 = _this$props$defaultCo5.pagingDotsStyle,
          pagingDotsStyle = _this$props$defaultCo6 === void 0 ? {} : _this$props$defaultCo6;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: pagingDotsContainerClassName,
        style: this.getListStyles()
      }, indexes.map(function (index) {
        var isActive = _this3.props.currentSlide === index;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: isActive ? 'paging-item active' : 'paging-item'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: pagingDotsClassName,
          type: "button",
          style: _objectSpread({}, _this3.getButtonStyles(isActive), {}, pagingDotsStyle),
          onClick: _this3.props.goToSlide.bind(null, index),
          "aria-label": "slide ".concat(index + 1, " bullet")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          className: "paging-dot",
          width: "6",
          height: "6"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          cx: "3",
          cy: "3",
          r: "3"
        }))));
      }));
    }
  }]);

  return PagingDots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./node_modules/nuka-carousel/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/nuka-carousel/es/index.js ***!
  \************************************************/
/*! exports provided: default, NextButton, PreviousButton, PagingDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_move_Animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-move/Animate */ "./node_modules/react-move/Animate/index.js");
/* harmony import */ var react_move_Animate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_move_Animate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var _default_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-controls */ "./node_modules/nuka-carousel/es/default-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["NextButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousButton", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["PreviousButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingDots", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["PagingDots"]; });

/* harmony import */ var _all_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-transitions */ "./node_modules/nuka-carousel/es/all-transitions.js");
/* harmony import */ var _announce_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./announce-slide */ "./node_modules/nuka-carousel/es/announce-slide.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/utilities */ "./node_modules/nuka-carousel/es/utilities/utilities.js");
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
/* harmony import */ var _utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/bootstrapping-utilities */ "./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
    _this.displayName = 'Carousel';
    _this.clickDisabled = false;
    _this.isTransitioning = false;
    _this.timers = [];
    _this.touchObject = {};
    _this.controlsMap = [{
      funcName: 'renderTopLeftControls',
      key: 'TopLeft'
    }, {
      funcName: 'renderTopCenterControls',
      key: 'TopCenter'
    }, {
      funcName: 'renderTopRightControls',
      key: 'TopRight'
    }, {
      funcName: 'renderCenterLeftControls',
      key: 'CenterLeft'
    }, {
      funcName: 'renderCenterCenterControls',
      key: 'CenterCenter'
    }, {
      funcName: 'renderCenterRightControls',
      key: 'CenterRight'
    }, {
      funcName: 'renderBottomLeftControls',
      key: 'BottomLeft'
    }, {
      funcName: 'renderBottomCenterControls',
      key: 'BottomCenter'
    }, {
      funcName: 'renderBottomRightControls',
      key: 'BottomRight'
    }];
    _this.keyCodeConfig = {
      nextSlide: [39, 68, 38, 87],
      previousSlide: [37, 65, 40, 83],
      firstSlide: [81],
      lastSlide: [69],
      pause: [32]
    };
    _this.childNodesMutationObs = null;
    _this.state = _objectSpread({
      currentSlide: _this.props.slideIndex,
      dragging: false,
      easing: _this.props.disableAnimation ? '' : d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCircleOut"],
      hasInteraction: false,
      // to remove animation from the initial slide on the page load when non-default slideIndex is used
      isWrappingAround: false,
      left: 0,
      resetWrapAroundPosition: false,
      slideCount: Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(_this.props.children).length,
      top: 0,
      wrapToIndex: null,
      hasFocus: false
    }, Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["calcSomeInitialState"])(_this.props));
    _this.autoplayIterator = _this.autoplayIterator.bind(_assertThisInitialized(_this));
    _this.calcSlideHeightAndWidth = _this.calcSlideHeightAndWidth.bind(_assertThisInitialized(_this));
    _this.getChildNodes = _this.getChildNodes.bind(_assertThisInitialized(_this));
    _this.getMouseEvents = _this.getMouseEvents.bind(_assertThisInitialized(_this));
    _this.getOffsetDeltas = _this.getOffsetDeltas.bind(_assertThisInitialized(_this));
    _this.getTargetLeft = _this.getTargetLeft.bind(_assertThisInitialized(_this));
    _this.getTouchEvents = _this.getTouchEvents.bind(_assertThisInitialized(_this));
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_this));
    _this.nextSlide = _this.nextSlide.bind(_assertThisInitialized(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(_assertThisInitialized(_this));
    _this.previousSlide = _this.previousSlide.bind(_assertThisInitialized(_this));
    _this.renderControls = _this.renderControls.bind(_assertThisInitialized(_this));
    _this.resetAutoplay = _this.resetAutoplay.bind(_assertThisInitialized(_this));
    _this.setDimensions = _this.setDimensions.bind(_assertThisInitialized(_this));
    _this.setLeft = _this.setLeft.bind(_assertThisInitialized(_this));
    _this.setSlideHeightAndWidth = _this.setSlideHeightAndWidth.bind(_assertThisInitialized(_this));
    _this.startAutoplay = _this.startAutoplay.bind(_assertThisInitialized(_this));
    _this.stopAutoplay = _this.stopAutoplay.bind(_assertThisInitialized(_this));
    _this.establishChildNodesMutationObserver = _this.establishChildNodesMutationObserver.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // see https://github.com/facebook/react/issues/3417#issuecomment-121649937
      this.mounted = true;
      this.setLeft();
      this.setDimensions();
      this.bindEvents();
      this.establishChildNodesMutationObserver();

      if (this.props.autoplay) {
        this.startAutoplay();
      }

      var keyCodeConfig = _extends({}, this.keyCodeConfig, this.props.keyCodeConfig);

      this.keyCodeMap = this.getKeyCodeMap(keyCodeConfig);
      this.getlockScrollEvents().lockTouchScroll();
      var heightCheckDelay = 200;

      var initializeHeight = function initializeHeight(delay) {
        _this2.timers.push(setTimeout(function () {
          // If slideHeight is greater than zero, then
          // assume the app has been initialized.  If not,
          // keep trying to set dimensions until things work.
          if (_this2.state.slideHeight > 0) {
            return;
          }

          _this2.setDimensions(); // Increase delay per attempt so the checks
          // slowly decrease if content is taking forever to load.


          initializeHeight(delay + heightCheckDelay);
        }, delay));
      };

      initializeHeight(heightCheckDelay);
    } // eslint-disable-next-line complexity

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var slideChanged = prevState.currentSlide !== this.state.currentSlide;
      var heightModeChanged = prevProps.heightMode !== this.props.heightMode;
      var axisChanged = prevProps.vertical !== this.props.vertical;

      if (axisChanged) {
        this.onResize();
      } else if (slideChanged || heightModeChanged) {
        var image = this.getCurrentChildNodeImg();

        if (image) {
          image.addEventListener('load', this.setSlideHeightAndWidth);
          image.removeEventListener('load', this.setSlideHeightAndWidth);
        } else {
          this.setSlideHeightAndWidth();
        }
      }

      if (this.state.isWrappingAround) {
        this.isWrapped = true;
      }

      var prevSlideCount = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(prevProps.children).length;
      var slideCount = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(this.props.children).length;
      var slideCountChanged = prevSlideCount !== slideCount;

      if (slideCountChanged) {
        this.setState({
          slideCount: slideCount,
          currentSlide: this.props.slideIndex
        });
      }

      var _this$calcSlideHeight = this.calcSlideHeightAndWidth(),
          slideHeight = _this$calcSlideHeight.slideHeight;

      var heightMismatches = slideHeight !== prevState.slideHeight;

      if (this.mounted && heightMismatches) {
        this.setDimensions();
      } else {
        var updateDimensions = slideCountChanged || Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["shouldUpdate"])(prevProps, this.props, ['cellSpacing', 'vertical', 'slideWidth', 'slideHeight', 'heightMode', 'slidesToScroll', 'slidesToShow', 'transitionMode', 'cellAlign']);

        if (updateDimensions) {
          this.setDimensions(this.props);
        }
      }

      if (slideCountChanged && slideCount <= this.state.currentSlide) {
        this.goToSlide(Math.max(slideCount - 1, 0), this.props);
      } else if (prevProps.slideIndex !== this.props.slideIndex && this.props.slideIndex !== this.state.currentSlide && !this.state.isWrappingAround) {
        this.goToSlide(this.props.slideIndex, this.props);
      }

      if (prevProps.autoplay !== this.props.autoplay) {
        if (this.props.autoplay) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvents();
      this.disconnectChildNodesMutationObserver();
      this.stopAutoplay(); // see https://github.com/facebook/react/issues/3417#issuecomment-121649937

      this.mounted = false;

      for (var i = 0; i < this.timers.length; i++) {
        clearTimeout(this.timers[i]);
      }

      this.getlockScrollEvents().unlockTouchScroll();
    }
  }, {
    key: "establishChildNodesMutationObserver",
    value: function establishChildNodesMutationObserver() {
      var _this3 = this;

      var childNodes = this.getChildNodes();

      if (childNodes.length && 'MutationObserver' in window) {
        this.childNodesMutationObs = new MutationObserver(function () {
          _this3.setSlideHeightAndWidth();
        });

        var observeChildNodeMutation = function observeChildNodeMutation(node) {
          _this3.childNodesMutationObs.observe(node, {
            attributeFilter: ['style'],
            attributeOldValue: false,
            attributes: true,
            characterData: false,
            characterDataOldValue: false,
            childList: false,
            subtree: false
          });
        };

        var childNodesArray = Array.from(childNodes);

        for (var _i = 0, _childNodesArray = childNodesArray; _i < _childNodesArray.length; _i++) {
          var node = _childNodesArray[_i];
          observeChildNodeMutation(node);
        }
      }
    }
  }, {
    key: "disconnectChildNodesMutationObserver",
    value: function disconnectChildNodesMutationObserver() {
      if (this.childNodesMutationObs instanceof MutationObserver) {
        this.childNodesMutationObs.disconnect();
      }
    }
  }, {
    key: "getlockScrollEvents",
    value: function getlockScrollEvents() {
      var _this4 = this;

      var blockEvent = function blockEvent(e) {
        if (_this4.state.dragging) {
          var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["swipeDirection"])(_this4.touchObject.startX, e.touches[0].pageX, _this4.touchObject.startY, e.touches[0].pageY, _this4.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }
        }
      };

      var lockTouchScroll = function lockTouchScroll() {
        document.addEventListener('touchmove', blockEvent, {
          passive: false
        });
      };

      var unlockTouchScroll = function unlockTouchScroll() {
        document.removeEventListener('touchmove', blockEvent, {
          passive: false
        });
      };

      return {
        lockTouchScroll: lockTouchScroll,
        unlockTouchScroll: unlockTouchScroll
      };
    }
  }, {
    key: "getTouchEvents",
    value: function getTouchEvents() {
      var _this5 = this;

      if (this.props.swiping === false) {
        return {
          onTouchStart: this.handleMouseOver,
          onTouchEnd: this.handleMouseOut
        };
      }

      return {
        onTouchStart: function onTouchStart(e) {
          _this5.touchObject = {
            startX: e.touches[0].pageX,
            startY: e.touches[0].pageY
          };

          _this5.handleMouseOver();

          _this5.setState({
            dragging: true
          });
        },
        onTouchMove: function onTouchMove(e) {
          var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["swipeDirection"])(_this5.touchObject.startX, e.touches[0].pageX, _this5.touchObject.startY, e.touches[0].pageY, _this5.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this5.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - _this5.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - _this5.touchObject.startX, 2)));

          if (length >= 10) {
            if (_this5.clickDisabled === false) _this5.props.onDragStart(e);
            _this5.clickDisabled = true;
          }

          _this5.touchObject = {
            startX: _this5.touchObject.startX,
            startY: _this5.touchObject.startY,
            endX: e.touches[0].pageX,
            endY: e.touches[0].pageY,
            length: length,
            direction: direction
          };

          _this5.setState({
            left: _this5.props.vertical ? 0 : _this5.getTargetLeft(_this5.touchObject.length * _this5.touchObject.direction),
            top: _this5.props.vertical ? _this5.getTargetLeft(_this5.touchObject.length * _this5.touchObject.direction) : 0
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this5.handleSwipe(e);

          _this5.handleMouseOut();
        },
        onTouchCancel: function onTouchCancel(e) {
          _this5.handleSwipe(e);
        }
      };
    }
  }, {
    key: "getMouseEvents",
    value: function getMouseEvents() {
      var _this6 = this;

      if (this.props.dragging === false) {
        return {
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut
        };
      }

      return {
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onMouseDown: function onMouseDown(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }

          _this6.touchObject = {
            startX: e.clientX,
            startY: e.clientY
          };

          _this6.setState({
            dragging: true
          });
        },
        onMouseMove: function onMouseMove(e) {
          if (!_this6.state.dragging) {
            return;
          }

          var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["swipeDirection"])(_this6.touchObject.startX, e.clientX, _this6.touchObject.startY, e.clientY, _this6.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this6.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - _this6.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - _this6.touchObject.startX, 2))); // prevents disabling click just because mouse moves a fraction of a pixel

          if (length >= 10) {
            if (_this6.clickDisabled === false) _this6.props.onDragStart(e);
            _this6.clickDisabled = true;
          }

          _this6.touchObject = {
            startX: _this6.touchObject.startX,
            startY: _this6.touchObject.startY,
            endX: e.clientX,
            endY: e.clientY,
            length: length,
            direction: direction
          };

          _this6.setState({
            left: _this6.props.vertical ? 0 : _this6.getTargetLeft(_this6.touchObject.length * _this6.touchObject.direction),
            top: _this6.props.vertical ? _this6.getTargetLeft(_this6.touchObject.length * _this6.touchObject.direction) : 0
          });
        },
        onMouseUp: function onMouseUp(e) {
          if (_this6.touchObject.length === 0 || _this6.touchObject.length === undefined) {
            _this6.setState({
              dragging: false
            });

            return;
          }

          _this6.handleSwipe(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!_this6.state.dragging) {
            return;
          }

          _this6.handleSwipe(e);
        }
      };
    }
  }, {
    key: "pauseAutoplay",
    value: function pauseAutoplay() {
      if (this.props.autoplay) {
        this.autoplayPaused = true;
        this.stopAutoplay();
      }
    }
  }, {
    key: "unpauseAutoplay",
    value: function unpauseAutoplay() {
      if (this.props.autoplay && this.autoplayPaused) {
        this.startAutoplay();
        this.autoplayPaused = null;
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (this.props.pauseOnHover) {
        this.pauseAutoplay();
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (this.autoplayPaused) {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        hasFocus: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        hasFocus: false
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.clickDisabled === true) {
        if (event.metaKey || event.shiftKey || event.altKey || event.ctrlKey) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (event.nativeEvent) {
          event.nativeEvent.stopPropagation();
        }
      }
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe() {
      var _this7 = this;

      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      var touchLength = this.touchObject.length || 0;

      if (touchLength > this.state.slideWidth / slidesToShow / 5) {
        if (this.touchObject.direction === 1) {
          if (this.state.currentSlide + 1 >= this.state.slideCount && !this.props.wrapAround) {
            this.setState({
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[this.props.edgeEasing]
            });
          } else {
            this.nextSlide();
          }
        } else if (this.touchObject.direction === -1) {
          if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
            this.setState({
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[this.props.edgeEasing]
            });
          } else {
            this.previousSlide();
          }
        }
      } else if (touchLength > 0) {
        this.goToSlide(this.state.currentSlide);
      } // wait for `handleClick` event before resetting clickDisabled


      this.timers.push(setTimeout(function () {
        _this7.clickDisabled = false;
      }, 0));
      this.touchObject = {};
      this.setState({
        dragging: false
      });
    } // eslint-disable-next-line complexity

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (this.state.hasFocus && this.props.enableKeyboardControls) {
        var actionName = this.keyCodeMap[e.keyCode];

        switch (actionName) {
          case 'nextSlide':
            this.nextSlide();
            break;

          case 'previousSlide':
            this.previousSlide();
            break;

          case 'firstSlide':
            this.goToSlide(0, this.props);
            break;

          case 'lastSlide':
            this.goToSlide(this.state.slideCount - 1, this.props);
            break;

          case 'pause':
            if (this.state.pauseOnHover && this.props.autoplay) {
              this.setState({
                pauseOnHover: false
              });
              this.pauseAutoplay();
              break;
            } else {
              this.setState({
                pauseOnHover: true
              });
              this.unpauseAutoplay();
              break;
            }

        }
      }
    }
  }, {
    key: "getKeyCodeMap",
    value: function getKeyCodeMap(keyCodeConfig) {
      var keyCodeMap = {};
      Object.keys(keyCodeConfig).forEach(function (actionName) {
        keyCodeConfig[actionName].forEach(function (keyCode) {
          return keyCodeMap[keyCode] = actionName;
        });
      });
      return keyCodeMap;
    }
  }, {
    key: "autoplayIterator",
    value: function autoplayIterator() {
      if (this.props.wrapAround) {
        if (this.props.autoplayReverse) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }

        return;
      }

      if (this.props.autoplayReverse) {
        if (this.state.currentSlide !== 0) {
          this.previousSlide();
        } else {
          this.stopAutoplay();
        }
      } else if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
        this.nextSlide();
      } else {
        this.stopAutoplay();
      }
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
    }
  }, {
    key: "resetAutoplay",
    value: function resetAutoplay() {
      if (this.props.autoplay && !this.autoplayPaused) {
        this.stopAutoplay();
        this.startAutoplay();
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.autoplayID) {
        clearInterval(this.autoplayID);
      }
    } // Animation Method

  }, {
    key: "getTargetLeft",
    value: function getTargetLeft(touchOffset, slide) {
      var target = slide || this.state.currentSlide;
      var offset = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getAlignmentOffset"])(target, _objectSpread({}, this.props, {}, this.state));
      var left = this.state.slideWidth * target;
      var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;

      if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
        left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
        offset = 0;
        offset -= this.props.cellSpacing * (this.state.slideCount - 1);
      }

      offset -= touchOffset || 0;
      return (left - offset) * -1;
    }
  }, {
    key: "getOffsetDeltas",
    value: function getOffsetDeltas() {
      var offset = 0;

      if (this.state.isWrappingAround) {
        offset = this.getTargetLeft(null, this.state.wrapToIndex);
      } else {
        offset = this.getTargetLeft(this.touchObject.length * this.touchObject.direction);
      }

      return {
        tx: [this.props.vertical ? 0 : offset],
        ty: [this.props.vertical ? offset : 0]
      };
    }
  }, {
    key: "isEdgeSwiping",
    value: function isEdgeSwiping() {
      var _this$state = this.state,
          currentSlide = _this$state.currentSlide,
          slideCount = _this$state.slideCount,
          slideWidth = _this$state.slideWidth,
          slideHeight = _this$state.slideHeight,
          slidesToShow = _this$state.slidesToShow;

      var _this$getOffsetDeltas = this.getOffsetDeltas(),
          tx = _this$getOffsetDeltas.tx,
          ty = _this$getOffsetDeltas.ty;

      var offset = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getAlignmentOffset"])(currentSlide, _objectSpread({}, this.props, {}, this.state));

      if (this.props.vertical) {
        var rowHeight = slideHeight / slidesToShow;
        var slidesLeftToShow = slideCount - slidesToShow;
        var lastSlideLimit = rowHeight * slidesLeftToShow;
        var offsetTy = ty[0] - offset; // returns true if ty offset is outside first or last slide

        return offsetTy > 0 || -offsetTy > lastSlideLimit;
      }

      var offsetTx = tx[0] - offset; // returns true if tx offset is outside first or last slide

      return offsetTx > 0 || -offsetTx > slideWidth * (slideCount - 1);
    } // Action Methods

  }, {
    key: "goToSlide",
    value: function goToSlide(index, props) {
      var _this8 = this;

      if (props === undefined) {
        props = this.props;
      }

      if (this.isTransitioning) {
        return;
      }

      this.setState({
        hasInteraction: true,
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[props.easing]
      });
      this.isTransitioning = true;
      var previousSlide = this.state.currentSlide;

      if (index >= this.state.slideCount || index < 0) {
        if (!props.wrapAround) {
          this.isTransitioning = false;
          return;
        }

        if (index >= this.state.slideCount) {
          props.beforeSlide(this.state.currentSlide, 0);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this8.getTargetLeft(_this8.state.slideWidth, prevState.currentSlide),
              top: props.vertical ? _this8.getTargetLeft(_this8.state.slideWidth, prevState.currentSlide) : 0,
              currentSlide: 0,
              isWrappingAround: true,
              wrapToIndex: _this8.state.slideCount
            };
          }, function () {
            _this8.timers.push(setTimeout(function () {
              _this8.resetAutoplay();

              _this8.isTransitioning = false;

              if (index !== previousSlide) {
                _this8.props.afterSlide(0);
              }
            }, props.speed));
          });
          return;
        } else {
          var endSlide = index < 0 ? this.state.slideCount + index : this.state.slideCount - this.state.slidesToScroll;
          props.beforeSlide(this.state.currentSlide, endSlide);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this8.getTargetLeft(0, prevState.currentSlide),
              top: props.vertical ? _this8.getTargetLeft(0, prevState.currentSlide) : 0,
              currentSlide: endSlide,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            _this8.timers.push(setTimeout(function () {
              _this8.resetAutoplay();

              _this8.isTransitioning = false;

              if (index !== previousSlide) {
                _this8.props.afterSlide(_this8.state.slideCount - 1);
              }
            }, props.speed));
          });
          return;
        }
      }

      this.props.beforeSlide(this.state.currentSlide, index);
      this.setState({
        currentSlide: index
      }, function () {
        return _this8.timers.push(setTimeout(function () {
          _this8.resetAutoplay();

          _this8.isTransitioning = false;

          if (index !== previousSlide) {
            _this8.props.afterSlide(index);
          }
        }, props.speed));
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var _this$state2 = this.state,
          slidesToScroll = _this$state2.slidesToScroll,
          currentSlide = _this$state2.currentSlide,
          slideWidth = _this$state2.slideWidth,
          slideCount = _this$state2.slideCount;
      var targetSlideIndex = currentSlide + slidesToScroll;
      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        var swipeDistance = this.touchObject.length;

        if (swipeDistance > 0) {
          targetSlideIndex = Math.round(swipeDistance / slideWidth) + currentSlide;
        } else {
          slidesToShow = slidesToScroll;
        }
      }

      if (currentSlide >= slideCount - slidesToShow && !this.props.wrapAround && this.props.cellAlign === 'left') {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(targetSlideIndex);
      } else {
        if (this.props.slideWidth !== 1) {
          this.goToSlide(targetSlideIndex);
          return;
        }

        var offset = targetSlideIndex;
        var leftAlignSlideIndex = this.props.scrollMode === 'page' ? offset : Math.min(offset, slideCount - slidesToShow);
        var nextSlideIndex = this.props.cellAlign !== 'left' ? offset : leftAlignSlideIndex; // If nextSlideIndex is larger than last index, then
        // just navigate to last index

        this.goToSlide(Math.min(nextSlideIndex, slideCount - 1));
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      var _this$state3 = this.state,
          slidesToScroll = _this$state3.slidesToScroll,
          slideWidth = _this$state3.slideWidth,
          currentSlide = _this$state3.currentSlide;
      var targetSlideIndex = currentSlide - slidesToScroll;
      var swipeDistance = this.touchObject.length;

      if (this.props.slidesToScroll === 'auto' && swipeDistance > 0) {
        targetSlideIndex = currentSlide - Math.round(swipeDistance / slideWidth);
      }

      if (currentSlide <= 0 && !this.props.wrapAround) {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(targetSlideIndex);
      } else {
        this.goToSlide(Math.max(0, targetSlideIndex));
      }
    } // Bootstrapping

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(window, 'resize', this.onResize);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(document, 'visibilitychange', this.onVisibilityChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setDimensions(null, this.props.onResize);
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      if (document.hidden) {
        this.pauseAutoplay();
      } else {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(window, 'resize', this.onResize);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(document, 'visibilitychange', this.onVisibilityChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "calcSlideHeightAndWidth",
    value: function calcSlideHeightAndWidth(props) {
      // slide height
      props = props || this.props;
      var childNodes = this.getChildNodes();
      var slideHeight = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["calculateSlideHeight"])(props, this.state, childNodes); //slide width

      var _getPropsByTransition = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToShow']),
          slidesToShow = _getPropsByTransition.slidesToShow;

      var frame = this.frame;
      var slideWidth;

      if (this.props.animation === 'zoom') {
        slideWidth = frame.offsetWidth - frame.offsetWidth * 15 / 100;
      } else if (typeof props.slideWidth !== 'number') {
        slideWidth = parseInt(props.slideWidth);
      } else if (props.vertical) {
        slideWidth = slideHeight / slidesToShow * props.slideWidth;
      } else {
        slideWidth = frame.offsetWidth / slidesToShow * props.slideWidth;
      }

      if (!props.vertical) {
        slideWidth -= props.cellSpacing * ((100 - 100 / slidesToShow) / 100);
      }

      return {
        slideHeight: slideHeight,
        slideWidth: slideWidth
      };
    }
  }, {
    key: "setSlideHeightAndWidth",
    value: function setSlideHeightAndWidth() {
      var _this$calcSlideHeight2 = this.calcSlideHeightAndWidth(),
          slideHeight = _this$calcSlideHeight2.slideHeight,
          slideWidth = _this$calcSlideHeight2.slideWidth;

      if (slideHeight !== this.state.slideHeight || slideWidth !== this.state.slideWidth || this.isWrapped) {
        this.isWrapped = false;
        this.setState({
          slideHeight: slideHeight,
          slideWidth: slideWidth
        });
      }
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(props) {
      var stateCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      props = props || this.props;

      var _getPropsByTransition2 = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToShow', 'cellAlign', 'scrollMode']),
          slidesToShow = _getPropsByTransition2.slidesToShow,
          cellAlign = _getPropsByTransition2.cellAlign,
          scrollMode = _getPropsByTransition2.scrollMode;

      var frame = this.frame;

      var _this$calcSlideHeight3 = this.calcSlideHeightAndWidth(props),
          slideHeight = _this$calcSlideHeight3.slideHeight,
          slideWidth = _this$calcSlideHeight3.slideWidth;

      var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
      var frameWidth = props.vertical ? frameHeight : frame.offsetWidth;

      var _getPropsByTransition3 = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToScroll']),
          slidesToScroll = _getPropsByTransition3.slidesToScroll;

      if (slidesToScroll === 'auto' || scrollMode === 'page') {
        slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
      }

      this.setState({
        frameWidth: frameWidth,
        slideHeight: slideHeight,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        slideWidth: slideWidth,
        cellAlign: cellAlign
      }, function () {
        stateCb();
      });
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.frame.childNodes[0].childNodes;
    }
  }, {
    key: "getCurrentChildNodeImg",
    value: function getCurrentChildNodeImg() {
      var childNodes = this.getChildNodes();
      var currentChildNode = childNodes[this.props.slideIndex];
      return currentChildNode ? currentChildNode.getElementsByTagName('img')[0] : null;
    }
  }, {
    key: "setLeft",
    value: function setLeft() {
      var newLeft = this.props.vertical ? 0 : this.getTargetLeft();
      var newTop = this.props.vertical ? this.getTargetLeft() : 0;

      if (newLeft !== this.state.left || newTop !== this.state.top) {
        this.setState({
          left: newLeft,
          top: newTop
        });
      }
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this9 = this;

      if (this.props.withoutControls) {
        return this.controlsMap.map(function () {
          return null;
        });
      } else {
        return this.controlsMap.map(function (_ref) {
          var funcName = _ref.funcName,
              key = _ref.key;
          var func = _this9.props[funcName];
          var controlChildren = func && typeof func === 'function' && func({
            cellAlign: _this9.props.cellAlign,
            cellSpacing: _this9.props.cellSpacing,
            currentSlide: _this9.state.currentSlide,
            defaultControlsConfig: _this9.props.defaultControlsConfig,
            frameWidth: _this9.state.frameWidth,
            goToSlide: function goToSlide(index) {
              return _this9.goToSlide(index);
            },
            left: _this9.state.left,
            nextSlide: function nextSlide() {
              return _this9.nextSlide();
            },
            previousSlide: function previousSlide() {
              return _this9.previousSlide();
            },
            scrollMode: _this9.props.scrollMode,
            slideCount: _this9.state.slideCount,
            slidesToScroll: _this9.state.slidesToScroll,
            slidesToShow: _this9.state.slidesToShow,
            slideWidth: _this9.state.slideWidth,
            top: _this9.state.top,
            vertical: _this9.props.vertical,
            wrapAround: _this9.props.wrapAround
          });
          return controlChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: ["slider-control-".concat(key.toLowerCase()), _this9.props.defaultControlsConfig.containerClassName || ''].join(' ').trim(),
            style: _objectSpread({}, Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getDecoratorStyles"])(key), {}, _this9.props.getControlsContainerStyles(key))
          }, controlChildren);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$state4 = this.state,
          currentSlide = _this$state4.currentSlide,
          slideCount = _this$state4.slideCount,
          frameWidth = _this$state4.frameWidth;
      var _this$props = this.props,
          disableAnimation = _this$props.disableAnimation,
          frameOverflow = _this$props.frameOverflow,
          framePadding = _this$props.framePadding,
          renderAnnounceSlideMessage = _this$props.renderAnnounceSlideMessage,
          slidesToShow = _this$props.slidesToShow,
          vertical = _this$props.vertical;
      var duration = this.state.dragging || !this.state.dragging && this.state.resetWrapAroundPosition && this.props.wrapAround || disableAnimation || !this.state.hasInteraction ? 0 : this.props.speed;
      var frameStyles = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getFrameStyles"])(frameOverflow, vertical, framePadding, frameWidth);
      var touchEvents = this.getTouchEvents();
      var mouseEvents = this.getMouseEvents();
      var TransitionControl = _all_transitions__WEBPACK_IMPORTED_MODULE_6__["default"][this.props.transitionMode];
      var validChildren = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(this.props.children);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ['slider', this.props.className || ''].join(' ').trim(),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        ref: this.props.innerRef,
        tabIndex: 0,
        style: _extends({}, Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getSliderStyles"])(this.props.width, this.props.height), this.props.style)
      }, !this.props.autoplay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_announce_slide__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: renderAnnounceSlideMessage({
          currentSlide: currentSlide,
          slideCount: slideCount
        })
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: "slider-frame",
        ref: function ref(frame) {
          return _this10.frame = frame;
        },
        style: frameStyles
      }, touchEvents, mouseEvents, {
        onClickCapture: this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_move_Animate__WEBPACK_IMPORTED_MODULE_3___default.a, {
        show: true,
        start: {
          tx: 0,
          ty: 0
        },
        update: function update() {
          var _this10$getOffsetDelt = _this10.getOffsetDeltas(),
              tx = _this10$getOffsetDelt.tx,
              ty = _this10$getOffsetDelt.ty;

          if (_this10.props.disableEdgeSwiping && !_this10.props.wrapAround && _this10.isEdgeSwiping()) {
            return {};
          } else {
            return {
              tx: tx,
              ty: ty,
              timing: {
                duration: duration,
                ease: _this10.state.easing
              },
              events: {
                end: function end() {
                  var newLeft = _this10.props.vertical ? 0 : _this10.getTargetLeft();
                  var newTop = _this10.props.vertical ? _this10.getTargetLeft() : 0;

                  if (newLeft !== _this10.state.left || newTop !== _this10.state.top) {
                    _this10.setState({
                      left: newLeft,
                      top: newTop,
                      isWrappingAround: false,
                      resetWrapAroundPosition: true
                    }, function () {
                      _this10.setState({
                        resetWrapAroundPosition: false
                      });
                    });
                  }
                }
              }
            };
          }
        },
        children: function children(_ref2) {
          var tx = _ref2.tx,
              ty = _ref2.ty;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransitionControl, _extends({}, Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getTransitionProps"])(_this10.props, _this10.state), {
            deltaX: tx,
            deltaY: ty
          }), Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["addAccessibility"])(validChildren, slidesToShow, currentSlide));
        }
      })), this.renderControls(), this.props.autoGenerateStyleTag && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        type: "text/css",
        dangerouslySetInnerHTML: {
          __html: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getImgTagStyles"])()
        }
      }));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Carousel.propTypes = {
  afterSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['zoom']),
  autoGenerateStyleTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoplayReverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  beforeSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  cellAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'center', 'right']),
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  getControlsContainerStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  defaultControlsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    nextButtonClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    nextButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    nextButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    prevButtonClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    prevButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    prevButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    pagingDotsContainerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    pagingDotsClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    pagingDotsStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }),
  disableAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disableEdgeSwiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  easing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  edgeEasing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  enableKeyboardControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  frameOverflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  framePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heightMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['first', 'current', 'max']),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
  })]),
  initialSlideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  initialSlideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  keyCodeConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.exact({
    previousSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    nextSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    firstSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    lastSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
    pause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
  }),
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  opacityScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  renderAnnounceSlideMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  scrollMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['page', 'remainder']),
  slideIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideListMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['auto'])]),
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  speed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  swiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  transitionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['scroll', 'fade', 'scroll3d']),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  withoutControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Carousel.defaultProps = {
  afterSlide: function afterSlide() {},
  autoGenerateStyleTag: true,
  autoplay: false,
  autoplayInterval: 3000,
  autoplayReverse: false,
  beforeSlide: function beforeSlide() {},
  cellAlign: 'left',
  cellSpacing: 0,
  getControlsContainerStyles: function getControlsContainerStyles() {},
  defaultControlsConfig: {},
  disableAnimation: false,
  disableEdgeSwiping: false,
  dragging: true,
  easing: 'easeCircleOut',
  edgeEasing: 'easeElasticOut',
  enableKeyboardControls: false,
  frameOverflow: 'hidden',
  framePadding: '0px',
  height: 'inherit',
  heightMode: 'max',
  keyCodeConfig: {},
  onDragStart: function onDragStart() {},
  onResize: function onResize() {},
  pauseOnHover: true,
  renderAnnounceSlideMessage: _announce_slide__WEBPACK_IMPORTED_MODULE_7__["defaultRenderAnnounceSlideMessage"],
  renderBottomCenterControls: function renderBottomCenterControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["PagingDots"], props);
  },
  renderCenterLeftControls: function renderCenterLeftControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["PreviousButton"], props);
  },
  renderCenterRightControls: function renderCenterRightControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["NextButton"], props);
  },
  scrollMode: 'remainder',
  slideIndex: 0,
  slideListMargin: 10,
  slideOffset: 25,
  slidesToScroll: 1,
  slidesToShow: 1,
  slideWidth: 1,
  speed: 500,
  style: {},
  swiping: true,
  transitionMode: 'scroll',
  vertical: false,
  width: '100%',
  withoutControls: false,
  wrapAround: false
};


/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTransition3D; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/utilities */ "./node_modules/nuka-carousel/es/utilities/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MIN_ZOOM_SCALE = 0;
var MAX_ZOOM_SCALE = 1;

var ScrollTransition3D =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollTransition3D, _React$Component);

  function ScrollTransition3D(props) {
    var _this;

    _classCallCheck(this, ScrollTransition3D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTransition3D).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized(_this));
    return _this;
  }
  /* eslint-disable complexity */


  _createClass(ScrollTransition3D, [{
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(index) {
      var targetPosition = 0;
      var offset = 0;

      if (index !== this.props.currentSlide) {
        var relativeDistanceToCurrentSlide = this.getRelativeDistanceToCurrentSlide(index);
        targetPosition = (this.props.slideWidth + this.props.cellSpacing) * relativeDistanceToCurrentSlide - this.getZoomOffsetFor(relativeDistanceToCurrentSlide);
        offset = 0;

        if (this.props.animation === 'zoom' && (this.props.currentSlide === index + 1 || this.props.currentSlide === 0 && index === this.props.children.length - 1)) {
          offset = this.props.slideOffset;
        } else if (this.props.animation === 'zoom' && (this.props.currentSlide === index - 1 || this.props.currentSlide === this.props.children.length - 1 && index === 0)) {
          offset = -this.props.slideOffset;
        }
      }

      return targetPosition + offset;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow,
          vertical = _this$props.vertical;
      var positionValue = vertical ? top : left;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = _this2.getDistanceToCurrentSlide(index) <= slidesToShow / 2;
        var current = currentSlide === index;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : '').concat(current ? ' slide-current' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index,
          onClick: _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__["handleSelfFocus"],
          tabIndex: -1
        }, child);
      });
    }
  }, {
    key: "getZoomOffsetFor",
    value: function getZoomOffsetFor(relativeDistanceToCurrent) {
      if (relativeDistanceToCurrent === 0) {
        return 0;
      }

      var marginGeneratedByZoom = (1 - Math.pow(this.props.zoomScale, Math.abs(relativeDistanceToCurrent))) * this.props.slideWidth;
      var direction = relativeDistanceToCurrent < 0 ? -1 : 1;
      var result = marginGeneratedByZoom * direction + this.getZoomOffsetFor(relativeDistanceToCurrent < 0 ? relativeDistanceToCurrent + 1 : relativeDistanceToCurrent - 1);
      return result;
    }
  }, {
    key: "getDistance",
    value: function getDistance(index, referenceIndex) {
      return Math.abs(index - referenceIndex);
    }
  }, {
    key: "getDistanceToCurrentSlide",
    value: function getDistanceToCurrentSlide(index) {
      var _this$props2 = this.props,
          wrapAround = _this$props2.wrapAround,
          currentSlide = _this$props2.currentSlide,
          slideCount = _this$props2.slideCount;
      return wrapAround ? Math.min(Math.min(this.getDistance(index, 0) + this.getDistance(currentSlide, slideCount), this.getDistance(index, slideCount) + this.getDistance(currentSlide, 0)), this.getDistance(index, currentSlide)) : this.getDistance(index, currentSlide);
    }
  }, {
    key: "getRelativeDistanceToCurrentSlide",
    value: function getRelativeDistanceToCurrentSlide(index) {
      var _this$props3 = this.props,
          wrapAround = _this$props3.wrapAround,
          currentSlide = _this$props3.currentSlide,
          slideCount = _this$props3.slideCount;

      if (wrapAround) {
        var distanceByLeftEge = this.getDistance(index, 0) + this.getDistance(currentSlide, slideCount);
        var distanceByRightEdge = this.getDistance(index, slideCount) + this.getDistance(currentSlide, 0);
        var absoluteDirectDistance = this.getDistance(index, currentSlide);
        var minimumDistance = Math.min(Math.min(distanceByLeftEge, distanceByRightEdge), absoluteDirectDistance);

        switch (minimumDistance) {
          case absoluteDirectDistance:
            return index - currentSlide;

          case distanceByLeftEge:
            return distanceByLeftEge;

          case distanceByRightEdge:
            return -distanceByRightEdge;

          default:
            return 0;
        }
      } else {
        return index - currentSlide;
      }
    }
  }, {
    key: "getTransformScale",
    value: function getTransformScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.zoomScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
    }
  }, {
    key: "getOpacityScale",
    value: function getOpacityScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.opacityScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var _this$props4 = this.props,
          vertical = _this$props4.vertical,
          slideCount = _this$props4.slideCount,
          cellSpacing = _this$props4.cellSpacing,
          slideWidth = _this$props4.slideWidth;
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.getTransformScale(index);
      return {
        boxSizing: 'border-box',
        display: vertical ? 'block' : 'inline-block',
        height: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__["getSlideHeight"])(this.props),
        left: vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: vertical ? cellSpacing / 2 : 'auto',
        marginLeft: vertical ? 'auto' : cellSpacing / 2,
        marginRight: vertical ? 'auto' : cellSpacing / 2,
        marginTop: vertical ? cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        opacity: this.getOpacityScale(index),
        position: 'absolute',
        top: vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'left 0.4s ease-out, transform 0.4s ease-out, opacity 0.4s ease-out',
        verticalAlign: 'top',
        width: vertical ? '100%' : slideWidth,
        zIndex: slideCount - this.getDistanceToCurrentSlide(index)
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      var listWidth = this.props.slideWidth * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      return {
        boxSizing: 'border-box',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        left: "calc(50% - (".concat(this.props.slideWidth, "px / 2))"),
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "".concat(this.props.slideListMargin, "px ").concat(this.props.cellSpacing / 2 * -1, "px"),
        MozBoxSizing: 'border-box',
        padding: 0,
        position: 'relative',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y'),
        width: this.props.vertical ? 'auto' : '100%'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles()
      }, children);
    }
  }]);

  return ScrollTransition3D;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ScrollTransition3D.propTypes = {
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  heightMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['first', 'current', 'max']),
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  opacityScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideListMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zoomScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ScrollTransition3D.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  dragging: false,
  heightMode: 'max',
  isWrappingAround: false,
  left: 0,
  opacityScale: 0.65,
  slideCount: 0,
  slideHeight: 0,
  slideListMargin: 0,
  slidesToShow: 3,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: true,
  zoomScale: 0.75
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/fade-transition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/fade-transition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FadeTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/utilities */ "./node_modules/nuka-carousel/es/utilities/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FadeTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FadeTransition, _React$Component);

  function FadeTransition(props) {
    var _this;

    _classCallCheck(this, FadeTransition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FadeTransition).call(this, props));
    _this.fadeFromSlide = props.currentSlide;
    return _this;
  }

  _createClass(FadeTransition, [{
    key: "formatChildren",
    value: function formatChildren(children, opacity) {
      var _this2 = this;

      var _this$props = this.props,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, opacity),
          key: index,
          onClick: _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__["handleSelfFocus"],
          tabIndex: -1
        }, child);
      });
    }
  }, {
    key: "getSlideOpacityAndLeftMap",
    value: function getSlideOpacityAndLeftMap(fadeFrom, fadeTo, fade) {
      // Figure out which position to fade to
      var fadeToPosition = fadeTo;

      if (fadeFrom > fade && fadeFrom === 0) {
        fadeToPosition = fadeFrom - this.props.slidesToShow;
      } else if (fadeFrom < fade && fadeFrom + this.props.slidesToShow > this.props.slideCount - 1) {
        fadeToPosition = fadeFrom + this.props.slidesToShow;
      } // Calculate opacity for active slides


      var opacity = {};

      if (fadeFrom === fadeTo) {
        opacity[fadeFrom] = 1;
      } else {
        var distance = fadeFrom - fadeToPosition;
        opacity[fadeFrom] = (fade - fadeToPosition) / distance;
        opacity[fadeTo] = (fadeFrom - fade) / distance;
      } // Calculate left for slides and merge in opacity


      var map = {};

      for (var i = 0; i < this.props.slidesToShow; i++) {
        map[fadeFrom + i] = {
          opacity: opacity[fadeFrom],
          left: this.props.slideWidth * i
        };
        map[fadeTo + i] = {
          opacity: opacity[fadeTo],
          left: this.props.slideWidth * i
        };
      }

      return map;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, data) {
      return {
        boxSizing: 'border-box',
        display: 'block',
        height: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__["getSlideHeight"])(this.props),
        left: data[index] ? data[index].left : 0,
        listStyleType: 'none',
        marginBottom: 'auto',
        marginLeft: this.props.cellSpacing / 2,
        marginRight: this.props.cellSpacing / 2,
        marginTop: 'auto',
        MozBoxSizing: 'border-box',
        opacity: data[index] ? data[index].opacity : 0,
        position: 'absolute',
        top: 0,
        verticalAlign: 'top',
        visibility: data[index] ? 'inherit' : 'hidden',
        width: this.props.slideWidth
      };
    }
  }, {
    key: "getContainerStyles",
    value: function getContainerStyles() {
      var width = this.props.slideWidth * this.props.slidesToShow;
      return {
        boxSizing: 'border-box',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        display: 'block',
        height: this.props.slideHeight,
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        MozBoxSizing: 'border-box',
        padding: 0,
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y'),
        width: width
      };
    }
  }, {
    key: "render",
    value: function render() {
      var fade = -(this.props.deltaX || this.props.deltaY) / this.props.slideWidth % this.props.slideCount;

      if (parseInt(fade) === fade) {
        this.fadeFromSlide = fade;
      }

      var opacityAndLeftMap = this.getSlideOpacityAndLeftMap(this.fadeFromSlide, this.props.currentSlide, fade);
      var children = this.formatChildren(this.props.children, opacityAndLeftMap);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getContainerStyles()
      }, children);
    }
  }]);

  return FadeTransition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


FadeTransition.propTypes = {
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  heightMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['first', 'current', 'max']),
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FadeTransition.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  heightMode: 'max',
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slidesToShow: 1,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/scroll-transition.js":
/*!************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/scroll-transition.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/utilities */ "./node_modules/nuka-carousel/es/utilities/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MIN_ZOOM_SCALE = 0;
var MAX_ZOOM_SCALE = 1;

var ScrollTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollTransition, _React$Component);

  function ScrollTransition(props) {
    var _this;

    _classCallCheck(this, ScrollTransition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTransition).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized(_this));
    return _this;
  }
  /* eslint-disable complexity */


  _createClass(ScrollTransition, [{
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(currentSlideIndex, positionValue) {
      var offset = 0;

      if (this.props.animation === 'zoom' && (this.props.currentSlide === currentSlideIndex + 1 || this.props.currentSlide === 0 && currentSlideIndex === this.props.children.length - 1)) {
        offset = this.props.slideOffset;
      } else if (this.props.animation === 'zoom' && (this.props.currentSlide === currentSlideIndex - 1 || this.props.currentSlide === this.props.children.length - 1 && currentSlideIndex === 0)) {
        offset = -this.props.slideOffset;
      }

      var targetPosition = (this.props.slideWidth + this.props.cellSpacing) * currentSlideIndex;
      var alignmentOffset = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__["getAlignmentOffset"])(currentSlideIndex, this.props);
      var relativePosition = positionValue - alignmentOffset;
      var startSlideIndex = Math.min(Math.abs(Math.floor(relativePosition / this.props.slideWidth)), this.props.slideCount - 1);

      if (this.props.wrapAround && currentSlideIndex !== startSlideIndex) {
        var slidesOutOfView = Math.max(this.props.slideCount - Math.ceil(this.props.frameWidth / this.props.slideWidth), // Total slides in view
        0);
        var slidesOutOfViewBefore = Math.floor(slidesOutOfView / 2);
        var slidesOutOfViewAfter = slidesOutOfView - slidesOutOfViewBefore;
        var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_3__["getSlideDirection"])(startSlideIndex, this.props.currentSlide, this.props.isWrappingAround);

        if (direction < 0) {
          var temp = slidesOutOfViewBefore;
          slidesOutOfViewBefore = slidesOutOfViewAfter;
          slidesOutOfViewAfter = temp;
        }

        var slidesInViewBefore = Math.ceil(alignmentOffset / this.props.slideWidth);
        var slidesBefore = slidesInViewBefore + slidesOutOfViewBefore;
        var slidesInViewAfter = Math.ceil((this.props.frameWidth - alignmentOffset) / this.props.slideWidth) - 1;
        var slidesAfter = slidesInViewAfter + slidesOutOfViewAfter;
        var distanceFromStart = Math.abs(startSlideIndex - currentSlideIndex);

        if (currentSlideIndex < startSlideIndex) {
          if (distanceFromStart > slidesBefore) {
            targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount + currentSlideIndex);
          }
        } else if (distanceFromStart > slidesAfter) {
          targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount - currentSlideIndex) * -1;
        }
      }

      return targetPosition + offset || 0;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow,
          vertical = _this$props.vertical;
      var positionValue = vertical ? top : left;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index,
          onClick: _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__["handleSelfFocus"],
          tabIndex: -1
        }, child);
      });
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.props.animation === 'zoom' && this.props.currentSlide !== index ? Math.max(Math.min(this.props.zoomScale, MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
      return {
        boxSizing: 'border-box',
        display: this.props.vertical ? 'block' : 'inline-block',
        height: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_2__["getSlideHeight"])(this.props),
        left: this.props.vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        position: 'absolute',
        top: this.props.vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'transform .4s linear',
        verticalAlign: 'top',
        width: this.props.vertical ? '100%' : this.props.slideWidth
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles(styles) {
      var deltaX = styles.deltaX,
          deltaY = styles.deltaY;
      var listWidth = this.props.slideWidth * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var transform = "translate3d(".concat(deltaX, "px, ").concat(deltaY, "px, 0)");
      return {
        boxSizing: 'border-box',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        display: 'block',
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        padding: 0,
        position: 'relative',
        MozBoxSizing: 'border-box',
        msTransform: "translate(".concat(deltaX, "px, ").concat(deltaY, "px)"),
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y'),
        transform: transform,
        WebkitTransform: transform,
        width: 'auto'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      var deltaX = this.props.deltaX;
      var deltaY = this.props.deltaY;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles({
          deltaX: deltaX,
          deltaY: deltaY
        })
      }, children);
    }
  }]);

  return ScrollTransition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ScrollTransition.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['zoom']),
  cellAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  frameWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  heightMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['first', 'current', 'max']),
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zoomScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ScrollTransition.defaultProps = {
  cellAlign: 'left',
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  frameWidth: 0,
  heightMode: 'max',
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slidesToScroll: 1,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false,
  zoomScale: 0.85
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js":
/*!****************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js ***!
  \****************************************************************************/
/*! exports provided: addAccessibility, getValidChildren, findMaxHeightSlideInRange, findCurrentHeightSlide, calculateSlideHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccessibility", function() { return addAccessibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidChildren", function() { return getValidChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMaxHeightSlideInRange", function() { return findMaxHeightSlideInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCurrentHeightSlide", function() { return findCurrentHeightSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSlideHeight", function() { return calculateSlideHeight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var addAccessibility = function addAccessibility(children, slidesToShow) {
  if (slidesToShow > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, child.props);
    });
  } else {
    // when slidesToshow is 1
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, child.props);
    });
  }
};
var getValidChildren = function getValidChildren(children) {
  // .toArray automatically removes invalid React children
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);
};

var getMax = function getMax(a, b) {
  return a > b ? a : b;
};

var getHeightOfSlide = function getHeightOfSlide(slide) {
  if (!slide) {
    return 0;
  }

  if (slide.children && slide.children.length > 0) {
    // Need to convert slide.children from HTMLCollection
    // to an array
    var children = _toConsumableArray(slide.children);

    return children.reduce(function (totalHeight, child) {
      return totalHeight + child.offsetHeight;
    }, 0);
  } else {
    return slide.offsetHeight;
  }
}; // end - is exclusive


var findMaxHeightSlideInRange = function findMaxHeightSlideInRange(slides, start, end) {
  var maxHeight = 0;

  if (slides.length === 0 || start < 0 || end < 0 || start > slides.length - 1 || end > slides.length) {
    return maxHeight;
  }

  if (start < end) {
    for (var i = start; i < end; i++) {
      maxHeight = getMax(getHeightOfSlide(slides[i]), maxHeight);
    }
  } else if (start > end) {
    // Finding max in a wrap around
    for (var _i = start; _i < slides.length; _i++) {
      maxHeight = getMax(getHeightOfSlide(slides[_i]), maxHeight);
    }

    for (var _i2 = 0; _i2 < end; _i2++) {
      maxHeight = getMax(getHeightOfSlide(slides[_i2]), maxHeight);
    }
  } else {
    // start === end
    maxHeight = getHeightOfSlide(slides[start]);
  }

  return maxHeight;
};
var findCurrentHeightSlide = function findCurrentHeightSlide(currentSlide, slidesToShow, alignment, wrapAround, slides) {
  if (slidesToShow > 1) {
    var startIndex = currentSlide;
    var lastIndex = Math.min(Math.ceil(slidesToShow) + currentSlide, slides.length);
    var offset = alignment === 'center' ? (slidesToShow - 1) / 2 : slidesToShow - 1;

    switch (alignment) {
      case 'center':
        startIndex = Math.floor(currentSlide - offset);
        lastIndex = Math.ceil(currentSlide + offset) + 1;
        break;

      case 'right':
        startIndex = Math.floor(currentSlide - offset);
        lastIndex = currentSlide + 1;
        break;

      case 'left':
        startIndex = Math.floor(currentSlide + offset);
        lastIndex = Math.ceil(currentSlide + offset) + 1;
        break;
    } // inclusive


    startIndex = wrapAround && startIndex < 0 ? slides.length + startIndex : Math.max(startIndex, 0); // exclusive

    lastIndex = wrapAround && lastIndex > slides.length ? lastIndex - slides.length : Math.min(lastIndex, slides.length);
    return findMaxHeightSlideInRange(slides, startIndex, lastIndex);
  } else {
    return getHeightOfSlide(slides[currentSlide]);
  }
};
var calculateSlideHeight = function calculateSlideHeight(props, state) {
  var childNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var heightMode = props.heightMode,
      vertical = props.vertical,
      initialSlideHeight = props.initialSlideHeight,
      wrapAround = props.wrapAround;
  var slidesToShow = state.slidesToShow,
      currentSlide = state.currentSlide,
      cellAlign = state.cellAlign;
  var firstSlide = childNodes[0];

  if (firstSlide && heightMode === 'first') {
    return vertical ? getHeightOfSlide(firstSlide) * slidesToShow : getHeightOfSlide(firstSlide);
  }

  if (heightMode === 'max') {
    return findMaxHeightSlideInRange(childNodes, 0, childNodes.length);
  }

  if (heightMode === 'current') {
    return findCurrentHeightSlide(currentSlide, slidesToShow, cellAlign, wrapAround, childNodes);
  }

  return initialSlideHeight || 100;
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/style-utilities.js":
/*!********************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/style-utilities.js ***!
  \********************************************************************/
/*! exports provided: getImgTagStyles, getSlideHeight, getAlignmentOffset, getDecoratorStyles, getSliderStyles, getFrameStyles, getTransitionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgTagStyles", function() { return getImgTagStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideHeight", function() { return getSlideHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentOffset", function() { return getAlignmentOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecoratorStyles", function() { return getDecoratorStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSliderStyles", function() { return getSliderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameStyles", function() { return getFrameStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProps", function() { return getTransitionProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var getImgTagStyles = function getImgTagStyles() {
  return ".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }";
};
var getSlideHeight = function getSlideHeight(props) {
  var childCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(props.children);
  var listWidth = props.slideWidth * childCount;
  var spacingOffset = props.cellSpacing * childCount;
  var calculatedHeight = props.vertical ? listWidth + spacingOffset : props.slideHeight;
  return calculatedHeight > 0 && props.heightMode !== 'current' ? calculatedHeight : 'auto';
};
var getAlignmentOffset = function getAlignmentOffset(slideIndex, config) {
  var offset = 0;

  switch (config.cellAlign) {
    case 'left':
      {
        offset = 0;
        offset -= config.cellSpacing * slideIndex;
        break;
      }

    case 'center':
      {
        offset = (config.frameWidth - config.slideWidth) / 2;
        offset -= config.cellSpacing * slideIndex;
        break;
      }

    case 'right':
      {
        offset = config.frameWidth - config.slideWidth;
        offset -= config.cellSpacing * slideIndex;
        break;
      }
  }

  return offset;
};
var getDecoratorStyles = function getDecoratorStyles(position) {
  switch (position) {
    case 'TopLeft':
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }

    case 'TopCenter':
      {
        return {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'TopRight':
      {
        return {
          position: 'absolute',
          top: 0,
          right: 0
        };
      }

    case 'CenterLeft':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'CenterCenter':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          WebkitTransform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)'
        };
      }

    case 'CenterRight':
      {
        return {
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'BottomLeft':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: 0
        };
      }

    case 'BottomCenter':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'BottomRight':
      {
        return {
          position: 'absolute',
          bottom: 0,
          right: 0
        };
      }

    default:
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }
  }
};
var getSliderStyles = function getSliderStyles(propWidth, propHeight) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propHeight,
    MozBoxSizing: 'border-box',
    position: 'relative',
    width: propWidth
  };
};
var getFrameStyles = function getFrameStyles(propFrameOverFlow, propVertical, propFramePadding, stateFrameWidth) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propVertical ? stateFrameWidth || 'initial' : '100%',
    margin: propFramePadding,
    MozBoxSizing: 'border-box',
    msTransform: 'translate(0, 0)',
    overflow: propFrameOverFlow,
    padding: 0,
    position: 'relative',
    touchAction: "pinch-zoom ".concat(propVertical ? 'pan-x' : 'pan-y'),
    transform: 'translate3d(0, 0, 0)',
    WebkitTransform: 'translate3d(0, 0, 0)'
  };
};
var getTransitionProps = function getTransitionProps(props, state) {
  return {
    animation: props.animation,
    cellAlign: props.cellAlign,
    cellSpacing: props.cellSpacing,
    currentSlide: state.currentSlide,
    dragging: props.dragging,
    frameWidth: parseInt(state.frameWidth),
    heightMode: props.heightMode,
    isWrappingAround: state.isWrappingAround,
    left: state.left,
    opacityScale: props.opacityScale,
    slideCount: state.slideCount,
    slideHeight: state.slideHeight,
    slideListMargin: props.slideListMargin,
    slideOffset: props.slideOffset,
    slidesToScroll: props.scrollMode === 'page' ? state.slidesToShow : props.slidesToScroll,
    slidesToShow: state.slidesToShow,
    slideWidth: state.slideWidth,
    top: state.top,
    vertical: props.vertical,
    wrapAround: props.wrapAround,
    zoomScale: props.zoomScale
  };
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/utilities.js ***!
  \**************************************************************/
/*! exports provided: addEvent, removeEvent, addAccessibility, getPropsByTransitionMode, swipeDirection, getSlideDirection, shouldUpdate, calcSomeInitialState, handleSelfFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccessibility", function() { return addAccessibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropsByTransitionMode", function() { return getPropsByTransitionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swipeDirection", function() { return swipeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideDirection", function() { return getSlideDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSomeInitialState", function() { return calcSomeInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelfFocus", function() { return handleSelfFocus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = eventHandle;
  }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = null;
  }
};
var addAccessibility = function addAccessibility(children, slidesToShow, currentSlide) {
  var needsTabIndex;

  if (slidesToShow > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      var firstVisibleSlide = index >= currentSlide;
      var lastVisibleSlide = index < slidesToShow + currentSlide;
      needsTabIndex = firstVisibleSlide && lastVisibleSlide;
      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'false',
        tabIndex: 0
      } : {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, {}, ariaProps));
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      needsTabIndex = index !== currentSlide;
      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'true'
      } : {
        'aria-hidden': 'false',
        tabIndex: 0
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, {}, ariaProps));
    });
  }
};
var getPropsByTransitionMode = function getPropsByTransitionMode(props, keys) {
  var slidesToShow = props.slidesToShow,
      transitionMode = props.transitionMode;
  var updatedDefaults = {};

  if (transitionMode === 'fade') {
    keys.forEach(function (key) {
      switch (key) {
        case 'slidesToShow':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'slidesToScroll':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'cellAlign':
          updatedDefaults[key] = 'left';
          break;

        default:
          updatedDefaults[key] = props[key];
          break;
      }
    });
  } else {
    keys.forEach(function (key) {
      updatedDefaults[key] = props[key];
    });
  }

  return updatedDefaults;
};
var swipeDirection = function swipeDirection(x1, x2, y1, y2, vertical) {
  var xDist = x1 - x2;
  var yDist = y1 - y2;
  var r = Math.atan2(yDist, xDist);
  var swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1;
  }

  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1;
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1;
  }

  if (vertical === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
};
var getSlideDirection = function getSlideDirection(start, end, isWrapping) {
  var direction = 0;
  if (start === end) return direction;

  if (isWrapping) {
    direction = start < end ? -1 : 1;
  } else {
    direction = start < end ? 1 : -1;
  }

  return direction;
};
var shouldUpdate = function shouldUpdate(curr, next, keys) {
  var update = false;

  for (var i = 0; i < keys.length; i++) {
    if (curr[keys[i]] !== next[keys[i]]) {
      update = true;
      break;
    }
  }

  return update;
};
var calcSomeInitialState = function calcSomeInitialState(props) {
  var _getPropsByTransition = getPropsByTransitionMode(props, ['slidesToScroll', 'slidesToShow', 'cellAlign']),
      slidesToScroll = _getPropsByTransition.slidesToScroll,
      slidesToShow = _getPropsByTransition.slidesToShow,
      cellAlign = _getPropsByTransition.cellAlign;

  var slideWidth = props.vertical ? props.initialSlideHeight || 0 : props.initialSlideWidth || 0;
  var slideHeight = props.vertical ? (props.initialSlideHeight || 0) * props.slidesToShow : props.initialSlideHeight || 0;
  var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
  var frameWidth = props.vertical ? frameHeight : '100%';
  return {
    slideWidth: slideWidth,
    slideHeight: slideHeight,
    frameWidth: frameWidth,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    cellAlign: cellAlign
  };
};
var handleSelfFocus = function handleSelfFocus(e) {
  if (e && e.currentTarget) {
    e.currentTarget.focus();
  }
};

/***/ }),

/***/ "./node_modules/react-move/Animate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-move/Animate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _NodeGroup = _interopRequireDefault(__webpack_require__(/*! ../NodeGroup */ "./node_modules/react-move/NodeGroup/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-move/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate() {
    _classCallCheck(this, Animate);

    return _possibleConstructorReturn(this, _getPrototypeOf(Animate).apply(this, arguments));
  }

  _createClass(Animate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          start = _this$props.start,
          enter = _this$props.enter,
          update = _this$props.update,
          leave = _this$props.leave,
          interpolation = _this$props.interpolation,
          children = _this$props.children;
      var data = typeof start === 'function' ? start() : start;
      return _react["default"].createElement(_NodeGroup["default"], {
        data: show ? [data] : [],
        start: function start() {
          return data;
        },
        keyAccessor: keyAccessor,
        interpolation: interpolation,
        enter: typeof enter === 'function' ? enter : function () {
          return enter;
        },
        update: typeof update === 'function' ? update : function () {
          return update;
        },
        leave: typeof leave === 'function' ? leave : function () {
          return leave;
        }
      }, function (nodes) {
        if (!nodes[0]) {
          return null;
        }

        var renderedChildren = children(nodes[0].state);
        return renderedChildren && _react["default"].Children.only(renderedChildren);
      });
    }
  }]);

  return Animate;
}(_react.Component);

Animate.propTypes =  true ? {
  show: _propTypes["default"].bool,
  interpolation: _propTypes["default"].func,
  start: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  enter: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].object]),
  update: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].object]),
  leave: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].array, _propTypes["default"].object]),
  children: _propTypes["default"].func.isRequired
} : undefined;
Animate.defaultProps = {
  show: true,
  interpolation: _utils.numeric
};
var _default = Animate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-move/NodeGroup/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-move/NodeGroup/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _kapellmeister = __webpack_require__(/*! kapellmeister */ "./node_modules/kapellmeister/es/index.js");

var _mergeKeys = _interopRequireDefault(__webpack_require__(/*! ../core/mergeKeys */ "./node_modules/react-move/core/mergeKeys.js"));

var _types = __webpack_require__(/*! ../core/types */ "./node_modules/react-move/core/types.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-move/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NodeGroup = function (_Component) {
  _inherits(NodeGroup, _Component);

  function NodeGroup(props) {
    var _this;

    _classCallCheck(this, NodeGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];
        var isTransitioning = n.isTransitioning();

        if (isTransitioning) {
          pending = true;
        }

        if (n.type === _types.LEAVE && !isTransitioning) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "interval", null);

    _defineProperty(_assertThisInitialized(_this), "unmounting", false);

    var interpolation = props.interpolation;

    var Node = function (_BaseNode) {
      _inherits(Node, _BaseNode);

      function Node(key, data) {
        var _this2;

        _classCallCheck(this, Node);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this));

        _defineProperty(_assertThisInitialized(_this2), "getInterpolator", interpolation);

        _this2.key = key;
        _this2.data = data;
        _this2.type = _types.ENTER;
        return _this2;
      }

      return Node;
    }(_kapellmeister.BaseNode);

    _this.state = {
      Node: Node,
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    };
    return _this;
  }

  _createClass(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = (0, _kapellmeister.interval)(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        nodeHash[key].stopTransitions();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && _react["default"].Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var Node = prevState.Node,
            nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            var node = new Node();
            node.key = k;
            node.data = d;
            node.type = _types.ENTER;
            nodeHash[k] = node;
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.data = data[nextKeyIndex[_k]];
            n.type = _types.UPDATE;
          } else {
            n.type = _types.LEAVE;
          }
        }

        var mergedNodeKeys = (0, _mergeKeys["default"])(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === _types.ENTER) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _n.transition(enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === _types.LEAVE) {
            _n.transition(leave(_d, keyIndex[_k2]));
          } else {
            _n.transition(update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(_react.Component);

NodeGroup.propTypes =  true ? {
  data: _propTypes["default"].array.isRequired,
  keyAccessor: _propTypes["default"].func.isRequired,
  interpolation: _propTypes["default"].func,
  start: _propTypes["default"].func.isRequired,
  enter: _propTypes["default"].func,
  update: _propTypes["default"].func,
  leave: _propTypes["default"].func,
  children: _propTypes["default"].func.isRequired
} : undefined;
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {},
  interpolation: _utils.numeric
};
var _default = NodeGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-move/core/mergeKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/react-move/core/mergeKeys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

var _default = mergeKeys;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-move/core/types.js":
/*!***********************************************!*\
  !*** ./node_modules/react-move/core/types.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEAVE = exports.UPDATE = exports.ENTER = void 0;
var ENTER = 'ENTER';
exports.ENTER = ENTER;
var UPDATE = 'UPDATE';
exports.UPDATE = UPDATE;
var LEAVE = 'LEAVE';
exports.LEAVE = LEAVE;

/***/ }),

/***/ "./node_modules/react-move/utils.js":
/*!******************************************!*\
  !*** ./node_modules/react-move/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numeric = numeric;

function numeric(beg, end) {
  var a = +beg;
  var b = +end - a;
  return function (t) {
    return a + b * t;
  };
}

/***/ }),

/***/ "./src/components/blog/List.js":
/*!*************************************!*\
  !*** ./src/components/blog/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/blog/List.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function List(props) {
  var _this = this;

  var luminantColor = props.luminantColor,
      blogData = props.blogData,
      sendToListValue = props.sendToListValue;
  var userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.common.userColor;
  });
  return __jsx(ListArea, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, blogData && blogData.length > 0 && blogData.map(function (item, index) {
    // console.log(blogData, 'blog');
    var date = item.now_date ? item.now_date : ''; // console.log(date, 'date');

    var stillUtc = moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(date).format(); // const stillUtc = momentz

    var convertedDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(stillUtc).format('YYYY월 M월 D일');
    return __jsx(CardContainer, {
      key: index,
      luminantColor: luminantColor,
      userColor: userColor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, item.first_image && __jsx(ImageArea, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 19
      }
    }, __jsx(Img, {
      src: item.first_image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    })), __jsx(ContentArea, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(Date, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, item.now_date ? "\uC791\uC131\uC77C ".concat(convertedDate) : ''), __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }, item.title), __jsx(Comment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, item.comment), __jsx(Location, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, item.location_name && __jsx(Location_icon, {
      src: '/images/location.png',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 44
      }
    }), item.location_name)));
  }), blogData && blogData.length === 0 && __jsx(WriteWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(Write, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "\uCCAB\uBC88\uC9F8 \uAE00\uC744 \uC791\uC131\uD574\uBCF4\uC138\uC694."), __jsx(WriteImg, {
    src: '/images/keyboard.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))));
}
var ListArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ListArea",
  componentId: "sc-15878t4-0"
})(["width:100%;height:100%;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "List__Content",
  componentId: "sc-15878t4-1"
})(["padding:0 40px 40px;box-sizing:border-box;display:flex;flex-wrap:wrap;flex-direction:column;"]);
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__CardContainer",
  componentId: "sc-15878t4-2"
})(["display:flex;flex-direction:column;margin:0 0 30px;width:100%;padding:30px;box-sizing:border-box;border-:2px dotted ", ";background:#f6f6f6;border-radius:5px;"], function (props) {
  return props.userColor ? props.userColor : '#ddd';
});
var ImageArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ImageArea",
  componentId: "sc-15878t4-3"
})(["width:100%;height:100%;margin-bottom:10px;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__Img",
  componentId: "sc-15878t4-4"
})(["width:100%;height:100%;"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__ContentArea",
  componentId: "sc-15878t4-5"
})(["width:100%;height:100%;display:flex;flex-direction:column;"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Date",
  componentId: "sc-15878t4-6"
})(["display:flex;justify-content:flex-end;font-size:13px;color:#aaa;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Title",
  componentId: "sc-15878t4-7"
})(["font-size:21px;font-weight:bold;margin-top:10px;"]);
var Comment = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Comment",
  componentId: "sc-15878t4-8"
})(["font-size:15px;margin-top:10px;line-height:1.4;"]);
var Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Location",
  componentId: "sc-15878t4-9"
})(["color:#6da3f7;font-size:13px;margin-top:15px;display:flex;align-items:center;"]);
var Location_icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__Location_icon",
  componentId: "sc-15878t4-10"
})(["width:14px;height:14px;"]);
var WriteWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__WriteWrap",
  componentId: "sc-15878t4-11"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var Write = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "List__Write",
  componentId: "sc-15878t4-12"
})(["font-size:", ";color:#ccc;margin:200px 0 10px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont);
var WriteImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "List__WriteImg",
  componentId: "sc-15878t4-13"
})(["max-width:80px;max-height:80px;"]);

/***/ })

})
//# sourceMappingURL=blog.js.455590a6160fcd80fd18.hot-update.js.map