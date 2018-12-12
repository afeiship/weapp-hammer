// http://www.henkuai.com/forum.php?mod=viewthread&tid=39501

const window = {};
const document = {};
const exportName = 'Hammer';

const _Hammer = require('hammerjs')(window, document, exportName);

class Hammer {
  constructor(options) {
    this.events = {};
    this.element = this.createElement();
    this.hammer = new _Hammer(this.element, options);
    return this;
  }

  createElement() {
    return {
      addEventListener: this.addEventListener.bind(this)
    };
  }

  addEventListener(event, callback) {
    if (Array.isArray(this.events[event])) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }

  trigger(event) {
    let type = event && event.type;
    let handles = type && this.events[type];

    if (handles) {
      handles.forEach((handle) => {
        handle(event);
      });
    }
  }
}

Object.keys(_Hammer).forEach((key) => {
  Hammer[key] = _Hammer[key];
});

export default Hammer;
