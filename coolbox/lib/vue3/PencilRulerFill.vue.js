"use strict";
const PencilRulerFill_vue_vue_type_script_lang = require("./PencilRulerFill.vue2.js");
const vue = require("vue");
require("./PencilRulerFill.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-a818a6de"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M24 24H0V0h24",
  opacity: ".01",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
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
  }, [
    vue.createElementVNode("g", null, [
      _hoisted_2,
      vue.createElementVNode("path", {
        d: "M5 18v2h4v-2H5zM3 7l4-5 4 5v15H3V7z",
        "data-follow-fill": "#4231ff",
        fill: _ctx._fill
      }, null, 8, _hoisted_3),
      vue.createElementVNode("path", {
        d: "M21 8h-2v2h2v2h-3v2h3v2h-2v2h2v3c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v3z",
        opacity: ".5",
        "data-follow-fill": "#4231ff",
        fill: _ctx._fill
      }, null, 8, _hoisted_4)
    ])
  ], 8, _hoisted_1);
}
const PencilRulerFill = /* @__PURE__ */ _pluginVue_exportHelper(PencilRulerFill_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-a818a6de"]]);
module.exports = PencilRulerFill;
