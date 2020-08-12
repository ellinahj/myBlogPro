module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/mypage/index.js":
/*!*******************************!*\
  !*** ./pages/mypage/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mypage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_common_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/common/Layout */ "./src/components/common/Layout.js");
/* harmony import */ var _src_containers_mypage_TopInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/containers/mypage/TopInfo */ "./src/containers/mypage/TopInfo.js");
/* harmony import */ var _src_containers_mypage_EditBasicInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/containers/mypage/EditBasicInfo */ "./src/containers/mypage/EditBasicInfo.js");
/* harmony import */ var _src_containers_mypage_EditPw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/containers/mypage/EditPw */ "./src/containers/mypage/EditPw.js");
/* harmony import */ var _src_containers_mypage_EditMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/containers/mypage/EditMenu */ "./src/containers/mypage/EditMenu.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/pages/mypage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Mypage() {
  const {
    0: showEdit,
    1: setShowEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showEditPw,
    1: setShowEditPw
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickEdit = e => {
    setShowEdit(!showEdit);
  };

  const clickEditPw = e => {
    setShowEditPw(!showEditPw);
  };

  return __jsx(_src_components_common_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_containers_mypage_TopInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditBasicInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clickEdit: clickEdit,
    showEdit: showEdit,
    setShowEdit: setShowEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_src_containers_mypage_EditPw__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showEditPw: showEditPw,
    clickEditPw: clickEditPw,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/actions/base/actionTypes.js":
/*!*****************************************!*\
  !*** ./src/actions/base/actionTypes.js ***!
  \*****************************************/
/*! exports provided: INCREMENT, SET_THEME_COLOR, SET_LOGIN, SET_USER_INFO, SET_CATE, SET_LOADING, SET_TOOLTIP, SET_CLICKMENU, SET_FONT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME_COLOR", function() { return SET_THEME_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGIN", function() { return SET_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_INFO", function() { return SET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CATE", function() { return SET_CATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOOLTIP", function() { return SET_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLICKMENU", function() { return SET_CLICKMENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FONT", function() { return SET_FONT; });
const INCREMENT = 'INCREMENT';
const SET_THEME_COLOR = 'SET_THEME_COLOR';
const SET_LOGIN = 'SET_LOGIN';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_CATE = 'SET_CATE';
const SET_LOADING = 'SET_LOADING';
const SET_TOOLTIP = 'SET_TOOTIP';
const SET_CLICKMENU = 'SET_CLICKMENU';
const SET_FONT = 'SET_FONT';

/***/ }),

/***/ "./src/actions/base/index.js":
/*!***********************************!*\
  !*** ./src/actions/base/index.js ***!
  \***********************************/
/*! exports provided: increment, setThemeColor, setLogin, setUserInfo, setCategory, setLoading, setToolTip, setClickMenu, setFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeColor", function() { return setThemeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogin", function() { return setLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserInfo", function() { return setUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategory", function() { return setCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToolTip", function() { return setToolTip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClickMenu", function() { return setClickMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFont", function() { return setFont; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/base/actionTypes.js");


const increment = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"],
    payload
  };
};

const setThemeColor = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_THEME_COLOR"],
    payload
  };
};

const setLogin = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOGIN"],
    payload
  };
};

const setUserInfo = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_USER_INFO"],
    payload
  };
};

const setCategory = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CATE"],
    payload
  };
};

const setLoading = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
    payload
  };
};

const setToolTip = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_TOOLTIP"],
    payload
  };
};

const setClickMenu = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CLICKMENU"],
    payload
  };
};

const setFont = payload => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_FONT"],
    payload
  };
};



/***/ }),

/***/ "./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/*! exports provided: login, loginCheck, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCheck", function() { return loginCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var _utils_apiSend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiSend */ "./src/utils/apiSend.js");


const login = data => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/auth/login',
    method: 'post',
    data: data
  });
};

const loginCheck = config => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/user/info',
    method: 'get',
    headers: config
  });
};

const join = data => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/auth/join',
    method: 'post',
    data: data
  });
};



/***/ }),

/***/ "./src/api/blog.js":
/*!*************************!*\
  !*** ./src/api/blog.js ***!
  \*************************/
/*! exports provided: getCate, setBlog, getBlog, getSearchedBlog, deleteBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCate", function() { return getCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlog", function() { return setBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchedBlog", function() { return getSearchedBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony import */ var _utils_apiSend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiSend */ "./src/utils/apiSend.js");


const getCate = config => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/category`,
    method: 'get',
    headers: config
  });
};

const setBlog = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/blog/write/`,
    method: 'post',
    headers: config,
    data: data
  });
};

const getBlog = (config, id) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/blog/read/${id}`,
    method: 'get',
    headers: config
  });
};

const getSearchedBlog = (config, cateId, value) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/blog/read/search/${cateId}/${value}`,
    method: 'get',
    headers: config
  });
};

const deleteBlog = (config, data) => {
  console.log(data, 'data');
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/blog/delete/`,
    method: 'post',
    headers: config,
    data: data
  });
};



/***/ }),

/***/ "./src/api/category.js":
/*!*****************************!*\
  !*** ./src/api/category.js ***!
  \*****************************/
/*! exports provided: updateCate, deleteCate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCate", function() { return updateCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCate", function() { return deleteCate; });
/* harmony import */ var _utils_apiSend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiSend */ "./src/utils/apiSend.js");


const updateCate = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category/update',
    method: 'post',
    headers: config,
    data: data
  });
};

const deleteCate = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category/delete',
    method: 'post',
    headers: config,
    data: data
  });
};



/***/ }),

/***/ "./src/api/user.js":
/*!*************************!*\
  !*** ./src/api/user.js ***!
  \*************************/
/*! exports provided: findNickname, updateInfo, checkPwd, updatePwd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNickname", function() { return findNickname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInfo", function() { return updateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPwd", function() { return checkPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePwd", function() { return updatePwd; });
/* harmony import */ var _utils_apiSend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiSend */ "./src/utils/apiSend.js");


const findNickname = data => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/user/nickname`,
    method: 'post',
    data: data
  });
};

const updateInfo = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/user/update/info`,
    method: 'post',
    headers: config,
    data: data
  });
};

const checkPwd = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/user/pwd`,
    method: 'post',
    headers: config,
    data: data
  });
};

