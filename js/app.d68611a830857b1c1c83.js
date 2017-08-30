webpackJsonp([18],Array(18).concat([
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__themeArray__ = __webpack_require__(137);


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);










var global = {
    baseUrl: "http://27.61.80.50:8080/jojosns/",
    baseImgUrl: "http://27.61.80.50:8080/jojosns/",

    staticPath:  true ? __WEBPACK_IMPORTED_MODULE_4__config___default.a.build.staticPath : config.dev.staticPath,
    changeTheme: function changeTheme(themeValue) {
        var that = this;

        var cssArray = __WEBPACK_IMPORTED_MODULE_5__themeArray__["a" /* default */];

        for (var _i = 0, len = cssArray.length; _i < len; _i++) {
            var itemPath = that.staticPath + '/theme/' + themeValue + '/' + cssArray[_i].toLowerCase() + '.css';

            loadCss(itemPath);
        };

        localStorage.setItem("themeValue", themeValue);

        function loadCss(path) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        }
    },

    globalId: function globalId() {
        return window._idCounter_ ? window._idCounter_ += 1 : window._idCounter_ = 1;
    },

    get: function get(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var sucCb = arguments[2];
        var errorCb = arguments[3];
        var isLoading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var isLogin = arguments[5];


        if (!url) {
            console.log('接口url不能为空！');
            return false;
        }

        if (isLoading) {
            var loadingInstance = __WEBPACK_IMPORTED_MODULE_2_element_ui__["Loading"].service({ text: "拼命加载中" });
        }
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.get(url, options).then(function (response) {

            setTimeout(function () {
                sucCb(response);
                if (isLoading) {
                    loadingInstance.close();
                }
            }, 1000);
        }, function (response) {
            errorCb(response);
            if (isLoading) {
                loadingInstance.close();
            }
        });
    },

    post: function post(url, body, options, sucCb, errorCb) {
        var isLoading = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
        var isLogin = arguments[6];

        if (!url) {
            console.log('接口url不能为空！');
            return false;
        }

        if (isLoading) {
            var loadingInstance = __WEBPACK_IMPORTED_MODULE_2_element_ui__["Loading"].service();
        }
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.post(url, body, options).then(function (response) {
            sucCb(response);
            if (isLoading) {
                loadingInstance.close();
            }
        }, function (response) {
            errorCb(response);
            if (isLoading) {
                loadingInstance.close();
            }
        });
    },

    formatDate: function formatDate(objD) {
        if (!objD) {
            return '';
        }

        objD = new Date(objD);
        var str;
        var yy = objD.getYear();
        if (yy < 1900) yy = yy + 1900;
        var MM = objD.getMonth() + 1;
        if (MM < 10) MM = '0' + MM;
        var dd = objD.getDate();
        if (dd < 10) dd = '0' + dd;
        var hh = objD.getHours();
        if (hh < 10) hh = '0' + hh;
        var mm = objD.getMinutes();
        if (mm < 10) mm = '0' + mm;
        var ss = objD.getSeconds();
        if (ss < 10) ss = '0' + ss;
        str = yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
        return str;
    },

    formatDate2: function formatDate2(objD) {
        if (!objD) {
            return '';
        }
        objD = new Date(objD);
        var str;
        var yy = objD.getYear();
        if (yy < 1900) yy = yy + 1900;
        var MM = objD.getMonth() + 1;

        var dd = objD.getDate();

        str = yy + "-" + MM + "-" + dd;
        return str;
    },

    getUrlFn: function getUrlFn() {
        var querystr = window.location.href.split("?"),
            GETs = "",
            GET = "";
        if (querystr[1]) {
            GETs = querystr[1].split("&");
            GET = [];
            for (i = 0; i < GETs.length; i++) {
                tmp_arr = GETs[i].split("=");
                var key = tmp_arr[0];
                GET[key] = tmp_arr[1];
            }
        }
        return GET;
    },

    getUrlData: function getUrlData() {
        var purl = window.location.href;
        purl = purl.substr(purl.indexOf("?") + 1);
        var urlData = JSON.parse(decodeURI(purl.substr(purl.indexOf("=") + 1)));

        return urlData;
    }

};

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(214)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(229),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-662b5d5a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var errLog = {
  state: {
    errLog: []
  },
  pushLog: function pushLog(log) {
    this.state.errLog.unshift(log);
  },
  clearLog: function clearLog() {
    this.state.errLog = [];
  }
};

/* harmony default export */ __webpack_exports__["a"] = (errLog);

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// see http://vuejs-templates.github.io/webpack for documentation.
let path = __webpack_require__(217)

module.exports = {
    build: {
        sitEnv: __webpack_require__(104),
        prodEnv: __webpack_require__(103),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: './', //生产环境assetsPublicPath: '/'
        staticPath:'./',        //生产环境 staticPath:''
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: __webpack_require__.i({"NODE_ENV":"production","BASE_API":"https://api-prod","APP_ORIGIN":"https://www.bb.com"}).npm_config_report
    },
    dev: {
        env: __webpack_require__(102),
        port: new Date().getFullYear(),
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        staticPath:'/static/',
        proxyTable: {
            '/v2': {
                target: 'http://api.douban.com',
                changeOrigin : true,
                pathRewrite: {
                  '^/v2': '/v2'
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_user__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_permission__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(140);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    app: __WEBPACK_IMPORTED_MODULE_2__modules_app__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_3__modules_user__["a" /* default */],
    permission: __WEBPACK_IMPORTED_MODULE_4__modules_permission__["a" /* default */]
  },
  getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */] });

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(222),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(208)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(223),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3536c1b5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(207)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(221),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(209)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(224),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-383fd53e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(215)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(135),
  /* template */
  __webpack_require__(230),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-dd5cb2d8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(210)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(225),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3b9ad6e4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_css__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__waves_css__);



var vueWaves = {};
vueWaves.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.directive('waves', {
    bind: function bind(el, binding) {
      el.addEventListener('click', function (e) {
        var customOpts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, binding.value);
        var opts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
          ele: el,
          type: 'hit',
          color: 'rgba(0, 0, 0, 0.15)' }, customOpts),
            target = opts.ele;
        if (target) {
          target.style.position = 'relative';
          target.style.overflow = 'hidden';
          var rect = target.getBoundingClientRect();
          var ripple = target.querySelector('.waves-ripple');
          if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'waves-ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple);
          } else {
            ripple.className = 'waves-ripple';
          }
          switch (opts.type) {
            case 'center':
              ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
              ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
              break;
            default:
              ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
              ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
          }
          ripple.style.backgroundColor = opts.color;
          ripple.className = 'waves-ripple z-active';
          return false;
        }
      }, false);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (vueWaves);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["timeAgo"] = timeAgo;
