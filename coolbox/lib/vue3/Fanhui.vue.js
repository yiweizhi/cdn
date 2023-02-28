"use strict";
const Fanhui_vue_vue_type_script_lang = require("./Fanhui.vue2.js");
const vue = require("vue");
require("./Fanhui.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 13 14",
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
          d: "M-2-1h16v16H-2z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#000",
          d: "m2.552 3.967 1.69 1.69L3.3 6.6 0 3.3 3.3 0l.943.943-1.691 1.69h4.781a5.333 5.333 0 1 1 0 10.667h-6v-1.333h6a4 4 0 0 0 0-8H2.552Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Fanhui = /* @__PURE__ */ _pluginVue_exportHelper(Fanhui_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-0a49eabf"]]);
module.exports = Fanhui;
