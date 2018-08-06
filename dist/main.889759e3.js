// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"assets/js/config.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    secret: 'WCUj3/(iTn.Nw4M]ezy#DU5G&P/0Un',
    domain: 'https://still-journey-84385.herokuapp.com'
};
},{}],"assets/js/helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.http = exports.setStyle = exports.button = exports.img = exports.p = exports.h5 = exports.h4 = exports.h3 = exports.a = exports.strong = exports.li = exports.ul = exports.nav = exports.span = exports.div = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secret = _config2.default.secret,
    domain = _config2.default.domain;

var create = function create(tagname) {
    return document.createElement(tagname);
};

var div = create("div");
var span = create("span");
var nav = create("nav");
var ul = create("ul");
var li = create("li");
var strong = create("strong");
var a = create("a");
var h3 = create("h3");
var h4 = create("h4");
var h5 = create("h5");
var p = create("p");
var img = create("img");
var button = create("button");

var setStyle = function setStyle(selector) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    console.log(styles);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(styles)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            selector.style[key] = value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var Http = function () {
    function Http(_ref3) {
        var secret = _ref3.secret,
            domain = _ref3.domain;

        _classCallCheck(this, Http);

        this.secret = secret;
        this.domain = domain;
    }

    _createClass(Http, [{
        key: "post",
        value: function post(_ref4) {
            var data = _ref4.data,
                success = _ref4.success,
                error = _ref4.error,
                url = _ref4.url,
                _ref4$myDomain = _ref4.myDomain,
                myDomain = _ref4$myDomain === undefined ? true : _ref4$myDomain;

            var _url = myDomain ? this.domain + "/" + url : url;

            var xhr = new XMLHttpRequest();

            if (myDomain) data._secret = this.secret;

            var json = JSON.stringify(data);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    success(xhr.response);
                }
            };

            // Отсылаем объект в формате JSON и с Content-Type application/json
            // Сервер должен уметь такой Content-Type принимать и раскодировать
            xhr.open("POST", _url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(json);
        }
    }]);

    return Http;
}();
var http = new Http({ secret: secret, domain: domain });

exports.div = div;
exports.span = span;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.strong = strong;
exports.a = a;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.p = p;
exports.img = img;
exports.button = button;
exports.setStyle = setStyle;
exports.http = http;
},{"./config":"assets/js/config.js"}],"assets/js/notification/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._notification = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('../helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotificationBlock = _helper.div.cloneNode();
(0, _helper.setStyle)(NotificationBlock, {
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
});

var NotificationContainer = _helper.div.cloneNode();
(0, _helper.setStyle)(NotificationContainer, {
    padding: '2px 25px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 3px 13px 1px rgba(0,0,0,0.12)',
    backgroundColor: '#ffffff',
    margin: '5px 0',
    minWidth: '250px'
});

var icon = _helper.img.cloneNode();
icon.src = './img/icon/mail.png';
(0, _helper.setStyle)(icon, {
    width: '35px',
    height: '35px',
    marginRight: '15px'
});