/* harmony export (immutable) */ __webpack_exports__["parseTime"] = parseTime;
/* harmony export (immutable) */ __webpack_exports__["formatTime"] = formatTime;
/* harmony export (immutable) */ __webpack_exports__["nFormatter"] = nFormatter;
/* harmony export (immutable) */ __webpack_exports__["html2Text"] = html2Text;
/* harmony export (immutable) */ __webpack_exports__["toThousandslsFilter"] = toThousandslsFilter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}
function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  if ((time + '').length === 10) {
    time = +time * 1000;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date = void 0;
  if ((typeof time === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(time)) == 'object') {
    date = time;
  } else {
    date = new Date(parseInt(time));
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

function formatTime(time, option) {
  time = +time * 1000;
  var d = new Date(time);
  var now = Date.now();

  var diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

function nFormatter(num, digits) {
  var si = [{ value: 1E18, symbol: 'E' }, { value: 1E15, symbol: 'P' }, { value: 1E12, symbol: 'T' }, { value: 1E9, symbol: 'G' }, { value: 1E6, symbol: 'M' }, { value: 1E3, symbol: 'k' }];
  for (var i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

function html2Text(val) {
  var div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, function (m) {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
  });
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__);



var _import = __webpack_require__(139);



var Login = _import('login/index');
var authRedirect = _import('login/authredirect');
var sendPWD = _import('login/sendpwd');
var reset = _import('login/reset');

var Err404 = _import('error/404');
var Err401 = _import('error/401');

var PersonalInfo = _import('index/personalInfo');
var Readme = _import('index/readme');

var TableList = _import('example/tableList');

var NewMovie = _import('movie/newMovie');
var MovieSearch = _import('movie/movieSearch');

var Form = _import('example/form');
var Tinymce = _import('example/tinymce');
var Mixin = _import('example/mixin');

var PermissionsManage = _import('systemSet/permissionsManage');

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var constantRouterMap = [{ path: '/login', component: Login, hidden: true }, { path: '/authredirect', component: authRedirect, hidden: true }, { path: '/sendpwd', component: sendPWD, hidden: true }, { path: '/reset', component: reset, hidden: true }, { path: '/404', component: Err404, hidden: true }, { path: '/401', component: Err401, hidden: true }, {
  path: '/',

  redirect: '/index/readme',

  hidden: true

}, {
  path: '/index',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '',

  noDropdown: true,
  children: [{ path: 'readme', component: Readme, name: '系统说明' }]
}, {
  path: '/index',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '',

  noDropdown: true,
  children: [{ path: 'personalInfo', component: PersonalInfo, name: '个人信息', children: [{ path: "/bb" }] }]
}, {
  path: '/example',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '',

  noDropdown: true,
  children: [{ path: 'tableList', component: TableList, name: '示例表格' }]
}, {
  path: '/movie',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '',

  noDropdown: true,
  children: [{ path: 'newMovie', component: NewMovie, name: '热映电影列表' }]
}, {
  path: '/movie',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '',

  noDropdown: true,
  children: [{ path: 'movieSearch', component: MovieSearch, name: '电影搜索' }]
}, {
  path: '/errorpage',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '错误页面',

  children: [{ path: '401', component: Err401, name: '401' }, { path: '404', component: Err404, name: '404' }]
}, {
  path: '/systemSet',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '系统设置',

  children: [{ path: 'permissionsManage', component: PermissionsManage, name: '权限管理' }]
}, {
  path: '/example',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout___default.a,
  redirect: 'noredirect',
  name: '综合实例',

  children: [{ path: 'form', component: Form, name: 'form表单编辑' }, { path: 'tinymce', component: Tinymce, name: '富文本编辑器' }, { path: 'mixin', component: Mixin, name: '小组件' }, { path: '31', component: Form, name: '三级菜单1' }]
}, { path: '*', redirect: '/404', hidden: true }];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: constantRouterMap
}));

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(211)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(226),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });

