"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
/**
 * vue-class-component v8.0.0-rc.1
 * (c) 2015-present Evan You
 * @license MIT
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function defineGetter(obj, key, getter) {
  Object.defineProperty(obj, key, {
    get: getter,
    enumerable: false,
    configurable: true
  });
}
function defineProxy(proxy, key, target) {
  Object.defineProperty(proxy, key, {
    get: function get() {
      return target[key].value;
    },
    set: function set(value) {
      target[key].value = value;
    },
    enumerable: true,
    configurable: true
  });
}
function getSuper(Ctor) {
  var superProto = Object.getPrototypeOf(Ctor.prototype);
  if (!superProto) {
    return void 0;
  }
  return superProto.constructor;
}
function getOwn(value, key) {
  return value.hasOwnProperty(key) ? value[key] : void 0;
}
var VueImpl = /* @__PURE__ */ function() {
  function VueImpl2(props, ctx) {
    var _this = this;
    _classCallCheck(this, VueImpl2);
    defineGetter(this, "$props", function() {
      return props;
    });
    defineGetter(this, "$attrs", function() {
      return ctx.attrs;
    });
    defineGetter(this, "$slots", function() {
      return ctx.slots;
    });
    defineGetter(this, "$emit", function() {
      return ctx.emit;
    });
    Object.keys(props).forEach(function(key) {
      Object.defineProperty(_this, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: props[key]
      });
    });
  }
  _createClass(VueImpl2, null, [
    {
      key: "registerHooks",
      value: function registerHooks(keys) {
        var _this$__h;
        (_this$__h = this.__h).push.apply(_this$__h, _toConsumableArray(keys));
      }
    },
    {
      key: "with",
      value: function _with(Props) {
        var propsMeta = new Props();
        var props = {};
        Object.keys(propsMeta).forEach(function(key) {
          var meta = propsMeta[key];
          props[key] = meta !== null && meta !== void 0 ? meta : null;
        });
        var PropsMixin = /* @__PURE__ */ function(_this2) {
          _inherits(PropsMixin2, _this2);
          var _super = _createSuper(PropsMixin2);
          function PropsMixin2() {
            _classCallCheck(this, PropsMixin2);
            return _super.apply(this, arguments);
          }
          return PropsMixin2;
        }(this);
        PropsMixin.__b = {
          props
        };
        return PropsMixin;
      }
    },
    {
      key: "__vccOpts",
      get: function get() {
        if (this === Vue) {
          return {};
        }
        var Ctor = this;
        var cache = getOwn(Ctor, "__c");
        if (cache) {
          return cache;
        }
        var options = _objectSpread2({}, getOwn(Ctor, "__o"));
        Ctor.__c = options;
        var Super = getSuper(Ctor);
        if (Super) {
          options["extends"] = Super.__vccOpts;
        }
        var base = getOwn(Ctor, "__b");
        if (base) {
          options.mixins = options.mixins || [];
          options.mixins.unshift(base);
        }
        options.methods = _objectSpread2({}, options.methods);
        options.computed = _objectSpread2({}, options.computed);
        var proto = Ctor.prototype;
        Object.getOwnPropertyNames(proto).forEach(function(key) {
          if (key === "constructor") {
            return;
          }
          if (Ctor.__h.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
          }
          var descriptor = Object.getOwnPropertyDescriptor(proto, key);
          if (typeof descriptor.value === "function") {
            options.methods[key] = descriptor.value;
            return;
          }
          if (descriptor.get || descriptor.set) {
            options.computed[key] = {
              get: descriptor.get,
              set: descriptor.set
            };
            return;
          }
        });
        options.setup = function(props, ctx) {
          var _promise;
          var data = new Ctor(props, ctx);
          var dataKeys = Object.keys(data);
          var plainData = {};
          var promise = null;
          dataKeys.forEach(function(key) {
            if (data[key] === void 0 || data[key] && data[key].__s) {
              return;
            }
            plainData[key] = vue.ref(data[key]);
            defineProxy(data, key, plainData);
          });
          dataKeys.forEach(function(key) {
            if (data[key] && data[key].__s) {
              var setupState = data[key].__s();
              if (setupState instanceof Promise) {
                if (!promise) {
                  promise = Promise.resolve(plainData);
                }
                promise = promise.then(function() {
                  return setupState.then(function(value) {
                    plainData[key] = vue.proxyRefs(value);
                    return plainData;
                  });
                });
              } else {
                plainData[key] = vue.proxyRefs(setupState);
              }
            }
          });
          return (_promise = promise) !== null && _promise !== void 0 ? _promise : plainData;
        };
        var decorators = getOwn(Ctor, "__d");
        if (decorators) {
          decorators.forEach(function(fn) {
            return fn(options);
          });
        }
        var injections = [
          "render",
          "ssrRender",
          "__file",
          "__cssModules",
          "__scopeId",
          "__hmrId"
        ];
        injections.forEach(function(key) {
          if (Ctor[key]) {
            options[key] = Ctor[key];
          }
        });
        return options;
      }
    }
  ]);
  return VueImpl2;
}();
VueImpl.__h = [
  "data",
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUnmount",
  "unmounted",
  "beforeUpdate",
  "updated",
  "activated",
  "deactivated",
  "render",
  "errorCaptured",
  "serverPrefetch"
];
var Vue = VueImpl;
function prop(options) {
  return options;
}
exports.Vue = Vue;
exports.prop = prop;
