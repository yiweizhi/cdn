"use strict";
const Peizhicaidan_vue_vue_type_script_lang = require("./Peizhicaidan.vue2.js");
const vue = require("vue");
require("./Peizhicaidan.vue3.js");
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
    viewBox: "0 0 13 13",
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
          d: "M-2-1.5h16v16H-2z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#333",
          d: "M7.193 8.854a.63.63 0 0 1 .627.569l.003.06v2.387a.63.63 0 0 1-1.257.06l-.002-.06-.001-.564H.63a.63.63 0 0 1-.06-1.256l.06-.003 5.933-.001v-.563a.63.63 0 0 1 .63-.63Zm4.177 1.193a.63.63 0 0 1 .06 1.257l-.06.003H9.58a.63.63 0 0 1-.06-1.257l.06-.003h1.79Zm-5.967-5.37a.63.63 0 0 1 .627.569l.003.06v.564h5.934a.63.63 0 0 1 .06 1.257l-.06.003-5.934-.001v.564a.63.63 0 0 1-1.257.061l-.003-.06V5.306a.63.63 0 0 1 .63-.63ZM3.017 5.87a.63.63 0 0 1 .06 1.257l-.06.003H.63a.63.63 0 0 1-.06-1.257l.06-.003h2.387ZM7.193.5a.63.63 0 0 1 .627.57l.003.06v2.387a.63.63 0 0 1-1.257.06l-.002-.06-.001-.564H.63a.63.63 0 0 1-.06-1.257l.06-.003h5.933V1.13a.63.63 0 0 1 .63-.63Zm4.177 1.193a.63.63 0 0 1 .06 1.257l-.06.003H9.58a.63.63 0 0 1-.06-1.257l.06-.003h1.79Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Peizhicaidan = /* @__PURE__ */ _pluginVue_exportHelper(Peizhicaidan_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-354d37ca"]]);
module.exports = Peizhicaidan;
