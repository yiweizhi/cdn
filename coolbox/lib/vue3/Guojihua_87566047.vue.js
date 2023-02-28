"use strict";
const Guojihua_87566047_vue_vue_type_script_lang = require("./Guojihua_87566047.vue2.js");
const vue = require("vue");
require("./Guojihua_87566047.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-1db486a1"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "m14.33 14.66-.79-2m-4.54 2 .79-2m3.75 0-.27-.66-1.39-3.34h-.43L10.06 12l-.27.66m3.75 0H9.79M6 2l.33 1.66M2 4h8.66M4 4s.63 2.61 2.2 4.05c1.57 1.45 4.13 2.61 4.13 2.61" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M8.66 4s-.63 2.61-2.2 4.05c-1.57 1.45-4.13 2.61-4.13 2.61" }, null, -1));
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
    viewBox: "0 0 16 16",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("g", {
          "data-follow-stroke": "#272A31",
          "stroke-width": "1.333",
          stroke: _ctx._stroke
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Guojihua_87566047 = /* @__PURE__ */ _pluginVue_exportHelper(Guojihua_87566047_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-1db486a1"]]);
module.exports = Guojihua_87566047;
