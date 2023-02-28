"use strict";
const Riqi_vue_vue_type_script_lang = require("./Riqi.vue2.js");
const vue = require("vue");
require("./Riqi.vue3.js");
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
    viewBox: "0 0 14 14",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          opacity: ".01",
          "fill-opacity": ".01",
          d: "M-1-1h16v16H-1z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          "fill-rule": "nonzero",
          d: "M10.5 1.4h2.8a.7.7 0 0 1 .7.7v11.2a.7.7 0 0 1-.7.7H.7a.7.7 0 0 1-.7-.7V2.1a.7.7 0 0 1 .7-.7h2.8V0h1.4v1.4h4.2V0h1.4v1.4ZM12.6 7H1.4v5.6h11.2V7ZM9.1 2.8H4.9v1.4H3.5V2.8H1.4v2.8h11.2V2.8h-2.1v1.4H9.1V2.8ZM2.8 8.4h1.4v1.4H2.8V8.4Zm3.5 0h1.4v1.4H6.3V8.4Zm3.5 0h1.4v1.4H9.8V8.4Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Riqi = /* @__PURE__ */ _pluginVue_exportHelper(Riqi_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-6312f561"]]);
module.exports = Riqi;
