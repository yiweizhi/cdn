"use strict";
const Yuedu_vue_vue_type_script_lang = require("./Yuedu.vue2.js");
const vue = require("vue");
require("./Yuedu.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
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
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#3C4555",
          d: "M7.667 12c3.682 0 6.666-4 6.666-4S11.35 4 7.667 4C3.985 4 1 8 1 8s2.985 4 6.667 4Z",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#3C4555",
          d: "M7.667 9.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Yuedu = /* @__PURE__ */ _pluginVue_exportHelper(Yuedu_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-e3fede6f"]]);
module.exports = Yuedu;