var NotificationContent = _helper.div.cloneNode();
(0, _helper.setStyle)(NotificationContent, {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
});
var Notification = function () {
    function Notification() {
        _classCallCheck(this, Notification);

        this.NotificationBlock = NotificationBlock;
        document.body.append(NotificationBlock);
        this.anim_show = 'slideInRight';
        this.anim_hide = 'slideOutRight';
    }

    _createClass(Notification, [{
        key: 'add',
        value: function add(_ref) {
            var _this = this;

            var label = _ref.label,
                mess = _ref.mess;

            var id = '_' + +new Date();
            this.NotificationBlock.prepend(this.create({ label: label, mess: mess, id: id }));
            setTimeout(function () {
                return _this.remove(id);
            }, 3000);
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var el = this.NotificationBlock.querySelector('#' + id);
            el.classList.remove(this.anim_show);
            el.classList.add(this.anim_hide);
            setTimeout(function () {
                return el.remove();
            }, 500);
        }
    }, {
        key: 'create',
        value: function create(_ref2) {
            var label = _ref2.label,
                mess = _ref2.mess,
                id = _ref2.id;

            var _NotificationContainer = NotificationContainer.cloneNode();
            _NotificationContainer.id = id;
            _NotificationContainer.className = 'transition ' + this.anim_show;
            var _NotificationContent = NotificationContent.cloneNode();

            var _icon = icon.cloneNode();

            var _NotificationLabel = _helper.h4.cloneNode();
            _NotificationLabel.className = 'card-label snake';
            _NotificationLabel.innerHTML = label;

            var _NotificationMessage = _helper.p.cloneNode();
            _NotificationMessage.className = 'description';
            _NotificationMessage.innerHTML = mess;

            _NotificationContent.append(_NotificationLabel, _NotificationMessage);
            _NotificationContainer.append(_icon, _NotificationContent);

            return _NotificationContainer;
        }
    }]);

    return Notification;
}();

