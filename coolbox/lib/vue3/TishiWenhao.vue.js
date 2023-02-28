"use strict";
const TishiWenhao_vue_vue_type_script_lang = require("./TishiWenhao.vue2.js");
const vue = require("vue");
require("./TishiWenhao.vue3.js");
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
          d: "M7 0C3.138 0 0 3.138 0 7c0 3.863 3.138 7 7 7 3.863 0 7-3.137 7-7 0-3.862-3.137-7-7-7Zm.5 11h-1v-1h1v1Zm.175-3.175-.087.075c-.05.037-.088.125-.088.2v.912h-1V8.1c0-.387.175-.75.463-.987l.087-.076c.875-.7 1.3-1.062 1.3-1.687C8.35 4.6 7.75 4 7 4c-.775 0-1.35.575-1.35 1.35h-1A2.332 2.332 0 0 1 7 3c1.3 0 2.35 1.05 2.35 2.35 0 1.138-.775 1.763-1.675 2.475Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const TishiWenhao = /* @__PURE__ */ _pluginVue_exportHelper(TishiWenhao_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-1caf4d61"]]);
module.exports = TishiWenhao;
