"use strict";
const HomeLine_vue_vue_type_script_lang = require("./HomeLine.vue2.js");
const vue = require("vue");
require("./HomeLine.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-43ed35c1"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("g", null, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ vue.createElementVNode("path", { d: "M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" })
], -1));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, _hoisted_3, 8, _hoisted_1);
}
const HomeLine = /* @__PURE__ */ _pluginVue_exportHelper(HomeLine_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-43ed35c1"]]);
module.exports = HomeLine;
