"use strict";
const Fenxi_vue_vue_type_script_lang = require("./Fenxi.vue2.js");
const vue = require("vue");
require("./Fenxi.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
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
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M10.425 20.571v6.286m11.149-8.571v8.571M16 16.571v10.286m11.15-12.571v12.571m-22.3-3.429v3.43M20.6 8.571l5.714-1.714-5.018 7.429-3.345-2.857-5.017 5.142-3.903-1.714L4.571 20",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Fenxi = /* @__PURE__ */ _pluginVue_exportHelper(Fenxi_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-582a10d7"]]);
module.exports = Fenxi;
