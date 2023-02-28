"use strict";
const LayoutRight_2Fill_vue_vue_type_script_lang = require("./LayoutRight_2Fill.vue2.js");
const vue = require("vue");
require("./LayoutRight_2Fill.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-5e44f906"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      _hoisted_2,
      vue.createElementVNode("path", {
        d: "M21 3c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h18zm-2 3h-2v12h2V6z",
        "data-follow-fill": "#00bf32",
        fill: _ctx._fill
      }, null, 8, _hoisted_3)
    ])
  ], 8, _hoisted_1);
}
const LayoutRight_2Fill = /* @__PURE__ */ _pluginVue_exportHelper(LayoutRight_2Fill_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-5e44f906"]]);
module.exports = LayoutRight_2Fill;
