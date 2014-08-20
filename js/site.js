/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);

/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(window, document) {

  'use strict';

  /* exported features */

  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,

    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },

    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },

    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }

  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }

    var result = object || {},
        key,
        i;

    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};

      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }

    return result;
  }

  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }

  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);

    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.debouncer        = new Debouncer(this.update.bind(this));
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.scroller         = options.scroller;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
  }
  Headroom.prototype = {
    constructor : Headroom,

    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }

      this.elem.classList.add(this.classes.initial);

      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);

      return this;
    },

    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;

      this.initialised = false;
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.initial);
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },

    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);

        this.debouncer.handleEvent();
      }
    },

    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },

    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },

    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },

    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },

    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },

    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },

    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;

      return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );
    },

    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight : function (elm) {
      return Math.max(
        elm.scrollHeight,
        elm.offsetHeight,
        elm.clientHeight
      );
    },

    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getDocumentHeight()
        : this.getElementHeight(this.scroller);
    },

    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getViewportHeight() > this.getScrollerHeight();

      return pastTop || pastBottom;
    },

    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },

    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;

      return scrollingDown && pastOffset && toleranceExceeded;
    },

    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;

      return (scrollingUp && toleranceExceeded) || pastOffset;
    },

    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);

      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }

      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }

      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }

      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 10,
      down : 10
    },
    offset : 50,
    scroller: window,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  window.Headroom = Headroom;

}(window, document));