const updatePwd = (config, data) => {
  return Object(_utils_apiSend__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/user/update/pwd`,
    method: 'post',
    headers: config,
    data: data
  });
};



/***/ }),

/***/ "./src/components/common/BottomMenu.js":
/*!*********************************************!*\
  !*** ./src/components/common/BottomMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/BottomMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function BottomMenu({
  isScrollDown
}) {
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.userColor);
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(BottomMenuWrap, {
    isScrollDown: isScrollDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Router.asPath === '/blog' && __jsx(BottomMenuSize, {
    userColor: userColor,
    onClick: () => Router.push('/post'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("svg", {
    onClick: () => Router.push('/post'),
    height: "40",
    viewBox: "0 0 512 512",
    width: "40",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0",
    fill: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0",
    fill: "#fafafa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }))));
}
const BottomMenuWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "BottomMenu__BottomMenuWrap",
  componentId: "m9mboh-0"
})(["position:fixed;display:block;", " left:50%;bottom:20px;z-index:100;transform:translateX(-50%);svg{cursor:pointer;}"], props => !props.isScrollDown && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["display:none;"]));
const BottomMenuSize = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BottomMenu__BottomMenuSize",
  componentId: "m9mboh-1"
})(["display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:44px;height:44px;color:#fff;border-radius:22px;background:", ";cursor:pointer;"], props => props.userColor || '#ccc'); // const AddFont = styled.div`
//   width: 44px;
//   height: 44px;
//   color: #fff;
//   border-radius: 22px;
//   background: ${props => props.userColor || '#ccc'};
// `;

/***/ }),

/***/ "./src/components/common/Container.js":
/*!********************************************!*\
  !*** ./src/components/common/Container.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container(props) {
  return __jsx(ContainerWrap, {
    className: props.className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 10
    }
  }, props.children);
}
const ContainerWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Container__ContainerWrap",
  componentId: "sc-1x2z8qs-0"
})(["width:100%;height:100%;padding:40px;box-sizing:border-box;"]);

/***/ }),

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth */ "./src/api/auth.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/common/ImgBtn */ "./src/components/common/ImgBtn.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Header() {
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.common.userColor);
  const userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.common.userInfo);
  const isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.common.isLoggedIn);
  const tooltip = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.common.showToolTip);
  const luminantColor = userColor && Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["colorLuminance"])(userColor, 0.5);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedIn !== undefined) {
      return;
    }

    if (Router.asPath !== '/join') {
      const showTool = JSON.parse(localStorage.getItem('showTool'));

      if (showTool === false) {
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setToolTip"])(false));
      }

      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      Object(_api_auth__WEBPACK_IMPORTED_MODULE_5__["loginCheck"])(config).then(res => {
        if (res.status === 200 && res.data) {
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setThemeColor"])(res.data.user_color));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setUserInfo"])(res.data));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setFont"])(res.data.user_font));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setLoading"])(false));
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setLogin"])(true));
        }
      });
    }
  }, []);

  const handleToolTip = () => {
    localStorage.setItem('showTool', JSON.stringify(false));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_6__["setToolTip"])(false));
  };

  return __jsx(HeadWrap, {
    userColor: userColor,
    luminantColor: luminantColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(Logo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "MyBlog_")), __jsx(ProfileContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, userInfo && (userInfo.profile_url ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/mypage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(Img, {
    src: userInfo.profile_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  })) : __jsx(StyledTitle, {
    hoverColor: userInfo,
    onClick: () => Router.push('/mypage'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "\uB098\uC758 \uC0C9\uAE54\uC5D0 \uB9DE\uB294, \uB098\uC758 \uB85C\uADF8.")), !userInfo && __jsx(StyledTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, "\uB098\uC758 \uC0C9\uAE54\uC5D0 \uB9DE\uB294, \uB098\uC758 \uB85C\uADF8."), isLoggedIn && tooltip && __jsx(ToolTipWrap, {
    profileUrl: userInfo && userInfo.profile_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "triangle test_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(ToolTip, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "\uB098\uC758 \uC815\uBCF4\uB97C ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 22
    }
  }), "\uC785\uB825\uD574\uBCF4\uC138\uC694!"), __jsx(CloseBtn, {
    src: '/images/minClose.svg',
    width: 12,
    height: 12,
    onClick: handleToolTip,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }))));
}
const HeadWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__HeadWrap",
  componentId: "dzw6po-0"
})(["width:100%;max-width:765px;height:60px;position:fixed;top:0;margin:0 auto;display:flex;align-items:center;background-image:linear-gradient(90deg,", ",", ");z-index:101;justify-content:space-between;"], props => props.userColor, props => props.luminantColor);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Logo",
  componentId: "dzw6po-1"
})(["font-weight:bold;font-size:25px;margin-left:20px;color:#fff;cursor:pointer;"]);
const ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__ProfileContainer",
  componentId: "dzw6po-2"
})(["margin-right:20px;position:relative;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__StyledLink",
  componentId: "dzw6po-3"
})(["cursor:pointer;"]);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Header__StyledTitle",
  componentId: "dzw6po-4"
})(["color:#fff;font-size:17px;:hover{color:", ";cursor:", ";}"], props => props.hoverColor && '#f7f7f7', props => props.hoverColor ? 'pointer' : '');
const ToolTipWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__ToolTipWrap",
  componentId: "dzw6po-5"
})(["position:absolute;top:", ";right:", ";width:95px;height:50px;background:#fefefe;z-index:9;display:flex;align-items:center;justify-content:center;border-radius:3px;border:1px solid #eee;animation:motion 0.8s linear infinite alternate;margin-top:0;@keyframes motion{0%{margin-top:0px;}100%{margin-top:7px;}}.triangle{top:-19px;right:12px;position:absolute;display:inline-block;width:0;height:0;border-style:solid;border-width:10px 5px;border-radius:3px;}.triangle.test_1{border-color:transparent transparent #fefefe transparent;}"], props => props.profileUrl ? '45px' : '30px', props => props.profileUrl ? '12px' : '0px');
const ToolTip = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__ToolTip",
  componentId: "dzw6po-6"
})(["color:#000;font-size:", ";line-height:18px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_8__["theme"].ssFont);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Img",
  componentId: "dzw6po-7"
})(["cursor:pointer;width:", ";height:", ";border-radius:", "px;margin-right:15px;"], props => props.width || '30px', props => props.width || '30px', props => props.width / 2 || 15);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Header__CloseBtn",
  componentId: "dzw6po-8"
})(["position:absolute;top:6px;right:6px;&:hover{background:#ddd;}"]);

/***/ }),

