"use strict";
const Douyin_vue_vue_type_script_lang = require("./Douyin.vue2.js");
const vue = require("vue");
require("./Douyin.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-ca50d5c0"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h28v28H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 28 28",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-fill": "#333",
          d: "M11.963 11.346c-3.436-.166-5.823 1.059-7.164 3.674-2.01 3.922-.349 10.341 6.359 10.341 6.707 0 6.902-6.481 6.902-7.16v-7.594c1.434.91 2.644 1.456 3.628 1.641.985.186 1.61.268 1.878.247V8.717c-.91-.11-1.698-.319-2.363-.627-.996-.464-2.972-1.749-2.972-3.632V3h-4.152c-.013 9.226-.013 14.293 0 15.2.018 1.362-1.038 3.267-3.18 3.267-2.141 0-3.197-1.903-3.197-3.13 0-.752.258-1.841 1.325-2.648.632-.478 1.51-.67 2.936-.67v-3.673Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Douyin = /* @__PURE__ */ _pluginVue_exportHelper(Douyin_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-ca50d5c0"]]);
module.exports = Douyin;
