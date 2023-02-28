"use strict";
const Chuangjian_vue_vue_type_script_lang = require("./Chuangjian.vue2.js");
const vue = require("vue");
require("./Chuangjian.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-5ba38936"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
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
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-fill": "#000",
          d: "M10 2.667H3.333v10.666h9.334v-8H10V2.667Zm-8-.672c0-.366.298-.662.666-.662h8L14 4.667v9.328a.667.667 0 0 1-.662.672H2.662A.667.667 0 0 1 2 14.005V1.995Zm5.333 5.338v-2h1.334v2h2v1.334h-2v2H7.333v-2h-2V7.333h2Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Chuangjian = /* @__PURE__ */ _pluginVue_exportHelper(Chuangjian_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-5ba38936"]]);
module.exports = Chuangjian;
