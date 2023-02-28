"use strict";
const Gengduo_vue_vue_type_script_lang = require("./Gengduo.vue2.js");
const vue = require("vue");
require("./Gengduo.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-f8ed9210"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = ["fill"];
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
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M1 1h6.222v6.222H1z",
          opacity: ".2",
          fill: _ctx._fill
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M1 8.778h6.222V15H1zM8.778 1H15v6.222H8.778zm0 7.778H15V15H8.778z",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Gengduo = /* @__PURE__ */ _pluginVue_exportHelper(Gengduo_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-f8ed9210"]]);
module.exports = Gengduo;
