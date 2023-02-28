"use strict";
const Bianzu22_vue_vue_type_script_lang = require("./Bianzu22.vue2.js");
const vue = require("vue");
require("./Bianzu22.vue3.js");
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
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h32v32H0z",
          "fill-opacity": ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#333",
          d: "M28.86 7.841A1.841 1.841 0 0 0 27.019 6H6.149a1.841 1.841 0 0 0-1.842 1.841v5.525H28.86V7.84v.001Z",
          "stroke-width": "2",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#333",
          d: "m4.376 25.047 7.474-7.55 4.038 3.867 4.937-4.315 2.75 2.681",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#333",
          d: "M28.86 12.138v11.663a1.841 1.841 0 0 1-1.841 1.841H9.218M4.307 12.138v5.525",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const Bianzu22 = /* @__PURE__ */ _pluginVue_exportHelper(Bianzu22_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-6543ead2"]]);
module.exports = Bianzu22;
