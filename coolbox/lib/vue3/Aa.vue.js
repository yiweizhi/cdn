"use strict";
const Aa_vue_vue_type_script_lang = require("./Aa.vue2.js");
const vue = require("vue");
require("./Aa.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-53e1ae63"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M0 0h16v16H0z" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M0 0h16v16H0z" }, null, -1));
const _hoisted_5 = ["fill"];
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
        _hoisted_4,
        vue.createElementVNode("path", {
          d: "M6.667 7.333v-2L10 8l-3.333 2.667v-2h-6V7.333h6ZM1.639 10h1.416a5.335 5.335 0 0 0 10.278-2A5.333 5.333 0 0 0 3.055 6H1.639a6.667 6.667 0 1 1 0 4Z",
          "data-follow-fill": "#4F8BFF",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Aa = /* @__PURE__ */ _pluginVue_exportHelper(Aa_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-53e1ae63"]]);
module.exports = Aa;
