"use strict";
const Home_vue_vue_type_script_lang = require("./Home.vue2.js");
const vue = require("vue");
require("./Home.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-dfb879f6"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h32v32H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  "fill-rule": "nonzero"
}, null, -1));
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
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
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M25 27V13.8L16 5l-9 8.8V27h5.4v-6.6h7.2V27z",
          "stroke-width": "2",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "m29 17-3.9-3.6L16 5l-9.1 8.4L3 17m11-1.5h4",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Home = /* @__PURE__ */ _pluginVue_exportHelper(Home_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-dfb879f6"]]);
module.exports = Home;