/***/ "./src/components/common/ImgBtn.js":
/*!*****************************************!*\
  !*** ./src/components/common/ImgBtn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImgBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/ImgBtn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ImgBtn(props) {
  const {
    className,
    src,
    onClick,
    width,
    height,
    bg,
    radius,
    padding
  } = props;
  return __jsx(ImgWrap, {
    className: className,
    src: src,
    onClick: onClick,
    width: width,
    height: height,
    bg: bg,
    radius: radius,
    padding: padding,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  });
}
const ImgWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "ImgBtn__ImgWrap",
  componentId: "j20iz9-0"
})(["width:", ";height:", ";cursor:pointer;background:", ";border-radius:", ";padding:", ";"], props => `${props.width}px` || '100%', props => `${props.height}px` || '100%', props => props.bg ? props.bg : '', props => props.radius ? `${props.radius}` : '', props => `${props.padding}px` || '');

/***/ }),

/***/ "./src/components/common/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/common/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/common/Header.js");
/* harmony import */ var _BottomMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BottomMenu */ "./src/components/common/BottomMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout({
  children
}) {
  const {
    0: isScrollDown,
    1: setScollDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const prevScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  const handle = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll === 0 || currentScroll < prevScroll.current) {
      setScollDown(true);
    } else {
      setScollDown(false);
    }

    prevScroll.current = currentScroll;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.loading);
  return __jsx(LayoutWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(Main, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, children)), __jsx(_BottomMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isScrollDown: isScrollDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
}
const LayoutWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__LayoutWrap",
  componentId: "sc-1m1dv9h-0"
})(["width:100%;height:100%;padding-top:60px;position:relative;max-width:765px;margin:0 auto;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Container",
  componentId: "sc-1m1dv9h-1"
})(["padding-bottom:30px;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Main",
  componentId: "sc-1m1dv9h-2"
})(["position:relative;"]);
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Loading",
  componentId: "sc-1m1dv9h-3"
})(["position:absolute;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:9999;"]);

/***/ }),

/***/ "./src/components/common/PhotoUpload.js":
/*!**********************************************!*\
  !*** ./src/components/common/PhotoUpload.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-crop */ "react-image-crop");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/common/PhotoUpload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Upload(props) {
  const {
    imgFormData,
    prevImg,
    showEdit,
    clickEdit
  } = props;
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([null]);
  const {
    0: upImg,
    1: setUpImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: crop,
    1: setCrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    unit: '%',
    width: 100,
    aspect: 1
  });
  const {
    0: previewUrl,
    1: setPreviewUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([null]);
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: filename,
    1: setFilename
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: fileInfo,
    1: setFileInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.common.userColor);
  const userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.common.userInfo);
  let inputRefs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);

  const controlFileBtn = (e, index) => {
    e.preventDefault();
    inputRefs.current[index].click();
  };

  const addImg = (e, index) => {
    setIndex(index);

    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setFileInfo(e.target.files[0].type);
    }
  };

  const onLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(img => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, filename);
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }

        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        const tempPreviewUrl = [...previewUrl];
        tempPreviewUrl.splice(index, 1, window.URL.createObjectURL(blob));
        setPreviewUrl(tempPreviewUrl);
        prevImg(tempPreviewUrl);
        const blobToFile = new File([blob], filename);
        const tempFile = [...file];
        tempFile.splice(index, 1, blobToFile);
        setFile(tempFile);
      }, fileInfo);
    }).catch(err => {
      console.log('blob promise err', err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    imgFormData(file);
  }, [file]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUpImg([]);
  }, [showEdit]);
  return __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(TitleCenter, {
    onClick: e => clickEdit(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "\uD504\uB85C\uD544\uBCC0\uACBD"), __jsx(ProfileRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(ProfileCenter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, showEdit && __jsx(EditWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(EditImg, {
    src: '/images/edit.svg',
    width: 16,
    onClick: e => controlFileBtn(e, 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), __jsx("input", {
    name: "file",
    type: "file",
    accept: "image/*",
    ref: ref => inputRefs.current[0] = ref,
    style: {
      display: 'none'
    },
    onChange: e => addImg(e, 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }), showEdit && previewUrl && previewUrl[0] ? __jsx(Img, {
    src: previewUrl[0],
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }) : __jsx(Img, {
    src: userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png',
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }))), showEdit && __jsx(ProfileRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(ReactCropDiv, {
    userColor: userColor,
    src: upImg,
    onImageLoaded: onLoad,
    crop: crop,
    onChange: img => setCrop(img),
    onComplete: makeClientCrop,
    uploadImg: upImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  })));
}
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__Row",
  componentId: "sc-5k8m7r-0"
})(["display:flex;flex-direction:column;align-items:flex-start;"]);
const PreviewImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PhotoUpload__PreviewImg",
  componentId: "sc-5k8m7r-1"
})(["width:100%;"]);
const ImageRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__ImageRow",
  componentId: "sc-5k8m7r-2"
})(["display:flex;flex-direction:column;"]);
const ProfileRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__ProfileRow",
  componentId: "sc-5k8m7r-3"
})(["display:flex;width:100%;justify-content:center;margin:20px 0 20px;"]);
const TitleCenter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__TitleCenter",
  componentId: "sc-5k8m7r-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin:20px 0;", ";font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["BlueEditBtn"], props => props.theme.mFont);
const ProfileCenter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__ProfileCenter",
  componentId: "sc-5k8m7r-5"
})(["display:flex;align-items:center;justify-content:center;position:relative;"]);
const ReactCropDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_image_crop__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "PhotoUpload__ReactCropDiv",
  componentId: "sc-5k8m7r-6"
})(["margin-bottom:", ";width:", ";height:", ";"], props => props.uploadImg.length > 0 ? '20px' : '0px', props => props.uploadImg.length && '200px', props => props.uploadImg.length && '200px');
const EditImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PhotoUpload__EditImg",
  componentId: "sc-5k8m7r-7"
})(["width:", ";height:", ";border-radius:", "px;"], props => props.width || '30px', props => props.width || '30px', props => props.width / 2 || 15);
const EditWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhotoUpload__EditWrap",
  componentId: "sc-5k8m7r-8"
})(["cursor:pointer;background-color:#666;position:absolute;bottom:0;left:46px;margin-right:0;width:24px;height:24px;border-radius:12px;display:flex;align-items:center;justify-content:center;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PhotoUpload__Img",
  componentId: "sc-5k8m7r-9"
})(["width:", ";height:", ";border-radius:", "px;margin-right:0;border:1px solid #ddd;"], props => props.width || '30px', props => props.width || '30px', props => props.width / 2 || 15);

/***/ }),

