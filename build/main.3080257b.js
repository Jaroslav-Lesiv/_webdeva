parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({41:[function(require,module,exports) {
var e=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),t=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function a(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(e){return document.createElement(e)},l=r("div"),o=r("span"),s=r("nav"),i=r("ul"),c=r("li"),u=r("strong"),d=r("a"),p=r("h3"),h=r("p"),m=r("img"),f=r("button"),v=d.cloneNode(!0);v.className="snake";var b=o.cloneNode();b.className="dot";var y=o.cloneNode();y.className="page-shape-url";var g=l.cloneNode();g.className="page-shape",g.append(b.cloneNode()),g.append(b.cloneNode()),g.append(b.cloneNode());var w=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(a);var n=!0,r=!1,l=void 0;try{for(var o,s=Object.entries(a)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value,c=t(i,2),u=c[0],d=c[1];e.style[u]=d}}catch(e){r=!0,l=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw l}}},N=document.querySelectorAll("#nav ul.list li a"),k=function(){function t(e){var r=this,l=e.links,o=void 0===l?[]:l;n(this,t),this.hash=null,this.links=[].concat(a(o)).map(function(e){return{selector:e,hash:e.getAttribute("href")}}),this.nodeList=[].concat(a(this.links.map(function(e){return{selector:document.querySelector(e.hash),hash:e.hash}}))),window.addEventListener("scroll",function(e){return r.sectionHandler()}),this.linksHandler()}return e(t,[{key:"sectionHandler",value:function(){document.documentElement.clientHeight;var e=!0,t=!1,a=void 0;try{for(var n,r=this.nodeList[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var l=n.value,o=l.selector.getBoundingClientRect();if(o.top>=0||o.bottom-23>0){this.hash=l.hash,this.updateNavigation();break}}}catch(e){t=!0,a=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw a}}}},{key:"linksHandler",value:function(){var e=this;this.links.forEach(function(t){t.selector.addEventListener("click",function(a){a.preventDefault(),e.hash=t.hash,e.updateSections()})})}},{key:"updateNavigation",value:function(){var e=this;this.links.forEach(function(t){return t.hash===e.hash?t.selector.classList.add("btn-primary"):t.selector.classList.remove("btn-primary")})}},{key:"updateSections",value:function(){var e=this;window.scrollTo({top:this.nodeList.find(function(t){return t.hash===e.hash}).selector.offsetTop,behavior:"smooth"})}}]),t}(),x=new k({links:N}),L=JSON.stringify({sortKeys:["all","extension","desktop","mobile","web"],examples:[{label:"NormalGame",url:"https://normalgame.net",sortKey:"web,react",img:"normalgame.png",use:[{label:"React",url:"https://reactjs.org/"},{label:"redux",url:"https://redux.js.org/"},{label:"redux-saga",url:"https://github.com/redux-saga/redux-saga"},{label:"webpack",url:"https://webpack.js.org/"},{label:"styled-components",url:"https://www.styled-components.com/"},{label:"Laravel",url:"http://laravel.su/"}],description:"Using: React, Redux, Webpack, recompose, styled-components, redux-saga"},{label:"JustLabelMe",url:"https://just-label.me",sortKey:"web",img:"justlabelme.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"stylus",url:"http://stylus-lang.com/"},{label:"gulp",url:"https://gulpjs.com/"}],description:"With JustLabelMe service, you’ll save a lot of time because you can print perfectly onto 4”x6” sticker labels, peel them and place them right on the package!"},{label:"JustLabelMe Extension",url:"https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph",sortKey:"web,extension",img:"justlabelme_ext.jpg",use:[{label:"React",url:"https://reactjs.org/"},{label:"redux",url:"https://redux.js.org/"},{label:"webpack",url:"https://webpack.js.org/"},{label:"styled-components",url:"https://www.styled-components.com/"}],description:"Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click"},{label:"Widin",url:"https://codingchipmunks.com/widin/",sortKey:"web",img:"widin.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"stylus",url:"http://stylus-lang.com/"},{label:"pug (jade)",url:"https://pugjs.org/api/getting-started.html"},{label:"gulp",url:"https://gulpjs.com/"}],description:"WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform"},{label:"nomis",url:"https://nomis.com.ua/",sortKey:"web",img:"nomis.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"jQuery",url:"https://jquery.com/"},{label:"sass",url:"https://sass-lang.com/"},{label:"blade",url:"http://laravel.su/docs/5.3/blade"},{label:"gulp",url:"https://gulpjs.com/"},{label:"Laravel",url:"http://laravel.su/"}],description:"Check the reliability and solvency of the counterparty"}]}),j=JSON.parse(L),S=document.querySelector("#examples"),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return JSON.parse(L).filter(function(t){return t.sortKey.split(",").some(function(t){return t===e})})},H=function(e){var t=document.querySelector("#examples .examples");s.cloneNode(!0).className="flex flex-align-center flex-justify-sa";var a=i.cloneNode(!0);a.className="flex flex-align-center flex-justify-sa mb-20";var n=c.cloneNode(!0),r=f.cloneNode(!0);r.className="btn text-uppercase";var o=i.cloneNode(!0);o.className="examples-content flex flex-align-start flex-justify-sa";var p=c.cloneNode(!0);p.className="card";var b=l.cloneNode(!0);b.className="card-media";var w=l.cloneNode(!0);w.className="card-content";var N=v.cloneNode(!0);N.className="card-label snake";var k=h.cloneNode(!0);k.className="card-description",j.examples.forEach(function(e){var t=k.cloneNode(!0);t.innerHTML=e.description;var a=N.cloneNode(!0);a.href=e.url,a.innerHTML=e.label;var n=u.cloneNode(!0);n.append(a);var r=u.cloneNode(!0),l=h.cloneNode();r.innerHTML="Use: ",l.append(r),e.use.forEach(function(t,a){var n=d.cloneNode();n.href=t.url,n.className="snake card-link",n.target="_blank",n.innerHTML=t.label+(a===e.use.length-1?"":","),n.style.display="inline-flex",n.style.flexWrap="wrap",l.append(n)});var s=b.cloneNode(!0),i=m.cloneNode(!0);i.src="./img/examples/"+e.img;var c=y.cloneNode();c.innerHTML=e.url;var f=g.cloneNode(!0);f.append(c),s.append(i);var v=w.cloneNode(!0);v.append(n),v.append(l),v.append(t);var x=p.cloneNode(!0);x.dataset.sort=e.sortKey,x.append(f),x.append(s),x.append(v),o.append(x)});j.sortKeys.forEach(function(e,l){var s=r.cloneNode(!0);s.innerHTML=e,s.dataset.sort=e,l||s.classList.add("btn-primary"),s.addEventListener("click",function(){!function(e){o.querySelectorAll(".card").forEach(function(a){a.dataset.sort.split(",").some(function(t){return t===e})||"all"===e?(a.classList.add("show_scale"),a.classList.remove("hide_scale")):(a.classList.remove("show_scale"),a.classList.add("hide_scale")),t.querySelectorAll("ul li button[data-sort]").forEach(function(e){return e.classList.remove("btn-primary")}),t.querySelector('ul li button[data-sort="'+e+'"]').classList.add("btn-primary")})}(e)});var i=n.cloneNode(!0);i.append(s),a.append(i)}),t.append(a),t.append(o)};H(j),particlesJS("particles-js",{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#59DBD5"},shape:{type:"circle",stroke:{width:0,color:"#505050"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#505050",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var A=function(){function t(e){var a=e.selector;if(n(this,t),a){this.selector=a;var r=this.selector.dataset,l=r.keywords,o=void 0===l?[]:l,s=r.duration,i=void 0===s?4e3:s;this.duration=i,this.words=o.split(","),this.current=0,this.createNode()}}return e(t,[{key:"createNode",value:function(){var e=l.cloneNode(),t=p.cloneNode(),n=p.cloneNode(),r=l.cloneNode();this.wordWrap=r;var o=p.cloneNode();t.className="color-primary bold mr-10",n.className="color-primary bold ml-10",w(o,{display:"inline-flex",justifyContent:"center",textTransform:"uppercase",fontWeight:"400"}),w(e,{display:"inline-flex"}),w(r,{display:"flex",overflow:"hidden"}),t.innerHTML="[",n.innerHTML="]",e.append(t,r,n);this.wordsSelector=this.words.map(function(e){var t=o.cloneNode(!0);return t.innerHTML=e,t});var s=l.cloneNode();w(s,{display:"flex",flexDirection:"column",transition:"0.4s"}),s.append.apply(s,a(this.wordsSelector)),this.wordWrap.append(s),this.selector.append(e),this.maxWidth=s.offsetWidth+"px",this.maxHeight=this.wordsSelector[0].offsetHeight,w(this.wordWrap,{width:this.maxWidth,height:this.maxHeight+"px",position:"relative"}),w(s,{position:"absolute",top:0,left:0}),this.wordSlider=s,this.update()}},{key:"update",value:function(){var e=this;console.log(this.current,this.maxHeight),w(this.wordSlider,{transform:"translateY(-"+this.current*this.maxHeight+"px)"}),this.current=this.current>=this.wordsSelector.length-1?0:this.current+1,setTimeout(function(){return e.update()},this.duration)}}]),t}(),_=document.querySelector(".text-bracket");new A({selector:_});var T=document.querySelectorAll(".lazy-load")||[],M=function(){function t(e){var a=this,r=e.images;n(this,t),this.images=r,console.log(this.images),window.addEventListener("scroll",function(){return a.checkPosition()})}return e(t,[{key:"checkPosition",value:function(){var e=this;this.images.length&&this.images.forEach(function(t){return e.isVisible(t)?e.showImage(t):void 0})}},{key:"isVisible",value:function(e){var t=e.getBoundingClientRect(),a=document.documentElement.clientHeight,n=t.top+a/2>0&&t.top<a,r=t.bottom<a+a/2&&t.bottom>0;return n||r}},{key:"showImage",value:function(e){var t=e.getAttribute("realsrc");e.src=t,this.images=Array.prototype.slice.call(this.images).filter(function(t){return t!==e})}}]),t}(),W=new M({images:T}),q=function(){function t(e){var a=e.selectors;n(this,t),this.selectors=a,this.handle()}return e(t,[{key:"handle",value:function(){var e=this;this.selectors.forEach(function(t){var a=t.dataset,n=a.animate;switch(a.start){case"load":document.addEventListener("DOMContentLoaded",function(){t.classList.add(n)});case"scroll":window.addEventListener("scroll",function(){return e.checkScroll(t,n)}),e.checkScroll(t,n)}})}},{key:"checkScroll",value:function(e,t){e.getBoundingClientRect().top<=document.documentElement.clientHeight&&e.classList.add(t)}}]),t}();document.addEventListener("DOMContentLoaded",function(){new q({selectors:[].concat(a(document.querySelectorAll(".animated")))})});
},{}]},{},[41], null)
//# sourceMappingURL=/main.3080257b.map