var config = __webpack_require__(55);

var url = {
    apiUrl: "/ccp-web/api",
    ctxPath: "/dist",
    staticPath:  true ? config.build.staticPath : config.dev.staticPath
};

var api = {
    'login': url.staticPath + '/dataJson/login.json',
    'getUserInfo': url.staticPath + '/dataJson/userInfo.json',
    'tableList': url.staticPath + '/dataJson/tableList.json',
    'getForm': url.staticPath + '/dataJson/form.json',
    "roleAndUser": url.staticPath + "/dataJson/roleAndUser.json",
    "getMenuAndElement": url.staticPath + "/dataJson/getMenuAndElement.json",
    "in_theaters": "/v2/movie/in_theaters",
    "movieSearch": "/v2/movie/search",

    '0': url.apiUrl + '',
    '1': url.apiUrl + '',
    '2': {
        '1': null,
        '2': null
    }
};

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports) {

module.exports = {
    NODE_ENV: '"development"',
    BASE_API: '"https://api-dev"',
    APP_ORIGIN: '"https://www.aa.com"'
}


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
    NODE_ENV: '"production"',
    BASE_API: '"https://api-prod"',
    APP_ORIGIN: '"https://www.bb.com"'
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = {
    NODE_ENV: '"production"',
    BASE_API: '"https://api-sit"',
    APP_ORIGIN: '"https://wallstreetcn.com"'
};


/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'APP'
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'errLog',
  props: {
    logsList: {
      type: Array
    }
  },
  data: function data() {
    return {
      dialogTableVisible: false
    };
  }
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hamburger',
  props: {
    width: {
      type: Number,
      default: 22
    },
    height: {
      type: Number,
      default: 22
    },
    fill: {
      type: String,
      default: '#48576a'
    }
  },
  data: function data() {
    return {
      isFullscreen: false
    };
  },

  methods: {
    click: function click() {
      if (!__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        });
        return false;
      }

      if (this.isFullscreen) {
        __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.exit();
        this.isFullscreen = false;
      } else {
        __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.request();
        this.isFullscreen = true;
      }
    }
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Levelbar__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Levelbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Levelbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_global_global__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppMain',
  components: {
    Levelbar: __WEBPACK_IMPORTED_MODULE_0__Levelbar___default.a
  },
  mounted: function mounted() {},

  computed: {
    key: function key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
    }
  }
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_views_layout__ = __webpack_require__(144);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0_views_layout__["a" /* Navbar */],
    Sidebar: __WEBPACK_IMPORTED_MODULE_0_views_layout__["b" /* Sidebar */],
    AppMain: __WEBPACK_IMPORTED_MODULE_0_views_layout__["c" /* AppMain */]
  },
  computed: {
    sidebar: function sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getBreadcrumb();
  },
  data: function data() {
    return {
      levelList: null
    };
  },

  methods: {
    getBreadcrumb: function getBreadcrumb() {
      console.log('----', this.$route.matched);
      var matched = this.$route.matched.filter(function (item) {
        return item.name;
      });
      var first = matched[0];
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [{ name: '首页', path: '/' }].concat(matched);
      }
      console.log('面包屑:', matched);
      this.levelList = matched;
    }
  },
  watch: {
    $route: function $route() {
      this.getBreadcrumb();
    }
  }
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabsView__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabsView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TabsView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Screenfull__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Screenfull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ErrLog__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ErrLog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_ErrLog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_errLog__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_global_global__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_blueimp_md5__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_blueimp_md5__);















