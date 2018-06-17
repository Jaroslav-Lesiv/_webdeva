"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var p = create("p");
var img = create("img");
var button = create("button");

var snakeLink = a.cloneNode(true);
snakeLink.className = "snake";

var dot = span.cloneNode();
dot.className = 'dot';

var pageShapeUrl = span.cloneNode();
pageShapeUrl.className = 'page-shape-url';

var pageShape = div.cloneNode();
pageShape.className = 'page-shape';

pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());

var grnStyle = function grnStyle() {
  var s = Math.floor(Math.random() * 10);
  var t = Math.floor(Math.random() * 4000 + 1000);
  var x = Math.random() * 80;
  var y = Math.random() * 80;
  return {
    s: s,
    t: t,
    x: x,
    y: y
  };
};

var setStyle = function setStyle(_ref, i) {
  var s = _ref.s,
      t = _ref.t,
      x = _ref.x,
      y = _ref.y;

  i.style.top = x + "%";
  i.style.left = y + "%";
  i.style.animationDuration = t + "ms";
  i.style.animationName = "blossom-" + s;
  i.style.transition = t + "ms ease-in-out";
};
var icons = ["react", "babel", "bootstrap", "css3", "html5", "gulp", "vue", "github_alt", "bitbucket", "jira", "npm", "nodejs", "sass", "less", "stylus", "linux", "android", "apple", "vscode", "atom"];
var blossom = function blossom() {
  var _loop = function _loop(i) {
    var icon = document.createElement("i");
    icon.className = "devicons devicons-" + icons[i];
    icon.style.fontSize = "80px";

    var _grnStyle = grnStyle(),
        s = _grnStyle.s,
        t = _grnStyle.t,
        x = _grnStyle.x,
        y = _grnStyle.y;

    requestAnimationFrame(function () {
      return setStyle({
        s: s,
        t: t,
        x: x,
        y: y
      }, icon);
    });
    setInterval(function () {
      return setStyle(grnStyle(), icon);
    }, t * 4);
    var about = document.querySelector("#nav");
    about.append(icon);
  };

  for (var i = 0; i < icons.length; i++) {
    _loop(i);
  }
};

// blossom();

var navLinks = document.querySelectorAll('#nav ul.list li a');

var ScrollBy = function () {
  function ScrollBy(_ref2) {
    var _this = this;

    var _ref2$links = _ref2.links,
        links = _ref2$links === undefined ? [] : _ref2$links;

    _classCallCheck(this, ScrollBy);

    this.links = [].concat(_toConsumableArray(links));
    this.active = null;
    this.hashes = [].concat(_toConsumableArray(this.links.map(function (link) {
      return link.getAttribute('href');
    })));
    window.addEventListener('scroll', function (_) {
      return _this.sectionHandler();
    });
    this.linksHandler();
  }

  _createClass(ScrollBy, [{
    key: "sectionHandler",
    value: function sectionHandler() {
      var _this2 = this;

      var windowHeight = document.documentElement.clientHeight;
      var stack = [];
      this.hashes.forEach(function (hash, idx) {
        var section = document.querySelector(hash);
        var coords = section.getBoundingClientRect();
        var isCurrent = coords.top >= 0 || coords.bottom - 23 > 0;
        if (isCurrent && !stack.length) {
          stack.push(hash);
          _this2.hash = hash;
          console.log(hash, idx, window.pageYOffset, coords.top, coords.bottom);
          _this2.updateNavigation();
        }
      });
    }
  }, {
    key: "linksHandler",
    value: function linksHandler() {
      var _this3 = this;

      this.links.forEach(function (link) {
        var hash = link.addEventListener('click', function (event) {
          event.preventDefault();
          _this3.hash = link.getAttribute('href');
          _this3.updateSections();
        });
      });
    }
  }, {
    key: "updateNavigation",
    value: function updateNavigation() {
      var _this4 = this;

      console.log(this.hash);
      this.links.forEach(function (link) {
        return link.getAttribute('href') === _this4.hash ? link.classList.add('btn-primary') : link.classList.remove('btn-primary');
      });
    }
  }, {
    key: "updateSections",
    value: function updateSections() {
      window.scrollTo(0, document.querySelector(this.hash).offsetTop);
    }
  }]);

  return ScrollBy;
}();
var yyy = new ScrollBy({ links: navLinks });