/***/ "./src/components/mypage/ThemeChange.js":
/*!**********************************************!*\
  !*** ./src/components/mypage/ThemeChange.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeChange; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/components/mypage/ThemeChange.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ThemeChange(props) {
  const {
    handleThemeChange
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: openPicker,
    1: setOpenPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const themeButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.common.userColor);
  const popover = {
    position: 'absolute',
    // right: '30px',
    zIndex: '2'
  };
  const cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  const handlePickComplete = color => {
    color.rgb.a = 0.2;
    const changeRgb = color.rgb;
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setThemeColor"])(color.hex));
  };

  const handleClick = () => {
    setOpenPicker(true);
  };

  const handleClose = () => {
    setOpenPicker(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //입력창 밖 선택 시 검색내역창 감추기
    function handleClickOutside(e) {
      if (themeButton.current && !themeButton.current.contains(e.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(WidthDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(ThemeButton, {
    onClick: handleClick,
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "\uD14C\uB9C8\uBCC0\uACBD")), openPicker ? __jsx("div", {
    style: popover,
    ref: themeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: cover,
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(react_color__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: userColor,
    onChangeComplete: handlePickComplete,
    disableAlpha: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })) : null, __jsx(ColorBox, {
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
}
const Con = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThemeChange__Con",
  componentId: "sc-1vtxb22-0"
})(["display:flex;align-items:center;"]);
const WidthDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThemeChange__WidthDiv",
  componentId: "sc-1vtxb22-1"
})(["width:120px;"]);
const ThemeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "ThemeChange__ThemeButton",
  componentId: "sc-1vtxb22-2"
})(["width:80px;height:33px;display:flex;align-items:center;justify-content:center;border-radius:10px;outline:none;cursor:pointer;border:1px solid ", ";color:", ";background:#fff;"], props => props.userColor, props => props.userColor);
const ColorBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThemeChange__ColorBox",
  componentId: "sc-1vtxb22-3"
})(["width:30px;height:30px;border-radius:10px;background:", ";"], props => props.userColor);

/***/ }),

/***/ "./src/containers/mypage/EditBasicInfo.js":
/*!************************************************!*\
  !*** ./src/containers/mypage/EditBasicInfo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_mypage_ThemeChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mypage/ThemeChange */ "./src/components/mypage/ThemeChange.js");
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _components_common_PhotoUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/PhotoUpload */ "./src/components/common/PhotoUpload.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/EditBasicInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function InfoContainer(props) {
  const {
    setShowEdit,
    showEdit,
    clickEdit
  } = props;
  const userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.common.userInfo);
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.common.userColor);
  const {
    0: changeImgFile,
    1: setChangeImgFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: prevImg,
    1: setPrevImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: checkTimeout,
    1: setCheckTimeout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: nickname,
    1: setNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: mainTitle,
    1: setMainTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: nicknameAvailable,
    1: setNicknameAvailable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: radioIndex,
    1: setRadioIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userInfo && userInfo.user_font === `'Gothic A1', sans-serif` ? 0 : 1);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const checked = index => {
    setRadioIndex(index);
  };

  const handlePhotoChange = (file, prevImg) => {
    setChangeImgFile(file);
    setPrevImg(prevImg);
  };

  const handleTitleChange = value => {
    setMainTitle(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    userInfo && setNickname(userInfo.nickname);
  }, [userInfo]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    userInfo && setMainTitle(userInfo.main_title);
  }, [userInfo]);

  const handleNicknameChange = value => {
    // if (value.length > 0) {
    console.log(value, 'value');
    setNickname(value);
    setNicknameAvailable(null);
    checkTimeout && clearTimeout(checkTimeout);

    if (!!value) {
      const timer = setTimeout(() => {
        const getToken = localStorage.getItem('mydiary_token');

        if (getToken) {
          const data = {
            nickname: value
          };
          Object(_api_user__WEBPACK_IMPORTED_MODULE_7__["findNickname"])(data).then(res => {
            console.log(res, 'resrer');

            if (res.status === 200) {
              if (res.data.message === 'available') {
                setNicknameAvailable(true);
              } else if (res.data.message === 'dupilicated') {
                setNicknameAvailable(false);
              }
            }
          });
        }
      }, 1000);
      setCheckTimeout(timer);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    changeImgFile && changeImgFile.forEach((item, index) => formData.append(`file`, item));
    let font = radioIndex;

    if (radioIndex === 0) {
      font = `'Gothic A1', sans-serif`;
    } else if (radioIndex === 1) {
      font = `'Nanum Myeongjo', serif`;
    }

    const data = {
      nickname: nickname,
      main_title: mainTitle,
      user_color: userColor,
      user_font: font
    };
    formData.append('data', JSON.stringify(data));
    const token = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: token
    };
    Object(_api_user__WEBPACK_IMPORTED_MODULE_7__["updateInfo"])(config, formData).then(res => {
      if (res.status === 200 && res.data) {
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_8__["setUserInfo"])(res.data));
        clickEdit('changed');
        setShowEdit(false);
        dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_8__["setFont"])(res.data.user_font));
        alert('변경되었습니다.');
      }
    });
  }; // console.log(userInfo, 'userInfof');


  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(TopCon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_components_common_PhotoUpload__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clickEdit: clickEdit,
    imgFormData: handlePhotoChange,
    prevImg: setPrevImg,
    showEdit: showEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "\uB2C9\uB124\uC784"), __jsx(InputCol, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(InputRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, showEdit && userInfo ? __jsx(Input, {
    name: "nickname",
    value: nickname,
    onChange: e => handleNicknameChange(e.target.value),
    maxLength: "10",
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }) : userInfo && userInfo.nickname, showEdit && __jsx(CountRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx(CountNickname, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, nickname && nickname.length <= MAX_NICKNAME ? nickname.length : 0), __jsx(Slush, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 23
    }
  }, "/"), __jsx(Maxcount, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, MAX_NICKNAME))), showEdit && !!nickname && nicknameAvailable === true && __jsx(Match, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 74
    }
  }, "\uC0AC\uC6A9\uAC00\uB2A5"), showEdit && userInfo.nickname !== nickname && nicknameAvailable === false && __jsx(Mismatch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, "\uC774\uBBF8\uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4."))), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "\uB300\uD45C\uBB38\uAD6C"), __jsx(InputRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, showEdit && userInfo ? __jsx(Input, {
    name: "main_title",
    value: mainTitle,
    onChange: e => handleTitleChange(e.target.value),
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }) : userInfo && userInfo.main_title)), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_components_mypage_ThemeChange__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  })), __jsx(MarginFontRow, {
    usercolor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, showEdit ? __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 27
    }
  }, "\uD3F0\uD2B8\uBCC0\uACBD") : __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  }, "\uD3F0\uD2B8"), showEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Gothic, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "radio_container center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, "\uD3F0\uD2B81", __jsx("input", {
    type: "radio",
    onChange: e => checked(0),
    checked: radioIndex === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkmark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }))), __jsx(NanumMyeongjo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "radio_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, "\uD3F0\uD2B82", __jsx("input", {
    type: "radio",
    onChange: e => checked(1),
    checked: radioIndex === 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkmark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  })))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, radioIndex === 0 ? '폰트1' : '폰트2')), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, showEdit && __jsx(SubmitBtn, {
    disabled: userInfo.nickname !== nickname && nicknameAvailable !== true,
    available: userInfo.nickname === nickname || nicknameAvailable === true,
    onClick: handleSubmit,
    usercolor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "\uBCC0\uACBD"))))));
}
const Con = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_common_Container__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "EditBasicInfo__Con",
  componentId: "ag8tan-0"
})(["display:flex;justify-content:center;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Column",
  componentId: "ag8tan-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Row",
  componentId: "ag8tan-2"
})(["display:flex;width:100%;"]);
const MarginRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "EditBasicInfo__MarginRow",
  componentId: "ag8tan-3"
})(["margin-bottom:30px;align-items:center;@media screen and (max-width:780px){display:block;margin-bottom:40px;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Title",
  componentId: "ag8tan-4"
})(["", ";width:120px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["BasicTitle"]);
const TopCon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__TopCon",
  componentId: "ag8tan-5"
})(["width:100%;background:#fafafa;padding:20px 30px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "EditBasicInfo__Input",
  componentId: "ag8tan-6"
})(["width:170px;height:20px;"]);
const SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "EditBasicInfo__SubmitBtn",
  componentId: "ag8tan-7"
})(["", ";margin:30px auto 0;padding:5px 10px;font-size:", ";cursor:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["BasicButton"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].mFont, props => props.available === true ? 'pointer' : 'not-allowed');
const Match = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Match",
  componentId: "ag8tan-8"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].greenFont, _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
const Mismatch = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Mismatch",
  componentId: "ag8tan-9"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].redFont, _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
