(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["foo"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.foo);
    global.input = mod.exports;
  }
})(typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : this, function (foo) {
  "use strict";

  foo = babelHelpers.interopRequireWildcard(foo);
  foo;
});
