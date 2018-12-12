'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// http://www.henkuai.com/forum.php?mod=viewthread&tid=39501

var window = {};
var document = {};
var exportName = 'Hammer';

var _Hammer = require('hammerjs')(window, document, exportName);

var Hammer = function () {
  function Hammer(options) {
    _classCallCheck(this, Hammer);

    this.events = {};
    this.element = this.createElement();
    this.hammer = new _Hammer(this.element, options);
    return this;
  }

  _createClass(Hammer, [{
    key: 'createElement',
    value: function createElement() {
      return {
        addEventListener: this.addEventListener.bind(this)
      };
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(event, callback) {
      if (Array.isArray(this.events[event])) {
        this.events[event].push(callback);
      } else {
        this.events[event] = [callback];
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      var type = event && event.type;
      var handles = type && this.events[type];

      if (handles) {
        handles.forEach(function (handle) {
          handle(event);
        });
      }
    }
  }]);

  return Hammer;
}();

Object.keys(_Hammer).forEach(function (key) {
  Hammer[key] = _Hammer[key];
});

exports.default = Hammer;