const InputCol = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__InputCol",
  componentId: "ag8tan-10"
})(["display:flex;flex-direction:column;"]);
const InputRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__InputRow",
  componentId: "ag8tan-11"
})(["display:flex;align-items:center;@media screen and (max-width:780px){margin-top:15px;}"]);
const CountRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__CountRow",
  componentId: "ag8tan-12"
})(["display:flex;"]);
const CountNickname = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__CountNickname",
  componentId: "ag8tan-13"
})(["color:#aaa;margin-left:10px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
const Slush = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Slush",
  componentId: "ag8tan-14"
})(["color:#aaa;margin:0 2px 0;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
const Maxcount = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditBasicInfo__Maxcount",
  componentId: "ag8tan-15"
})(["color:#aaa;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].sFont);
const MarginFontRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "EditBasicInfo__MarginFontRow",
  componentId: "ag8tan-16"
})(["margin-bottom:20px;align-items:center;@media screen and (max-width:780px){display:block;}.end{margin-left:auto;}.center{display:flex;align-items:center;}.react-datepicker__input-container input{height:30px;font-size:15px;line-height:30px;padding-left:5px;background:", ";outline:none;border:0;border-radius:5px;::placeholder{color:#000;}}.radio_container{display:block;position:relative;padding-left:30px;margin-right:30px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.radio_container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.checkmark{position:absolute;top:0px;left:0;height:18px;width:18px;background:#ddd;border-radius:50%;}.radio_container:hover input ~ .checkmark{background-color:", ";}.radio_container input:checked ~ .checkmark{background-color:", ";}.checkmark:after{content:'';position:absolute;display:none;}.radio_container input:checked ~ .checkmark:after{display:block;}.radio_container .checkmark:after{top:6px;left:6px;width:6px;height:6px;border-radius:50%;background:", ";}"], props => props.usercolor, props => props.usercolor || '#aaa', props => props.usercolor || '#aaa', props => props.usercolor || '#fff');
const NanumMyeongjo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__NanumMyeongjo",
  componentId: "ag8tan-17"
})(["font-family:'Nanum Myeongjo',serif;margin-right:15px;@media screen and (max-width:780px){margin-top:15px;}"]);
const Gothic = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditBasicInfo__Gothic",
  componentId: "ag8tan-18"
})(["font-family:'Gothic A1',sans-serif;margin-right:15px;display:flex;align-items:center;@media screen and (max-width:780px){margin-top:15px;}"]);
const MAX_NICKNAME = 10;

/***/ }),