/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        TabsView: __WEBPACK_IMPORTED_MODULE_2__TabsView___default.a,

        ErrorLog: __WEBPACK_IMPORTED_MODULE_4_components_ErrLog___default.a,
        Screenfull: __WEBPACK_IMPORTED_MODULE_3_components_Screenfull___default.a
    },
    data: function data() {
        var _this = this;

        var validateOldPassword = function validateOldPassword(rule, value, callback) {
            if (__WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default()('@lss' + value) !== __WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default()('@lss123456')) {
                callback(new Error('旧密码不正确！'));
            } else {

                callback();
            }
        };
        var validateNewPassword2 = function validateNewPassword2(rule, value, callback) {
            if (value !== _this.passwordForm.newPassword) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            log: __WEBPACK_IMPORTED_MODULE_5_store_errLog__["a" /* default */].state.errLog,
            dialogVisible: false,
            dialogFormVisible: false,
            themeValue: localStorage.getItem("themeValue") ? localStorage.getItem("themeValue") : 'blue',
            passwordForm: {
                "oldPassword": '',
                "newPassword": '',
                "newPassword2": ''
            },
            passwordFormRules: {
                oldPassword: [{ required: true, trigger: 'blur', message: '旧密码不能为空！' }, { required: true, trigger: 'blur', validator: validateOldPassword }],
                newPassword: [{ required: true, trigger: 'blur', message: '新密码不能为空！' }],
                newPassword2: [{ required: true, trigger: 'blur', message: '重复密码不能为空！' }, { required: true, trigger: 'blur', validator: validateNewPassword2 }]
            }
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['sidebar', 'userInfo'])),
    mounted: function mounted() {
        var vm = this;
    },

    methods: {
        handleChangeTheme: function handleChangeTheme() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_6_src_global_global__["a" /* global */].changeTheme(vm.themeValue);

            this.dialogVisible = false;
        },
        handlePwdModifySubmit: function handlePwdModifySubmit(formName) {
            var vm = this;
            console.log('---', this.passwordForm);
            vm.$refs.passwordForm.validate(function (valid) {
                if (valid) {
                    alert('恭喜:旧密码验证成功!');
                    var par = {
                        "oldPassword": __WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default()('@lss123456'),
                        "newPassword": __WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default()('@lss' + vm.passwordForm.newPassword),
                        "newPassword2": __WEBPACK_IMPORTED_MODULE_8_blueimp_md5___default()('@lss' + vm.passwordForm.newPassword2)
                    };
                    console.log('密码修改入参为：', par);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        toggleSideBar: function toggleSideBar() {
            $(this).toggleClass('is-active');

            this.$store.dispatch('ToggleSideBar');
        },
        logout: function logout() {
            this.$store.dispatch('LogOut').then(function () {
                location.reload();
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(216)))

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SidebarItem__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SidebarItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SidebarItem__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { SidebarItem: __WEBPACK_IMPORTED_MODULE_2__SidebarItem___default.a },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['permission_routers']))
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SidebarItem',
  props: {
    routes: {}
  }

});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    visitedViews: function visitedViews() {
      return this.$store.state.app.visitedViews.slice(-6);
    }
  },
  methods: {
    closeViewTabs: function closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view);
      $event.preventDefault();
    },
    addViewTabs: function addViewTabs() {
      this.$store.dispatch('addVisitedViews', this.$route.matched[this.$route.matched.length - 1]);
    }
  },
  watch: {
    $route: function $route() {
      this.addViewTabs();
    }
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var themeArray = ["Pagination", "Dialog", "Autocomplete", "Dropdown", "dropdown-menu", "dropdown-item", "Menu", "Submenu", "menu-item", "menu-item-group", "Input", "input-number", "Radio", "radio-group", "radio-button", "Checkbox", "checkbox-group", "Switch", "Select", "Option", "option-group", "Button", "button-group", "Table", "table-column", "date-picker", "time-select", "time-picker", "Popover", "Tooltip", "Breadcrumb", "breadcrumb-item", "Form", "form-item", "Tabs", "tab-pane", "Tag", "Tree", "Alert", "Slider", "Icon", "Row", "Col", "Upload", "Progress", "Spinner", "Badge", "Card", "Rate", "Steps", "Step", "Carousel", "Scrollbar", "carousel-item", "Collapse", "collapse-item", "Cascader", "color-picker", "Loading", "message-box", "Message"];

/* harmony default export */ __webpack_exports__["a"] = (themeArray);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_default_index_css__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_nprogress_nprogress_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_nprogress_nprogress_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_nprogress_nprogress_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_normalize_css_normalize_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_normalize_css_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_normalize_css_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_assets_css_index_scss__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_assets_css_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_assets_css_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filters__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directive_waves__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_store_errLog__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_src_global_global__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_js_cookie__);





















