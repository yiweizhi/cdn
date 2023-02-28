"use strict";
const YujingNav_vue_vue_type_script_lang = require("./YujingNav.vue2.js");
const vue = require("vue");
require("./YujingNav.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-8de2a225"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M16.14 9.429a8.873 8.873 0 0 1 8.874 8.873v8.27H7.267v-8.27c0-4.9 3.973-8.873 8.873-8.873Z" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M10.872 18.571c0-2.998 2.358-5.428 5.268-5.428h0m0-9.143v2.857M4.768 8.854l1.944 2.003m20.52-2.003-1.944 2.003M5.048 26.571h22.184" }, null, -1));
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          "fill-rule": "nonzero",
          "fill-opacity": ".01",
          d: "M0 0h32v32H0z",
          "data-follow-fill": "#FFF",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("g", {
          "stroke-width": "2",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
          "data-follow-stroke": "#272A31",
          stroke: _ctx._stroke
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const YujingNav = /* @__PURE__ */ _pluginVue_exportHelper(YujingNav_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-8de2a225"]]);
module.exports = YujingNav;