/***/ "./src/containers/mypage/EditMenu.js":
/*!*******************************************!*\
  !*** ./src/containers/mypage/EditMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
/* harmony import */ var _api_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/blog */ "./src/api/blog.js");
/* harmony import */ var _api_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/category */ "./src/api/category.js");
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/ImgBtn */ "./src/components/common/ImgBtn.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/EditMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ChangeMenu(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const category = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.common.category);
  const userColor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.common.userColor);
  const {
    0: edit,
    1: setEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: cateValue,
    1: setCateValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    0: {},
    1: {},
    2: {}
  });
  const {
    0: cateInputCount,
    1: setCateInputCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const countCate = category ? category.length : 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      const config = {
        access_token: getToken
      };
      Object(_api_blog__WEBPACK_IMPORTED_MODULE_4__["getCate"])(config).then(res => {
        if (res.status === 200 && res.data) {
          dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setCategory"])(res.data.data));
          const result = {};
          res.data.data ? res.data.data.forEach((item, idx) => {
            result[idx] = {
              title: item.title,
              id: item.id
            };
          }) : [];
          setCateValue(result);
          setCateInputCount(0);
        }
      });
    }
  }, []);

  const handleEditMenu = () => {
    setEdit(!edit);
  };

  const handleInput = (index, value) => {
    setCateValue(_objectSpread({}, cateValue, {
      [index]: _objectSpread({}, cateValue[index], {
        title: value
      })
    }));
  };

  const increaseCateValue = () => {
    if (countCate + cateInputCount < max_category_count) setCateInputCount(cateInputCount + 1);
  };

  const deleteMenu = () => {
    if (window.confirm('메뉴에 저장된 글도 함께 삭제됩니다. 정말 삭제하시겠습니까?')) {
      return true;
    } else {
      return false;
    }
  };

  const handleDelete = idx => {
    var _tempCateValue$idx;

    const tempCateValue = _objectSpread({}, cateValue);

    if (((_tempCateValue$idx = tempCateValue[idx]) === null || _tempCateValue$idx === void 0 ? void 0 : _tempCateValue$idx.id) !== undefined) {
      const hasIdLength = Object.values(tempCateValue).filter(value => !!(value === null || value === void 0 ? void 0 : value.id)).length;

      if (hasIdLength <= 1) {
        alert('메뉴는 최소 1개 이여야 합니다.');
        return;
      }

      const confirmDelete = deleteMenu();

      if (!confirmDelete) {
        return;
      }

      const getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        const config = {
          access_token: getToken
        };
        const cateId = tempCateValue[idx].id;
        console.log(cateId, 'cateId');
        const data = {
          id: cateId
        };
        Object(_api_category__WEBPACK_IMPORTED_MODULE_5__["deleteCate"])(config, data).then(res => {
          if (res.status === 200 && res.data) {
            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setCategory"])(res.data.data));
            const result = {};
            res.data.data ? res.data.data.forEach((item, idx) => {
              result[idx] = {
                title: item.title,
                id: item.id
              };
            }) : [];
            setCateValue(result);
            setCateInputCount(0);
          }
        });
      }
    } else {
      console.log('??');
    }

    Object.keys(cateValue).forEach(key => {
      if (Number(key) === idx) {
        tempCateValue[key] = undefined; // console.log('in1');
      } else if (Number(key) > idx) {
        tempCateValue[Number(key) - 1] = cateValue[key];
        tempCateValue[key] = undefined; // console.log('in2');
      }

      setCateValue(tempCateValue);
      setCateInputCount(cateInputCount - 1); // console.log('in3');
    });
  };

  const handleMenuUpdate = () => {
    // const hasIdObj = Object.values(cateValue).filter(value => !!value?.id);
    const hasIdArr = Object.values(cateValue).filter(obj => {
      return obj.title === '';
    });

    if (hasIdArr.length > 0) {
      alert('메뉴이름을 입력해주세요.');
    } else {
      // console.log(cateValue, 'arr');
      const data = cateValue; // console.log(data, 'data');

      const getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        const config = {
          access_token: getToken
        };
        Object(_api_category__WEBPACK_IMPORTED_MODULE_5__["updateCate"])(config, data).then(res => {
          if (res.status === 200 && res.data) {
            dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setCategory"])(res.data.data));
            console.log(res.data.data, ' 변경 후');
            const result = {};
            res.data.data ? res.data.data.forEach((item, idx) => {
              result[idx] = {
                title: item.title,
                id: item.id
              };
            }) : [];
            setCateValue(result);
            setEdit(false);
            setCateInputCount(0);
            alert('변경되었습니다.');
            console.log('변경====');
          }
        });
      }
    }
  };

  const showDeleteBtn = Object.values(cateValue).filter(value => !!(value === null || value === void 0 ? void 0 : value.id)).length > 1;
  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, __jsx(CenterRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(StyledColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(TitleRow, {
    edit: edit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "\uBA54\uB274", __jsx(TitleInfo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, "(\uCD5C\uB300 3\uAC1C, 15\uAE00\uC790 \uC774\uD558 \uAD8C\uC7A5) ")), __jsx(EditTitle, {
    onClick: handleEditMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, "\uBA54\uB274\uBCC0\uACBD")), category && category.length > 0 && category.map((item, index) => {
    return edit ? __jsx(MenuRow, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, __jsx(NumberFont, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 19
      }
    }, index + 1, "."), __jsx(Input, {
      defaultValue: item.title,
      name: category.length - 1,
      onChange: e => handleInput(index, e.target.value),
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    })) : __jsx(MenuRow, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx(NumberFont, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    }, index + 1, "."), __jsx(MenuFont, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    }, item.title), showDeleteBtn && __jsx(CloseBtn, {
      key: index + 3,
      src: '/images/close.svg',
      width: 15,
      height: 15,
      bg: "#ddd",
      radius: "50%",
      padding: 2,
      onClick: () => handleDelete(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }));
  }), edit && __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, cateInputCount > 0 && Array(cateInputCount).fill('').map((i, idx) => {
    const index = idx + category.length;
    return __jsx(CenterLeftRow, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 23
      }
    }, __jsx(NumberFont, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, index + 1, "."), __jsx(Input, {
      name: index,
      value: cateValue[index] ? cateValue[index].title : '',
      onChange: e => handleInput(index, e.target.value),
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }), __jsx(CloseBtn, {
      src: '/images/close.svg',
      width: 15,
      height: 15,
      bg: "#ddd",
      radius: "50%",
      padding: 2,
      onClick: () => handleDelete(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 25
      }
    }));
  })), edit && countCate + cateInputCount < max_category_count && __jsx(MenuRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx(AddRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx(AddMenuBtn, {
    onClick: increaseCateValue,
    userColor: userColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, "\uBA54\uB274\uCD94\uAC00"))), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, edit && __jsx(SubmitBtn, {
    onClick: handleMenuUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, "\uBCC0\uACBD")))));
}
const Con = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_common_Container__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "EditMenu__Con",
  componentId: "yedjf2-0"
})(["display:flex;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditMenu__Row",
  componentId: "yedjf2-1"
})(["display:flex;width:100%;"]);
const MenuRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__MenuRow",
  componentId: "yedjf2-2"
})(["width:", ";height:", ";margin-bottom:10px;display:flex;align-items:center;"], props => props.width ? `${props.width}px` : '', props => props.height ? `${props.height}px` : '');
const AddRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditMenu__AddRow",
  componentId: "yedjf2-3"
})(["display:flex;align-items:center;"]);
const CenterRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditMenu__CenterRow",
  componentId: "yedjf2-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;"]);
const CenterLeftRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditMenu__CenterLeftRow",
  componentId: "yedjf2-5"
})(["display:flex;align-items:center;margin-bottom:10px;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EditMenu__Column",
  componentId: "yedjf2-6"
})(["display:flex;flex-direction:column;"]);
const StyledColumn = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Column).withConfig({
  displayName: "EditMenu__StyledColumn",
  componentId: "yedjf2-7"
})(["width:100%;background:#fafafa;box-sizing:border-box;padding:30px;"]);
const TitleRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(MenuRow).withConfig({
  displayName: "EditMenu__TitleRow",
  componentId: "yedjf2-8"
})(["margin-bottom:30px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__Title",
  componentId: "yedjf2-9"
})(["", ";margin-right:20px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_8__["BasicTitle"], props => props.theme.mlFont);
const TitleInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__TitleInfo",
  componentId: "yedjf2-10"
})(["color:#888;"]);
const MenuFont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__MenuFont",
  componentId: "yedjf2-11"
})(["color:", ";"], props => props.userColor);
const NumberFont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__NumberFont",
  componentId: "yedjf2-12"
})(["width:33px;"]);
const EditTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "EditMenu__EditTitle",
  componentId: "yedjf2-13"
})(["", ""], _utils_theme__WEBPACK_IMPORTED_MODULE_8__["BlueEditBtn"]);
const AddMenuBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "EditMenu__AddMenuBtn",
  componentId: "yedjf2-14"
})(["color:", ";border:1px solid ", ";border-radius:5px;width:75px;height:33px;cursor:pointer;font-weight:bold;margin:20px 20px 0 33px;"], props => props.userColor, props => props.userColor);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "EditMenu__Input",
  componentId: "yedjf2-15"
})(["width:210px;height:20px;"]);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_common_ImgBtn__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "EditMenu__CloseBtn",
  componentId: "yedjf2-16"
})(["margin-left:10px;"]);
const max_category_count = 3;
const SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "EditMenu__SubmitBtn",
  componentId: "yedjf2-17"
})(["", ";margin:30px auto 0;padding:5px 10px;font-size:", ";"], _utils_theme__WEBPACK_IMPORTED_MODULE_8__["BasicButton"], props => props.theme.mFont);

