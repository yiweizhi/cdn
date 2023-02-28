"use strict";
const Zhankai_vue_vue_type_script_lang = require("./Zhankai.vue2.js");
const vue = require("vue");
require("./Zhankai.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
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
          "fill-opacity": ".01",
          d: "M16 0H0v16h16z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          "fill-rule": "nonzero",
          d: "M2 12.633v1.334h12v-1.334zM11.367 3v6.6l3.3-3.3zM2 7.967V9.3h6V7.967zM2 3.3v1.333h6V3.3z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Zhankai = /* @__PURE__ */ _pluginVue_exportHelper(Zhankai_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-6b6dbbb4"]]);
module.exports = Zhankai;