var _notification = exports._notification = new Notification();
window._notification = _notification;
},{"../helper":"assets/js/helper.js"}],"assets/js/lazyLoad/index.js":[function(require,module,exports) {
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loadImages = document.querySelectorAll(".lazy-load") || [];

var LazyLoad = function () {
    function LazyLoad(_ref) {
        var _this = this;

        var images = _ref.images;

        _classCallCheck(this, LazyLoad);

        this.images = images;

        console.log(this.images);
        window.addEventListener("scroll", function () {
            return _this.checkPosition();
        });
    }

    _createClass(LazyLoad, [{
        key: "checkPosition",
        value: function checkPosition() {
            var _this2 = this;

            this.images.length && this.images.forEach(function (image) {
                return _this2.isVisible(image) ? _this2.showImage(image) : undefined;
            });
        }
    }, {
        key: "isVisible",
        value: function isVisible(elem) {
            var coords = elem.getBoundingClientRect();

            var windowHeight = document.documentElement.clientHeight;

            var topVisible = coords.top + windowHeight / 2 > 0 && coords.top < windowHeight;
            var bottomVisible = coords.bottom < windowHeight + windowHeight / 2 && coords.bottom > 0;

            return topVisible || bottomVisible;
        }
    }, {
        key: "showImage",
        value: function showImage(elem) {
            var _src = elem.getAttribute("realsrc");
            elem.src = _src;
            this.images = Array.prototype.slice.call(this.images).filter(function (image) {
                return image !== elem;
            });
        }
    }]);

    return LazyLoad;
}();

var lazy = new LazyLoad({
    images: loadImages
});
},{}],"assets/js/navigation/index.js":[function(require,module,exports) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require("../helper");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navLinks = document.querySelectorAll("#nav ul.list li a");

var ScrollControl = function () {
    function ScrollControl(_ref) {
        var _this = this;

        var _ref$links = _ref.links,
            links = _ref$links === undefined ? [] : _ref$links;

        _classCallCheck(this, ScrollControl);

        this.hash = null;

        this.links = [].concat(_toConsumableArray(links)).map(function (link) {
            return {
                selector: link,
                hash: link.getAttribute("href")
            };
        });
        this.nodeList = [].concat(_toConsumableArray(this.links.map(function (link) {
            return {
                selector: document.querySelector(link.hash),
                hash: link.hash
            };
        })));

        window.addEventListener("scroll", function (_) {
            return _this.sectionHandler();
        });
        this.linksHandler();
    }

    _createClass(ScrollControl, [{
        key: "sectionHandler",
        value: function sectionHandler() {
            var windowHeight = document.documentElement.clientHeight;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var node = _step.value;

                    var coords = node.selector.getBoundingClientRect();
                    var isCurrent = coords.top >= 0 || coords.bottom - 40 > 0;
                    if (isCurrent) {
                        this.hash = node.hash;
                        this.updateNavigation();
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "linksHandler",
        value: function linksHandler() {
            var _this2 = this;

            this.links.forEach(function (link) {
                link.selector.addEventListener("click", function (event) {
                    event.preventDefault();
                    _this2.hash = link.hash;
                    _this2.updateSections();
                });
            });
        }
    }, {
        key: "updateNavigation",
        value: function updateNavigation() {
            var _this3 = this;

            this.links.forEach(function (link) {
                return link.hash === _this3.hash ? link.selector.classList.add("btn-primary") : link.selector.classList.remove("btn-primary");
            });
        }
    }, {
        key: "updateSections",
        value: function updateSections() {
            var _this4 = this;

            window.scrollTo({
                top: this.nodeList.find(function (node) {
                    return node.hash === _this4.hash;
                }).selector.offsetTop,
                behavior: "smooth"
            });
        }
    }]);

    return ScrollControl;
}();
new ScrollControl({
    links: navLinks
});

var MobileControl = function () {
    function MobileControl() {
        var _this5 = this;

        _classCallCheck(this, MobileControl);

        this.isActive = false;
        this.button = document.querySelector('#nav-toggle_menu');
        this.nav = document.querySelector('#nav');
        this.button.addEventListener('click', function () {
            return _this5.toggle();
        });
        this.main = document.querySelector('.main');
    }

    _createClass(MobileControl, [{
        key: "toggle",
        value: function toggle() {
            this.isActive = !this.isActive;
            // this.isActive ? this.main.classList.add('blur') : this.main.classList.remove('blur')
            this.render();
        }
    }, {
        key: "render",
        value: function render() {
            if (this.isActive) {
                this.button.classList.add('active');
                this.nav.classList.add('active');
                console.log(this.button, this.nav, 'true 222');
            } else {
                this.button.classList.remove('active');
                this.nav.classList.remove('active');
                console.log(this.button, this.nav, 'false 333');
            }
        }
    }]);

    return MobileControl;
}();

new MobileControl();
},{"../helper":"assets/js/helper.js"}],"assets/js/textBracket/index.js":[function(require,module,exports) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('../helper');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBracket = function () {
    function TextBracket(_ref) {
        var selector = _ref.selector;

        _classCallCheck(this, TextBracket);

        if (!selector) return;
        this.selector = selector;
        var _selector$dataset = this.selector.dataset,
            _selector$dataset$key = _selector$dataset.keywords,
            keywords = _selector$dataset$key === undefined ? [] : _selector$dataset$key,
            _selector$dataset$dur = _selector$dataset.duration,
            duration = _selector$dataset$dur === undefined ? 4000 : _selector$dataset$dur;

        this.duration = duration;
        this.words = keywords.split(",");

        this.current = 0;
        this.createNode();
    }

    _createClass(TextBracket, [{
        key: 'createNode',
        value: function createNode() {
            var bracket = _helper.div.cloneNode();
            var before = _helper.h3.cloneNode();
            var after = _helper.h3.cloneNode();
            var wordWrap = _helper.div.cloneNode();
            this.wordWrap = wordWrap;
            var word = _helper.h3.cloneNode();
            word.className = 'color-primary';

            before.className = 'color-primary bold mr-10';
            after.className = 'color-primary bold ml-10';

            (0, _helper.setStyle)(word, {
                display: 'inline-flex',
                justifyContent: 'center',
                textTransform: 'uppercase',
                fontWeight: '600'
            });

            (0, _helper.setStyle)(bracket, {
                display: "inline-flex"
            });

            (0, _helper.setStyle)(wordWrap, {
                display: "flex",
                overflow: 'hidden'
            });

            before.innerHTML = "[";
            after.innerHTML = "]";

            bracket.append(before, wordWrap, after);

            var maxWidth = 0;
            var maxHeight = 0;
            this.wordsSelector = this.words.map(function (textWord) {
                var _word = word.cloneNode(true);
                _word.innerHTML = textWord;
                return _word;
            });
            var wordSlider = _helper.div.cloneNode();
            (0, _helper.setStyle)(wordSlider, {
                display: 'flex',
                flexDirection: 'column',
                transition: '0.4s'
            });
            wordSlider.append.apply(wordSlider, _toConsumableArray(this.wordsSelector));
            this.wordWrap.append(wordSlider);

            this.selector.append(bracket);

            this.maxWidth = wordSlider.offsetWidth + 'px';
            this.maxHeight = this.wordsSelector[0].offsetHeight;
            (0, _helper.setStyle)(this.wordWrap, {
                width: this.maxWidth,
                height: this.maxHeight + 'px',
                position: "relative"
            });
            (0, _helper.setStyle)(wordSlider, {
                position: 'absolute',
                top: 0,
                left: 0
            });
            this.wordSlider = wordSlider;
            this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            console.log(this.current, this.maxHeight);
            (0, _helper.setStyle)(this.wordSlider, {
                transform: 'translateY(-' + this.current * this.maxHeight + 'px)'
            });
            this.current = this.current >= this.wordsSelector.length - 1 ? 0 : this.current + 1;

            setTimeout(function () {
                return _this.update();
            }, this.duration);
        }
    }]);

    return TextBracket;
}();
var textBracket = document.querySelector(".text-bracket");
new TextBracket({
    selector: textBracket
});
},{"../helper":"assets/js/helper.js"}],"assets/js/examples/index.js":[function(require,module,exports) {
'use strict';

var _helper = require('../helper');

var _notification2 = require('../notification');

var imageHandler = function imageHandler(image) {
    image.addEventListener('mouseover', function (e) {
        var parentHeight = this.parentNode.offsetHeight;
        this.style.transition = this.offsetHeight / parentHeight * 1.5 + 's';
        this.style.transform = 'translateY(-' + (this.offsetHeight - parentHeight) + 'px)';
    });

    image.addEventListener('mouseleave', function (e) {
        this.style.transform = 'translateY(0)';
    });
};
var snakeLink = _helper.a.cloneNode(true);
snakeLink.className = "snake";
snakeLink.target = '_blank';

var copyBtn = _helper.img.cloneNode();
(0, _helper.setStyle)(copyBtn, {
    width: '20px',
    height: '20px',
    margin: '0 auto',
    cursor: 'pointer'
});

copyBtn.setAttribute('title', 'Copy to clipboard');
copyBtn.alt = 'Copy to clipboard';
copyBtn.src = './img/icon/copy.png';
copyBtn.className = 'transition hover-animate-scale';
var dot = _helper.span.cloneNode();
dot.className = "dot";

var pageShapeUrl = _helper.span.cloneNode();
pageShapeUrl.className = "page-shape-url";

var pageShape = _helper.div.cloneNode();
pageShape.className = "page-shape";

pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());

var json = JSON.stringify({
    sortKeys: ["all", "extension", "desktop", "mobile", "web"],
    examples: [{
        label: 'NormalGame',
        url: 'https://normalgame.net',
        sortKey: 'web,react',
        img: 'normalgame.png',
        use: [{
            label: "React",
            url: "https://reactjs.org/"
        }, {
            label: "redux",
            url: "https://redux.js.org/"
        }, {
            label: "redux-saga",
            url: "https://github.com/redux-saga/redux-saga"
        }, {
            label: "webpack",
            url: "https://webpack.js.org/"
        }, {
            label: "styled-components",
            url: "https://www.styled-components.com/"
        }, {
            label: "Laravel",
            url: "http://laravel.su/"
        }],
        description: 'Using: React, Redux, Webpack, recompose, styled-components, redux-saga'
    }, {
        label: 'JustLabelMe',
        url: 'https://just-label.me',
        sortKey: 'web',
        img: 'justlabelme.png',
        use: [{
            label: "JavaScript",
            url: "https://www.javascript.com/"
        }, {
            label: "stylus",
            url: "http://stylus-lang.com/"
        }, {
            label: "gulp",
            url: "https://gulpjs.com/"
        }],
        description: 'With JustLabelMe service, you\u2019ll save a lot of time because you can print perfectly onto 4\u201Dx6\u201D sticker labels, peel them and place them right on the package!'
    }, {
        label: 'JustLabelMe Extension',
        url: 'https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph',
        sortKey: 'web,extension',
        img: 'justlabelme_ext.jpg',
        use: [{
            label: "React",
            url: "https://reactjs.org/"
        }, {
            label: "redux",
            url: "https://redux.js.org/"
        }, {
            label: "webpack",
            url: "https://webpack.js.org/"
        }, {
            label: "styled-components",
            url: "https://www.styled-components.com/"
        }],
        description: 'Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click'
    }, {
        label: 'Widin',
        url: 'https://codingchipmunks.com/widin/',
        sortKey: 'web',
        img: 'widin.png',
        use: [{
            label: "JavaScript",
            url: "https://www.javascript.com/"
        }, {
            label: "stylus",
            url: "http://stylus-lang.com/"
        }, {
            label: "pug (jade)",
            url: "https://pugjs.org/api/getting-started.html"
        }, {
            label: "gulp",
            url: "https://gulpjs.com/"
        }],
        description: 'WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform'
    }, {
        label: 'nomis',
        url: 'https://nomis.com.ua/',
        sortKey: 'web',
        img: 'nomis.png',
        use: [{
            label: "JavaScript",
            url: "https://www.javascript.com/"
        }, {
            label: "jQuery",
            url: "https://jquery.com/"
        }, {
            label: "sass",
            url: "https://sass-lang.com/"
        }, {
            label: "blade",
            url: "http://laravel.su/docs/5.3/blade"
        }, {
            label: "gulp",
            url: "https://gulpjs.com/"
        }, {
            label: "Laravel",
            url: "http://laravel.su/"
        }],
        description: 'Check the reliability and solvency of the counterparty'
    }, {
        label: 'Time tracker',
        url: 'https://chrome.google.com/webstore/detail/time-tracker/hanofejodfbhellaldjonedfpejjcpnl',
        sortKey: 'web,extension',
        img: 'time_tracker.png',
        use: [{
            label: "JavaScript",
            url: "https://www.javascript.com/"
        }],
        description: 'Time Tracker which tracks where you spend time on the web and presents the stats in a useful and intuitive way.'
    }]
});

var data = JSON.parse(json);
var _example = document.querySelector("#examples");

// const _sortBtn = _example.querySelectorAll('nav ul li btn.btn')

// _sortBtn.forEach( btn => {
//     btn.addEventListener('click', function() {
//         const sortKey = this.dataset.sort
//     })
// } )

var _sortExamples = function _sortExamples() {
    var sortKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return JSON.parse(json).filter(function (item) {
        return item.sortKey.split(",").some(function (key) {
            return key === sortKey;
        });
    });
};

var _renderExamples = function _renderExamples(json) {
    var examplesNode = document.querySelector("#examples .examples");
    var exampleNavigation = _helper.nav.cloneNode(true);
    exampleNavigation.className = "flex flex-align-center flex-justify-sa";
    var exampleNavigationControl = _helper.ul.cloneNode(true);
    exampleNavigationControl.className = "flex flex-align-center flex-justify-sa mb-20";
    var exampleNavigationControlItem = _helper.li.cloneNode(true);
    var exampleNavigationControlButton = _helper.button.cloneNode(true);
    exampleNavigationControlButton.className = "btn text-uppercase";

    var exampleList = _helper.ul.cloneNode(true);
    exampleList.className = "examples-content flex flex-align-start flex-justify-sa";

    var exampleListItem = _helper.li.cloneNode(true);
    exampleListItem.className = 'card';

    var exampleListItemMedia = _helper.div.cloneNode(true);
    exampleListItemMedia.className = "card-media";

    var exampleListItemContent = _helper.div.cloneNode(true);
    exampleListItemContent.className = 'card-content';

    var cardLink = snakeLink.cloneNode(true);
    cardLink.className = "card-label snake";

    var cardDescription = _helper.p.cloneNode(true);
    cardDescription.className = "card-description";

    data.examples.forEach(function (example) {
        var _cardDescription = cardDescription.cloneNode(true);
        _cardDescription.innerHTML = example.description;

        var _cardLink = cardLink.cloneNode(true);
        _cardLink.href = example.url;
        _cardLink.innerHTML = example.label;

        // const _cardDescription = cardDescription.cloneNode(true)

        var _strong = _helper.strong.cloneNode(true);
        _strong.append(_cardLink);

        var _use = _helper.strong.cloneNode(true);

        var _useWrapper = _helper.p.cloneNode();
        _use.innerHTML = "Use: ";
        _useWrapper.append(_use);

        example.use.forEach(function (use, idx) {
            var _link = _helper.a.cloneNode();
            _link.href = use.url;
            _link.className = "snake card-link";
            _link.target = "_blank";
            _link.innerHTML = '' + use.label + (idx === example.use.length - 1 ? "" : ",");
            _link.style.display = "inline-flex";
            _link.style.flexWrap = "wrap";
            _useWrapper.append(_link);
        });

        // _cardDescription.innerHTML = example.description

        var _cardMedia = exampleListItemMedia.cloneNode(true);
        var _img = _helper.img.cloneNode(true);
        _img.src = './img/examples/' + example.img;
        imageHandler(_img);

        var _pageShapeUrl = pageShapeUrl.cloneNode();
        _pageShapeUrl.innerHTML = example.url;

        var _copy = copyBtn.cloneNode();
        _copy.addEventListener('click', function () {
            var range = document.createRange();
            range.selectNode(_pageShapeUrl);
            window.getSelection().addRange(range);
            try {
                // Теперь, когда мы выбрали текст , выполним команду копирования
                var successful = document.execCommand("copy");

                var mess = successful ? "Successful" : "Failed";
                _notification2._notification.add({ label: 'Copied!', mess: mess });
            } catch (err) {
                console.log("Oops, unable to copy");
            }

            // Снятие выделения - ВНИМАНИЕ: вы должны использовать
            // removeRange(range) когда это возможно
            window.getSelection().removeRange(range);
        });

        var _pageShape = pageShape.cloneNode(true);
        _pageShape.append(_pageShapeUrl, _copy);

        _cardMedia.append(_img);

        var _cardContent = exampleListItemContent.cloneNode(true);

        _cardContent.append(_strong);
        _cardContent.append(_useWrapper);
        _cardContent.append(_cardDescription);

        var _exampleListItem = exampleListItem.cloneNode(true);
        _exampleListItem.dataset.sort = example.sortKey;

        _exampleListItem.append(_pageShape);
        _exampleListItem.append(_cardMedia);
        _exampleListItem.append(_cardContent);

        exampleList.append(_exampleListItem);
    });

    var checkSort = function checkSort(sortKey) {
        exampleList.querySelectorAll(".card").forEach(function (card) {
            // console.log(card, card.dataset.sort)
            if (card.dataset.sort.split(",").some(function (key) {
                return key === sortKey;
            }) || sortKey === "all") {
                card.classList.add("show_scale");
                card.classList.remove("hide_scale");
            } else {
                card.classList.remove("show_scale");
                card.classList.add("hide_scale");
            }
            examplesNode.querySelectorAll("ul li button[data-sort]").forEach(function (btn) {
                return btn.classList.remove("btn-primary");
            });
            examplesNode.querySelector('ul li button[data-sort="' + sortKey + '"]').classList.add("btn-primary");
        });
    };
    data.sortKeys.forEach(function (sortKey, key) {
        var _exampleNavigationControlButton = exampleNavigationControlButton.cloneNode(true);
        _exampleNavigationControlButton.innerHTML = sortKey;
        _exampleNavigationControlButton.dataset.sort = sortKey;
        if (!key) _exampleNavigationControlButton.classList.add("btn-primary");

        _exampleNavigationControlButton.addEventListener("click", function () {
            checkSort(sortKey);
        });
        var _exampleNavigationControlItem = exampleNavigationControlItem.cloneNode(true);
        _exampleNavigationControlItem.append(_exampleNavigationControlButton);
        exampleNavigationControl.append(_exampleNavigationControlItem);
    });

    examplesNode.append(exampleNavigationControl);
    examplesNode.append(exampleList);
};

_renderExamples(data);
},{"../helper":"assets/js/helper.js","../notification":"assets/js/notification/index.js"}],"assets/js/contacts/index.js":[function(require,module,exports) {
'use strict';

var _helper = require('../helper');

var _notification2 = require('../notification');

var form = document.getElementById('contact_form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var _ref = [form.querySelector('#contact_name').value, form.querySelector('#contact_email').value, form.querySelector('#contact_message').value],
        name = _ref[0],
        email = _ref[1],
        message = _ref[2];


    var data = {
        name: name,
        email: email,
        message: message
    };
    form.classList.add('loading');

    _helper.http.post({
        data: data, url: 'message',
        success: function success() {
            _notification2._notification.add({ label: 'Message sending', mess: 'You messages sended seccessfull :)' });
            form.classList.remove('loading');
        },
        error: function error() {
            _notification2._notification.add({ label: 'Message sending', mess: 'You messages not sended :(' });
            form.classList.remove('loading');
        }
    });
});
},{"../helper":"assets/js/helper.js","../notification":"assets/js/notification/index.js"}],"assets/js/main.js":[function(require,module,exports) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./notification');

require('./lazyLoad');

require('./navigation');

require('./textBracket');

require('./examples');

require('./contacts');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// import './animation'


// import './http'
particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#59DBD5"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#505050"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#505050",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
// bracket text

// lazy loading


var animationHandler = function () {
  function animationHandler(_ref) {
    var selectors = _ref.selectors;

    _classCallCheck(this, animationHandler);

    this.selectors = selectors;
    this.handle();
  }

  _createClass(animationHandler, [{
    key: 'handle',
    value: function handle() {
      var _this = this;

      this.selectors.forEach(function (selector) {
        var _selector$dataset = selector.dataset,
            animate = _selector$dataset.animate,
            start = _selector$dataset.start;

        switch (start) {
          case "load":
            document.addEventListener("DOMContentLoaded", function () {
              selector.classList.add(animate);
            });
          case "scroll":
            window.addEventListener("scroll", function () {
              return _this.checkScroll(selector, animate);
            });
            _this.checkScroll(selector, animate);
            break;

          default:
            break;
        }
      });
    }
  }, {
    key: 'checkScroll',
    value: function checkScroll(selector, animate) {
      if (selector.getBoundingClientRect().top <= document.documentElement.clientHeight) {
        selector.classList.add(animate);
      }
    }
  }]);

  return animationHandler;
}();
document.addEventListener('DOMContentLoaded', function () {
  new animationHandler({
    selectors: [].concat(_toConsumableArray(document.querySelectorAll(".animated")))
  });
});

console.log([].concat(_toConsumableArray(document.querySelectorAll(".animated"))));
},{"./notification":"assets/js/notification/index.js","./lazyLoad":"assets/js/lazyLoad/index.js","./navigation":"assets/js/navigation/index.js","./textBracket":"assets/js/textBracket/index.js","./examples":"assets/js/examples/index.js","./contacts":"assets/js/contacts/index.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '34569' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","assets/js/main.js"], null)
//# sourceMappingURL=/main.889759e3.map