/***/ }),

/***/ "./src/containers/mypage/EditPw.js":
/*!*****************************************!*\
  !*** ./src/containers/mypage/EditPw.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangePwd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/Container */ "./src/components/common/Container.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/theme */ "./src/utils/theme.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/EditPw.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ChangePwd(props) {
  const {
    clickEditPw,
    showEditPw
  } = props;
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    prevPwd: '',
    newPwd: '',
    newPwdCheck: ''
  });
  const {
    0: prevPwdTimeout,
    1: setPrevPwdTimeout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: allOk,
    1: setAllOk
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: newPwdState,
    1: setNewPwdState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: prevPwdState,
    1: setPrevPwdState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: newPwdCheckState,
    1: setNewPwdCheckState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: prevPwdTyping,
    1: setPrevPwdTyping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const regex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  const handlePrevPwd = e => {
    const nextValue = {
      [e.target.name]: e.target.value
    };
    setValue(_objectSpread({}, value, {}, nextValue));
    prevPwdTimeout && clearTimeout(prevPwdTimeout);
    const timer = setTimeout(() => {
      const getToken = localStorage.getItem('mydiary_token');

      if (getToken) {
        const config = {
          access_token: getToken
        };
        const data = {
          pwd: nextValue.prevPwd
        };
        Object(_api_user__WEBPACK_IMPORTED_MODULE_3__["checkPwd"])(config, data).then(res => {
          if (res.status === 200) {
            setPrevPwdTyping(true);
            setPrevPwdState(true);
          }
        }).catch(err => {
          if (err.response.status === 401) {
            setPrevPwdTyping(true);
            setPrevPwdState(false);
          }
        });
      }
    }, 1000);
    setPrevPwdTimeout(timer);
  };

  const handleNewPwd = e => {
    setValue(_objectSpread({}, value, {
      newPwd: e.target.value
    }));

    if (!regex.test(e.target.value)) {
      setNewPwdState(false);
    } else {
      setNewPwdState(true);
    }
  };

  const handleNewPwdCheck = e => {
    setValue(_objectSpread({}, value, {
      newPwdCheck: e.target.value
    }));

    if (newPwdState && value.newPwd === e.target.value) {
      setNewPwdCheckState(true);
    } else {
      setNewPwdCheckState(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (prevPwdState && newPwdCheckState) {
      setAllOk(true);
    }
  }, [newPwdCheckState]);

  const handleSubmit = () => {
    //최종 변경
    const getToken = localStorage.getItem('mydiary_token');

    if (getToken) {
      const config = {
        access_token: getToken
      };
      const data = value;
      Object(_api_user__WEBPACK_IMPORTED_MODULE_3__["updatePwd"])(config, data).then(res => {
        if (res.status === 200 && res.data) {
          alert('변경되었습니다.');
          showclickEditPwEditPw(false);
        }
      });
    }
  };

  return __jsx(Con, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(TopCon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(MainTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx(PwEdit, {
    onClick: e => clickEditPw(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD")), showEditPw && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MarginTopRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "\uC774\uC804\uBE44\uBC00\uBC88\uD638"), __jsx(Input, {
    type: "password",
    name: "prevPwd",
    value: value.prevPwd,
    onChange: e => handlePrevPwd(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  })), prevPwdTyping && (prevPwdState ? __jsx(Match, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 51
    }
  }, "\uC77C\uCE58") : __jsx(Mismatch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 71
    }
  }, "\uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, "\uC0C8\uBE44\uBC00\uBC88\uD638"), __jsx(Input, {
    type: "password",
    name: "newPwd",
    value: value.newPwd,
    onChange: e => handleNewPwd(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  })), !newPwdState ? __jsx(Mismatch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "\uC601\uBB38,\uC22B\uC790,\uD2B9\uC218\uBB38\uC790\uD3EC\uD568 6~15\uC790\uB9AC\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.") : '', __jsx(MarginRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, "\uC0C8\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx(Input, {
    type: "password",
    name: "newPwdCheck",
    value: value.newPwdCheck,
    onChange: e => handleNewPwdCheck(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  })), newPwdState && value.newPwdCheck && value.newPwdCheck.length > 0 && (newPwdCheckState ? __jsx(Match, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 39
    }
  }, "\uC77C\uCE58") : __jsx(Mismatch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 59
    }
  }, "\uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(SubmitBtn, {
    disabled: prevPwdState === false || newPwdState === false || newPwdCheckState === false,
    allOk: allOk,
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, "\uBCC0\uACBD")))))));
}
const Con = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "EditPw__Con",
  componentId: "sc-1b9aah4-0"
})(["display:flex;justify-content:center;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__Column",
  componentId: "sc-1b9aah4-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__Row",
  componentId: "sc-1b9aah4-2"
})(["display:flex;width:100%;"]);
const MarginRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Row).withConfig({
  displayName: "EditPw__MarginRow",
  componentId: "sc-1b9aah4-3"
})(["margin-top:20px;"]);
const MarginTopRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Row).withConfig({
  displayName: "EditPw__MarginTopRow",
  componentId: "sc-1b9aah4-4"
})(["margin-top:40px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__Title",
  componentId: "sc-1b9aah4-5"
})(["", ";width:120px;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["BasicTitle"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Title).withConfig({
  displayName: "EditPw__MainTitle",
  componentId: "sc-1b9aah4-6"
})(["font-size:", ";"], props => props.theme.mlFont);
const TopCon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__TopCon",
  componentId: "sc-1b9aah4-7"
})(["width:100%;background:#fafafa;padding:30px;"]);
const SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "EditPw__SubmitBtn",
  componentId: "sc-1b9aah4-8"
})(["margin:30px auto 0;padding:5px 10px;font-size:", ";", ""], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].mFont, props => props.allOk && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:#111;cursor:pointer;"]));
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "EditPw__Input",
  componentId: "sc-1b9aah4-9"
})(["width:150px;height:20px;"]);
const PwEdit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__PwEdit",
  componentId: "sc-1b9aah4-10"
})(["", ""], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["BlueEditBtn"]);
const Match = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__Match",
  componentId: "sc-1b9aah4-11"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].greenFont, _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].sFont);
