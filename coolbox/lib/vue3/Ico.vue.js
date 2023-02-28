"use strict";
const Ico_vue_vue_type_script_lang = require("./Ico.vue2.js");
const vue = require("vue");
require("./Ico.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-8b46abf1"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  opacity: ".01",
  fill: "none",
  d: "M0 0h20v20H0z"
}, null, -1));
const _hoisted_3 = ["stroke"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 20 20",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      _hoisted_2,
      vue.createElementVNode("path", {
        d: "M4 3h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1z",
        fill: "none",
        "stroke-width": "3",
        "stroke-dasharray": "1,1",
        "data-follow-stroke": "#333",
        stroke: _ctx._stroke
      }, null, 8, _hoisted_3)
    ])
  ], 8, _hoisted_1);
}
const Ico = /* @__PURE__ */ _pluginVue_exportHelper(Ico_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-8b46abf1"]]);
module.exports = Ico;