// examples

var json = JSON.stringify({
  sortKeys: ["all", "extension", "desktop", "mobile", "web"],
  examples: [{
    label: "NormalGame",
    url: "https://normalgame.net",
    sortKey: "web,react",
    img: "normalgame.png",
    use: [{ label: 'React', url: 'https://reactjs.org/' }, { label: 'redux', url: 'https://redux.js.org/' }, { label: 'redux-saga', url: 'https://github.com/redux-saga/redux-saga' }, { label: 'webpack', url: 'https://webpack.js.org/' }, { label: 'styled-components', url: 'https://www.styled-components.com/' }, { label: 'Laravel', url: 'http://laravel.su/' }],
    description: "Using: React, Redux, Webpack, recompose, styled-components, redux-saga"
  }, {
    label: "JustLabelMe",
    url: "https://just-label.me",
    sortKey: "web",
    img: "justlabelme.png",
    use: [{ label: 'JavaScript', url: 'https://www.javascript.com/' }, { label: 'stylus', url: 'http://stylus-lang.com/' }, { label: 'gulp', url: 'https://gulpjs.com/' }],
    description: "With JustLabelMe service, you\u2019ll save a lot of time because you can print perfectly onto 4\u201Dx6\u201D sticker labels, peel them and place them right on the package!"
  }, {
    label: "JustLabelMe Extension",
    url: "https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph",
    sortKey: "web,extension",
    img: "justlabelme_ext.jpg",
    use: [{ label: 'React', url: 'https://reactjs.org/' }, { label: 'redux', url: 'https://redux.js.org/' }, { label: 'webpack', url: 'https://webpack.js.org/' }, { label: 'styled-components', url: 'https://www.styled-components.com/' }],
    description: "Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click"
  }, {
    label: "Widin",
    url: "https://codingchipmunks.com/widin/",
    sortKey: "web",
    img: "widin.png",
    use: [{ label: 'JavaScript', url: 'https://www.javascript.com/' }, { label: 'stylus', url: 'http://stylus-lang.com/' }, { label: 'pug (jade)', url: 'https://pugjs.org/api/getting-started.html' }, { label: 'gulp', url: 'https://gulpjs.com/' }],
    description: "WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform"
  }, {
    label: "nomis",
    url: "https://nomis.com.ua/",
    sortKey: "web",
    img: "nomis.png",
    use: [{ label: 'JavaScript', url: 'https://www.javascript.com/' }, { label: 'jQuery', url: 'https://jquery.com/' }, { label: 'sass', url: 'https://sass-lang.com/' }, { label: 'blade', url: 'http://laravel.su/docs/5.3/blade' }, { label: 'gulp', url: 'https://gulpjs.com/' }, { label: 'Laravel', url: 'http://laravel.su/' }],
    description: "Check the reliability and solvency of the counterparty"
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
  var exampleNavigation = nav.cloneNode(true);
  exampleNavigation.className = "flex flex-align-center flex-justify-sa";
  var exampleNavigationControl = ul.cloneNode(true);
  exampleNavigationControl.className = "flex flex-align-center flex-justify-sa mb-20";
  var exampleNavigationControlItem = li.cloneNode(true);
  var exampleNavigationControlButton = button.cloneNode(true);
  exampleNavigationControlButton.className = "btn text-uppercase";

  var exampleList = ul.cloneNode(true);
  exampleList.className = "examples-content flex flex-align-start flex-justify-sa";

  var exampleListItem = li.cloneNode(true);
  exampleListItem.className = "card";

  var exampleListItemMedia = div.cloneNode(true);
  exampleListItemMedia.className = "card-media";

  var exampleListItemContent = div.cloneNode(true);
  exampleListItemContent.className = "card-content";

  var cardLink = snakeLink.cloneNode(true);
  cardLink.className = "card-label snake";

  var cardDescription = p.cloneNode(true);
  cardDescription.className = "card-description";

  data.examples.forEach(function (example) {
    var _cardDescription = cardDescription.cloneNode(true);
    _cardDescription.innerHTML = example.description;

    var _cardLink = cardLink.cloneNode(true);
    _cardLink.href = example.url;
    _cardLink.innerHTML = example.label;

    // const _cardDescription = cardDescription.cloneNode(true)

    var _strong = strong.cloneNode(true);
    _strong.append(_cardLink);

    var _use = strong.cloneNode(true);

    var _useWrapper = p.cloneNode();
    _use.innerHTML = 'Use: ';
    _useWrapper.append(_use);

    example.use.forEach(function (use, idx) {
      var _link = a.cloneNode();
      _link.href = use.url;
      _link.className = 'snake card-link';
      _link.target = '_blank';
      _link.innerHTML = "" + use.label + (idx === example.use.length - 1 ? '' : ',');
      _link.style.display = 'inline-flex';
      _link.style.flexWrap = 'wrap';
      _useWrapper.append(_link);
    });

    // _cardDescription.innerHTML = example.description

    var _cardMedia = exampleListItemMedia.cloneNode(true);
    var _img = img.cloneNode(true);
    _img.src = "./img/examples/" + example.img;

    // const pageShape = img.cloneNode(true)
    // pageShape.src = '/img/page-shape.jpg'

    var _pageShapeUrl = pageShapeUrl.cloneNode();
    _pageShapeUrl.innerHTML = example.url;

    var _pageShape = pageShape.cloneNode(true);
    _pageShape.append(_pageShapeUrl);

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
      examplesNode.querySelector("ul li button[data-sort=\"" + sortKey + "\"]").classList.add("btn-primary");
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

// nav
// const _nav = document.getElementById("nav");
// const checkScroll = () => {
//   if (window.scrollY > _nav.offsetHeight) {
//     _nav.classList.remove("transform");
//     _nav.style.backgroundColor = 'rgba(5, 81, 84, 1);'
//   } else {
//     _nav.classList.add("transform");
//     _nav.style.backgroundColor = `rgba(5,81,84, ${window.scrollY /
//       _nav.offsetHeight +
//       0.4})`;
//   }
// };

// window.addEventListener("scroll", () => {
//   requestAnimationFrame(checkScroll);
// });

document.querySelectorAll('.animated').forEach(function (selector) {
  var _selector$dataset = selector.dataset,
      animate = _selector$dataset.animate,
      start = _selector$dataset.start;


  switch (start) {
    case 'load':
      document.addEventListener('DOMContentLoaded', function () {
        selector.classList.add(animate);
      });
    case 'scroll':
      window.addEventListener('scroll', function () {
        // console.log((window.scrollY + window.innerHeight / 3) >= selector.getBoundingClientRect().top, (window.scrollY + window.innerHeight / 3), selector.getBoundingClientRect().top)
        if (selector.getBoundingClientRect().top <= window.innerHeight / 1.5) {
          selector.classList.add(animate);
        }
      });

      break;

    default:
      break;
  }
});
// ANIMATION

// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = this.txt;

//   var that = this;
//   var delta = 300 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('txt-rotate');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-rotate');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
// };


// particles js
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#59DBD5"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#505050"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#505050",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// lazy loading

var loadImages = document.querySelectorAll('.lazy-load') || [];

var LazyLoad = function () {
  function LazyLoad(_ref3) {
    var _this5 = this;

    var images = _ref3.images;

    _classCallCheck(this, LazyLoad);

    this.images = images;

    console.log(this.images);
    window.addEventListener('scroll', function () {
      return _this5.checkPosition();
    });
  }

  _createClass(LazyLoad, [{
    key: "checkPosition",
    value: function checkPosition() {
      var _this6 = this;

      this.images.length && this.images.forEach(function (image) {
        return _this6.isVisible(image) ? _this6.showImage(image) : undefined;
      });
    }
  }, {
    key: "isVisible",
    value: function isVisible(elem) {

      var coords = elem.getBoundingClientRect();

      var windowHeight = document.documentElement.clientHeight;

      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
    }
  }, {
    key: "showImage",
    value: function showImage(elem) {
      var _src = elem.getAttribute('realsrc');
      elem.src = _src;
      this.images = Array.prototype.slice.call(this.images).filter(function (image) {
        return image !== elem;
      });
    }
  }]);

  return LazyLoad;
}();

var lazy = new LazyLoad({ images: loadImages });