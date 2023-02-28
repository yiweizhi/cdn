"use strict";
const Layout_1Fill_vue_vue_type_script_lang = require("./Layout_1Fill.vue2.js");
const vue = require("vue");
require("./Layout_1Fill.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-fb1c579e"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
const _hoisted_5 = ["fill"];
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
        d: "M11 3v18H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7z",
        "data-follow-fill": "#7f7f7f",
        fill: _ctx._fill
      }, null, 8, _hoisted_3),
      vue.createElementVNode("path", {
        d: "M21 13v7c0 .6-.4 1-1 1h-7v-8h8z",
        opacity: ".3",
        "data-follow-fill": "#7f7f7f",
        fill: _ctx._fill
      }, null, 8, _hoisted_4),
      vue.createElementVNode("path", {
        d: "M20 3c.6 0 1 .4 1 1v7h-8V3h7z",
        opacity: ".6",
        "data-follow-fill": "#7f7f7f",
        fill: _ctx._fill
      }, null, 8, _hoisted_5)
    ])
  ], 8, _hoisted_1);
}
const Layout_1Fill = /* @__PURE__ */ _pluginVue_exportHelper(Layout_1Fill_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-fb1c579e"]]);
module.exports = Layout_1Fill;