const Mismatch = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditPw__Mismatch",
  componentId: "sc-1b9aah4-12"
})(["color:", ";margin:10px 0 0 0;font-size:", ";display:flex;align-items:center;"], _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].redFont, _utils_theme__WEBPACK_IMPORTED_MODULE_4__["theme"].sFont);

/***/ }),

/***/ "./src/containers/mypage/TopInfo.js":
/*!******************************************!*\
  !*** ./src/containers/mypage/TopInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/base */ "./src/actions/base/index.js");
var _jsxFileName = "/Users/hj/develop/myproject/myDiary/client/src/containers/mypage/TopInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TopInfo(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const userInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.common.userInfo);

  const logout = () => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setLogin"])(false));
    localStorage.removeItem('mydiary_token');
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setUserInfo"])(null));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setThemeColor"])('#7c7cec'));
    dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_4__["setFont"])("'Noto Sans KR', sans-serifo"));
  };

  return __jsx(MyInfoWrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(Profile, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Img, {
    src: userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png',
    width: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(NickName, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, userInfo && userInfo.nickname))), __jsx(LogoutContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(Logout, {
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))));
}
const MyInfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "TopInfo__MyInfoWrap",
  componentId: "sc-13rvb4i-0"
})(["width:100%;padding:45px 40px 45px;box-sizing:border-box;background-color:#fafafa;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:space-between;border-bottom:1px solid #dedede;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopInfo__Column",
  componentId: "sc-13rvb4i-1"
})(["display:flex;flex-direction:column;"]);
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopInfo__Profile",
  componentId: "sc-13rvb4i-2"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "TopInfo__Img",
  componentId: "sc-13rvb4i-3"
})(["width:", ";height:", ";border-radius:", "px;margin-right:15px;border:1px solid #ddd;"], props => props.width || '30px', props => props.width || '30px', props => props.width / 2 || 15);
const NickName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopInfo__NickName",
  componentId: "sc-13rvb4i-4"
})(["font-size:18px;font-weight:bold;margin-top:20px;"]);
const LogoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopInfo__LogoutContainer",
  componentId: "sc-13rvb4i-5"
})(["display:flex;align-items:center;"]);
const Logout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopInfo__Logout",
  componentId: "sc-13rvb4i-6"
})(["color:#aaa;cursor:pointer;"]);

/***/ }),

/***/ "./src/reducers/base/index.js":
/*!************************************!*\
  !*** ./src/reducers/base/index.js ***!
  \************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/base/actionTypes */ "./src/actions/base/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  number: 0,
  userColor: '#7c7cec',
  isLoggedIn: undefined,
  userInfo: undefined,
  category: undefined,
  loading: false,
  showToolTip: true,
  clickMenu: {
    cateId: undefined
  },
  selectFont: "'Noto Sans KR', sans-serifo"
};

const commonReducer = (state = initialState, action) => {
  if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]) {
    return _objectSpread({}, state, {
      number: state.number + 1
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_THEME_COLOR"]) {
    return _objectSpread({}, state, {
      userColor: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOGIN"]) {
    return _objectSpread({}, state, {
      isLoggedIn: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_USER_INFO"]) {
    return _objectSpread({}, state, {
      userInfo: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CATE"]) {
    return _objectSpread({}, state, {
      category: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]) {
    return _objectSpread({}, state, {
      loading: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_TOOLTIP"]) {
    return _objectSpread({}, state, {
      showToolTip: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CLICKMENU"]) {
    return _objectSpread({}, state, {
      clickMenu: action.payload
    });
  } else if (action.type === _actions_base_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_FONT"]) {
    return _objectSpread({}, state, {
      selectFont: action.payload
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (commonReducer);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/base */ "./src/reducers/base/index.js");



const composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])({
  realtime: true,
  port: 3003
});
const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  common: _reducers_base__WEBPACK_IMPORTED_MODULE_2__["default"]
});
const initialState = {
  common: _reducers_base__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, composeEnhancers());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/utils/apiSend.js":
/*!******************************!*\
  !*** ./src/utils/apiSend.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _actions_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/base */ "./src/actions/base/index.js");




const localURL = 'http://127.0.0.1:3000';
const proURL = '';
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${localURL}/api`,
  timeout: 5000
});
instance.interceptors.request.use(function (config) {
  // store.dispatch(setLoading(true));
  return config;
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // http status가 200인 경우
  // 응답 바로 직전에 대해 작성
  // .then()
  return response;
}, function (error) {
  /*
      http status가 200이 아닌 경우
      응답 에러 처리
      .catch()
  */
  if (error.response) {
    if (error.response.status === 401) {
      if (!(error.response.data.message === 'Mismatched pwd')) {
        alert('아이디나 비밀번호를 확인해주세요.');
      }
    } else if (error.response.status === 400) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setLogin"])(false));
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setUserInfo"])(undefined));
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions_base__WEBPACK_IMPORTED_MODULE_3__["setThemeColor"])('#7c7cec'));
    } else if (error.response.status === 404) {
      alert('누락된 요청');
    } else if (error.response.status >= 500) {
      alert('서버 에러가 발생했습니다.관리자에게 문의해주세요.');
    }
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: colorLuminance, useInnerWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLuminance", function() { return colorLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInnerWidth", function() { return useInnerWidth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInnerWidth() {
  //카드 이미지 반응형 변환
  const {
    0: innerWidth,
    1: setInnerWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function resizeHandler() {
      setInnerWidth(window.innerWidth);
    }

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  return innerWidth;
}

function colorLuminance(hex, lum) {
  //사용자 테마설정시 그라데이션
  hex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;
  let rgb = '#';
  let c;
  let i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
}



/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/*! exports provided: theme, BasicButton, BlueEditBtn, BasicTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicButton", function() { return BasicButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueEditBtn", function() { return BlueEditBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTitle", function() { return BasicTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  white: '#ffffff',
  black: '#000000',
  ssFont: '13px',
  sFont: '15px',
  mFont: '17px',
  mlFont: '19px',
  lFont: '20px',
  xlFont: '23px',
  greenFont: '#2fae00',
  redFont: '#b30000'
};
const BasicButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;"]);
const BlueEditBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:", ";font-weight:bold;cursor:pointer;color:#69b7ff;"], theme.mlFont);
const BasicTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;font-size:", ";color:#111;"], theme.mlFont);


/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/mypage/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hj/develop/myproject/myDiary/client/pages/mypage/index.js */"./pages/mypage/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-image-crop":
/*!***********************************!*\
  !*** external "react-image-crop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=mypage.js.map