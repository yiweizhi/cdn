"use strict";
const Fuzhi_vue_vue_type_script_lang = require("./Fuzhi.vue2.js");
const vue = require("vue");
require("./Fuzhi.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
const _hoisted_6 = ["stroke"];
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
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h16v16H0z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M3.95 12.55h9.1V5.4H9.475V1.5H3.95zM9.475 1.5l3.575 3.9",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M2 6.7v7.8h6.825",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M5.9 6.7h1.3M5.9 9.3h3.9",
          "stroke-linecap": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const Fuzhi = /* @__PURE__ */ _pluginVue_exportHelper(Fuzhi_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-7089e107"]]);
module.exports = Fuzhi;