__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_12__directive_waves__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_11__filters__).forEach(function (key) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].filter(key, __WEBPACK_IMPORTED_MODULE_11__filters__[key]);
});

if (localStorage.getItem('themeValue')) {
    __WEBPACK_IMPORTED_MODULE_14_src_global_global__["a" /* global */].changeTheme(localStorage.getItem("themeValue"));
}

var whiteList = ['/login', '/authredirect', '/reset', '/sendpwd', '/401', '404'];
__WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].beforeEach(function (to, from, next) {
    __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.start();

    if (__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.token) {
        if (to.path === '/login') {
            next({ path: '/' });
        } else if (to.path == '/401') {
            next();
        } else if (to.path == '/404') {
            next();
        } else {
            if (!__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.userInfo) {
                console.log('未获取到用户信息', __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.userInfo);

                __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].dispatch('GetInfo').then(function (res) {
                    next();
                }).catch(function (err) {
                    console.log(err);
                });
            } else {
                if (__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.permission_routers[to.path] == undefined) {

                    next({ path: '/404' });
                    __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
                } else if (__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].getters.permission_routers[to.path] == false) {

                    next({ path: '/401' });
                    __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
                } else {
                    next();
                }
            }
        }
    } else {

        if (whiteList.indexOf(to.path) !== -1) {

            next();
        } else {
            next('/login');
            __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
        }
    }
    __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
});

__WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].afterEach(function () {
    __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
});

