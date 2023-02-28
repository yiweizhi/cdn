"use strict";
const Shouqi_vue_vue_type_script_lang = require("./Shouqi.vue2.js");
const vue = require("vue");
require("./Shouqi.vue3.js");
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
          d: "M0 0h16v16H0z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          "fill-rule": "nonzero",
          d: "M14 12.633v1.334H2v-1.334zM4.633 3v6.6l-3.3-3.3zM14 7.967V9.3H8V7.967zM14 3.3v1.333H8V3.3z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shouqi = /* @__PURE__ */ _pluginVue_exportHelper(Shouqi_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-ea15a301"]]);
module.exports = Shouqi;
