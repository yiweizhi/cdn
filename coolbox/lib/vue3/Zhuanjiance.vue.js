"use strict";
const Zhuanjiance_vue_vue_type_script_lang = require("./Zhuanjiance.vue2.js");
const vue = require("vue");
require("./Zhuanjiance.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-c8f0b9aa"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M0 0h24v24H0z" }, null, -1));
const _hoisted_4 = ["stroke"];
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
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("path", {
          d: "M5.9 21h12.6a.9.9 0 0 0 .9-.9V7.5h-4.5V3h-9a.9.9 0 0 0-.9.9v16.2a.9.9 0 0 0 .9.9Zm9-18 4.5 4.5M9.05 12.45h6.3m-6.3 2.7h6.3m0-2.7L13.1 10.2m-1.8 7.2-2.25-2.25",
          "data-follow-stroke": "#333",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "1.5",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Zhuanjiance = /* @__PURE__ */ _pluginVue_exportHelper(Zhuanjiance_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-c8f0b9aa"]]);
module.exports = Zhuanjiance;