if (__webpack_require__.i({"NODE_ENV":"production","BASE_API":"https://api-prod","APP_ORIGIN":"https://www.bb.com"}) === 'production') {
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].config.errorHandler = function (err, vm) {
        console.log(err, window.location.href);
        __WEBPACK_IMPORTED_MODULE_13_store_errLog__["a" /* default */].pushLog({
            err: err,
            url: window.location.href,
            vm: vm
        });
    };
}

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (file) {
  return function () {
    return __webpack_require__(234)("./" + file + '.vue');
  };
};

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var getters = {
  uid: function uid(state) {
    return state.user.uid;
  },
  token: function token(state) {
    return state.user.token;
  },
  userInfo: function userInfo(state) {
    return state.user.userInfo;
  },

  sidebar: function sidebar(state) {
    return state.app.sidebar;
  },
  visitedViews: function visitedViews(state) {
    return state.app.visitedViews;
  },

  permission_routers: function permission_routers(state) {

    return state.permission.routers;
  },
  addRouters: function addRouters(state) {
    return state.permission.addRouters;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);



var app = {
  state: {
    sidebar: {
      opened: !+__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('sidebarStatus')
    },
    theme: 'default',
    livenewsChannels: __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('livenewsChannels') || '[]',
    visitedViews: []
  },
  mutations: {
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state) {
      if (state.sidebar.opened) {
        __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('sidebarStatus', 1);
      } else {
        __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    ADD_VISITED_VIEWS: function ADD_VISITED_VIEWS(state, view) {
      if (state.visitedViews.includes(view)) return;
      state.visitedViews.push(view);
    },
    DEL_VISITED_VIEWS: function DEL_VISITED_VIEWS(state, view) {
      var index = state.visitedViews.indexOf(view);
      state.visitedViews.splice(index, 1);
    }
  },
  actions: {
    ToggleSideBar: function ToggleSideBar(_ref) {
      var commit = _ref.commit;

      commit('TOGGLE_SIDEBAR');
    },
    addVisitedViews: function addVisitedViews(_ref2, view) {
      var commit = _ref2.commit;

      commit('ADD_VISITED_VIEWS', view);
    },
    delVisitedViews: function delVisitedViews(_ref3, view) {
      var commit = _ref3.commit;

      commit('DEL_VISITED_VIEWS', view);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);


var permission = {
  state: {

    routers: null

  },
  mutations: {
    SET_ROUTERS: function SET_ROUTERS(state, routers) {
      state.routers = routers;
    }
  },
  actions: {
    GenerateRoutes: function GenerateRoutes(_ref, data) {
      var commit = _ref.commit;

      console.log('路由入参：', data);
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {

        commit('SET_ROUTERS', data);

        resolve();
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (permission);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_global_global__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_global_api__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui__);










var user = {
  state: {
    uid: __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.get('userId'),
    token: __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.get('userToken'),
    userInfo: null

  },

  mutations: {
    SET_UID: function SET_UID(state, uid) {
      state.uid = uid;
    },
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USERINFO: function SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },

    LOGIN_SUCCESS: function LOGIN_SUCCESS() {
      console.log('login success');
    }
  },

  actions: {
    LoginByEmail: function LoginByEmail(_ref, userInfo) {
      var commit = _ref.commit;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        console.log('登录入参：', userInfo);
        __WEBPACK_IMPORTED_MODULE_3_src_global_global__["a" /* global */].get(__WEBPACK_IMPORTED_MODULE_4_src_global_api__["a" /* api */].login, { params: userInfo }, function (res) {
          console.log('-------获取到登录返回信息：', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
          if (res.body.resultCode == 0) {
            var res = res.body.data;

            __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.set('userToken', res.token, { expires: 1 / 3 });
            __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.set('userId', res.uid, { expires: 1 / 3 });

            commit('SET_TOKEN', res.token);


            resolve();
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_element_ui__["Message"])({
              showClose: true,
              message: res.body.resultMsg,
              type: 'error'
            });
          }
        }, function (res) {
          reject(res);
        });

        return false;
      });
    },
    GetInfo: function GetInfo(_ref2) {
      var dispatch = _ref2.dispatch,
          commit = _ref2.commit,
          state = _ref2.state;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_src_global_global__["a" /* global */].get(__WEBPACK_IMPORTED_MODULE_4_src_global_api__["a" /* api */].getUserInfo, { params: { 'userId': state.uid } }, function (res) {
          console.log('-------根据id获取用户信息：', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
          if (res.body.resultCode == 0) {
            var res = res.body.data;

            commit('SET_TOKEN', res.token);

            commit('SET_USERINFO', res);

            dispatch('GenerateRoutes', res.permissions);

            resolve();
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_element_ui__["Message"])({
              showClose: true,
              message: res.body.resultMsg,
              type: 'error'
            });
          }
        }, function (res) {
          reject(res);
        });
      });
    },
    LoginByThirdparty: function LoginByThirdparty(_ref3, code) {
      var commit = _ref3.commit,
          state = _ref3.state;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        commit('SET_CODE', code);
        loginByThirdparty(state.status, state.email, state.code, state.auth_type).then(function (response) {
          commit('SET_TOKEN', response.data.token);
          __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.set('userToken', response.data.token);
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    LogOut: function LogOut(_ref4) {
      var commit = _ref4.commit,
          state = _ref4.state;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        commit('SET_TOKEN', '');

        __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.remove('userToken');
        __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.remove('userId');
        resolve();
      });
    },
    ChangeRole: function ChangeRole(_ref5, role) {
      var commit = _ref5.commit;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
        dispatch('GenerateRoutes', res.permissions);
        resolve();
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Navbar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Sidebar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Sidebar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Levelbar__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Levelbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Levelbar__);
/* unused harmony reexport Levelbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppMain__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppMain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__AppMain__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__AppMain___default.a; });








/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(212)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(227),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-607b3ebc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(213)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(228),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6188aa04",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('el-menu', {
    staticClass: "navbar",
    attrs: {
      "mode": "horizontal"
    }
  }, [_c('i', {
    staticClass: "fa fa-bars",
    attrs: {
      "isActive": _vm.sidebar.opened
    },
    on: {
      "click": _vm.toggleSideBar
    }
  }), _vm._v(" "), _c('tabs-view'), _vm._v(" "), (_vm.log.length > 0) ? _c('error-log', {
    staticClass: "errLog-container",
    attrs: {
      "logsList": _vm.log
    }
  }) : _vm._e(), _vm._v(" "), _c('screenfull', {
    staticClass: "screenfull"
  }), _vm._v(" "), _c('el-dropdown', {
    staticClass: "avatar-container",
    attrs: {
      "trigger": "click"
    }
  }, [_c('div', {
    staticClass: "avatar-wrapper"
  }, [_c('span', {
    staticClass: "user-name"
  }, [_vm._v(_vm._s(_vm.userInfo.nickname))]), _vm._v(" "), _c('img', {
    staticClass: "user-avatar",
    attrs: {
      "src": _vm.userInfo.avatar + '?imageView2/1/w/80/h/80'
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "el-icon-caret-bottom"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    staticClass: "user-dropdown",
    slot: "dropdown"
  }, [_c('router-link', {
    staticClass: "inlineBlock",
    attrs: {
      "to": "/index/personalInfo"
    }
  }, [_c('el-dropdown-item', [_vm._v("\n                        首页\n                    ")])], 1), _vm._v(" "), _c('el-dropdown-item', [_c('span', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = true
      }
    }
  }, [_vm._v("修改密码")])]), _vm._v(" "), _c('el-dropdown-item', [_c('span', {
    on: {
      "click": function($event) {
        _vm.dialogVisible = true
      }
    }
  }, [_vm._v("切换主题")])]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "divided": ""
    }
  }, [_c('span', {
    staticStyle: {
      "display": "block"
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出登录")])])], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "密码修改",
      "visible": _vm.dialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "passwordForm",
    staticClass: "small-space",
    staticStyle: {
      "width": "400px",
      "margin-left": "50px"
    },
    attrs: {
      "model": _vm.passwordForm,
      "rules": _vm.passwordFormRules,
      "label-position": "right",
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "原密码",
      "prop": "oldPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.passwordForm.oldPassword),
      callback: function($$v) {
        _vm.passwordForm.oldPassword = $$v
      },
      expression: "passwordForm.oldPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新密码",
      "prop": "newPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.passwordForm.newPassword),
      callback: function($$v) {
        _vm.passwordForm.newPassword = $$v
      },
      expression: "passwordForm.newPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "重复新密码",
      "prop": "newPassword2"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.passwordForm.newPassword2),
      callback: function($$v) {
        _vm.passwordForm.newPassword2 = $$v
      },
      expression: "passwordForm.newPassword2"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handlePwdModifySubmit(_vm.passwordForm)
      }
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "更改主题颜色",
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('el-form', {
    staticClass: "small-space",
    staticStyle: {
      "width": "400px",
      "margin-left": "50px"
    },
    attrs: {
      "label-position": "left",
      "label-width": "130px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "请选择主题颜色：",
      "prop": "resource"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.themeValue),
      callback: function($$v) {
        _vm.themeValue = $$v
      },
      expression: "themeValue"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "blue"
    }
  }, [_vm._v("蓝色")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "green"
    }
  }, [_vm._v("绿色")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "red"
    }
  }, [_vm._v("红色")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleChangeTheme
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "app-main",
    staticStyle: {
      "min-height": "100%"
    }
  }, [_c('Levelbar'), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    key: _vm.key
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-wrapper",
    class: {
      hideSidebar: !_vm.sidebar.opened
    }
  }, [_c('div', {
    staticClass: "sidebar-wrapper"
  }, [_c('Sidebar', {
    staticClass: "sidebar-container"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "main-container"
  }, [_c('Navbar'), _vm._v(" "), _c('App-main')], 1)])
},staticRenderFns: []}

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    attrs: {
      "mode": "vertical",
      "theme": "dark",
      "default-active": _vm.$route.path
    }
  }, [_c('sidebar-item', {
    attrs: {
      "routes": _vm.permission_routers
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs-view-container"
  }, _vm._l((Array.from(_vm.visitedViews)), function(tag) {
    return _c('router-link', {
      key: tag.path,
      staticClass: "tabs-view",
      attrs: {
        "to": tag.path
      }
    }, [_c('el-tag', {
      attrs: {
        "closable": true
      },
      on: {
        "close": function($event) {
          _vm.closeViewTabs(tag, $event)
        }
      }
    }, [_vm._v("\n      " + _vm._s(tag.name) + "\n    ")])], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app22"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-badge', {
    staticStyle: {
      "line-height": "30px"
    },
    attrs: {
      "is-dot": true
    },
    nativeOn: {
      "click": function($event) {
        _vm.dialogTableVisible = true
      }
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "bug日志",
      "visible": _vm.dialogTableVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogTableVisible = $event
      }
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.logsList
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "message"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('div', [_vm._v("msg:" + _vm._s(scope.row.err.message))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_vm._v("url: " + _vm._s(scope.row.url))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "stack"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                    " + _vm._s(scope.row.err.stack) + "\n                ")]
      }
    }])
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-breadcrumb', {
    staticClass: "app-levelbar",
    attrs: {
      "separator": "/"
    }
  }, _vm._l((_vm.levelList), function(item, index) {
    return _c('el-breadcrumb-item', {
      key: item
    }, [(item.redirect === "noredirect" || index == _vm.levelList.length - 1) ? _c('router-link', {
      staticClass: "no-redirect",
      attrs: {
        "to": ""
      }
    }, [_vm._v(_vm._s(item.name))]) : _c('router-link', {
      attrs: {
        "to": item.path
      }
    }, [_vm._v(_vm._s(item.name))])], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.routes) ? [(_vm.routes['/index/personalInfo']) ? _c('router-link', {
    attrs: {
      "to": "/index/personalInfo"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/index/personalInfo"
    }
  }, [_c('i', {
    staticClass: "fa fa-home",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 首页\n        \n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/example/tableList']) ? _c('router-link', {
    attrs: {
      "to": "/example/tableList"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/tableList"
    }
  }, [_c('i', {
    staticClass: "fa fa-table",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 示例表格\n        \n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/movie/newMovie']) ? _c('router-link', {
    attrs: {
      "to": "/movie/newMovie"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/movie/newMovie"
    }
  }, [_c('i', {
    staticClass: "fa fa-file-video-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 热映电影\n        \n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/movie/movieSearch']) ? _c('router-link', {
    attrs: {
      "to": "/movie/movieSearch"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/movie/movieSearch"
    }
  }, [_c('i', {
    staticClass: "fa fa-file-video-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 电影搜索\n        \n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/errorpage/401'] || _vm.routes['/errorpage/404']) ? _c('el-submenu', {
    attrs: {
      "index": "错误页面"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "fa fa-bug",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 错误页面\n            ")]), _vm._v(" "), (_vm.routes['/errorpage/401']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/errorpage/401"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/errorpage/401"
    }
  }, [_vm._v("\n                        401\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/errorpage/404']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/errorpage/404"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/errorpage/404"
    }
  }, [_vm._v("\n                        404\n                    ")])], 1) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.routes['/example/form'] || _vm.routes['/example/tinymce'] || _vm.routes['/example/mixin']) ? _c('el-submenu', {
    attrs: {
      "index": "综合实例"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "fa fa-envelope-open-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 综合实例\n            ")]), _vm._v(" "), (_vm.routes['/example/form']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/example/form"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/form"
    }
  }, [_vm._v("\n                        form表单编辑\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/example/tinymce']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/example/tinymce"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/tinymce"
    }
  }, [_vm._v("\n                        富文本编辑器\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/example/mixin']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/example/mixin"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/mixin"
    }
  }, [_vm._v("\n                        小组件\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "table内编辑"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("\n                       第二级菜单\n                    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/example/31"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/31"
    }
  }, [_vm._v("\n                                没权限重定向401\n                            ")])], 1), _vm._v(" "), _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/example/table2"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/example/table2"
    }
  }, [_vm._v("\n                                地址错误跳404\n                            ")])], 1)], 2)], 2) : _vm._e(), _vm._v(" "), (_vm.routes['/systemSet/permissionsManage'] || _vm.routes['/systemSet/loginLog']) ? _c('el-submenu', {
    attrs: {
      "index": "系统设置"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "fa fa-cogs fa-fw",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 系统设置\n            ")]), _vm._v(" "), (_vm.routes['/systemSet/permissionsManage']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/systemSet/permissionsManage"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/systemSet/permissionsManage"
    }
  }, [_vm._v("\n                        权限管理\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.routes['/systemSet/loginLog']) ? _c('router-link', {
    staticClass: "menu-indent",
    attrs: {
      "to": "/systemSet/loginLog"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/systemSet/loginLog"
    }
  }, [_vm._v("\n                        登录日志\n                    ")])], 1) : _vm._e()], 2) : _vm._e()] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ErrLog/index.vue": [
		238,
		11
	],
	"./Screenfull/index.vue": [
		239,
		10
	],
	"./error/401.vue": [
		240,
		6
	],
	"./error/404.vue": [
		241,
		5
	],
	"./example/form.vue": [
		242,
		9
	],
	"./example/mixin.vue": [
		243,
		8
	],
	"./example/tableList.vue": [
		244,
		15
	],
	"./example/tinymce.vue": [
		245,
		1
	],
	"./index/personalInfo.vue": [
		246,
		0
	],
	"./index/readme.vue": [
		247,
		7
	],
	"./layout/AppMain.vue": [
		81
	],
	"./layout/Layout.vue": [
		82
	],
	"./layout/Levelbar.vue": [
		52
	],
	"./layout/Navbar.vue": [
		83
	],
	"./layout/Sidebar.vue": [
		84
	],
	"./layout/SidebarItem.vue": [
		85
	],
	"./layout/TabsView.vue": [
		86
	],
	"./login/authredirect.vue": [
		248,
		16
	],
	"./login/index.vue": [
		249,
		2
	],
	"./login/reset.vue": [
		250,
		4
	],
	"./login/sendpwd.vue": [
		251,
		3
	],
	"./movie/movieSearch.vue": [
		252,
		14
	],
	"./movie/newMovie.vue": [
		253,
		13
	],
	"./systemSet/permissionsManage.vue": [
		254,
		12
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 234;

/***/ }),
/* 235 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[138]);