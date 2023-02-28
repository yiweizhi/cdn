"use strict";
const Anhei_vue_vue_type_script_lang = require("./Anhei.vue2.js");
const vue = require("vue");
require("./Anhei.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-efc1e88c"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill", "stroke"];
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
          "data-follow-stroke": "#272A31",
          "data-follow-fill": "#272A31",
          d: "M9.216 2.123a3.82 3.82 0 0 0 .966 7.513 3.82 3.82 0 0 0 3.695-2.852 6 6 0 1 1-4.66-4.66Z",
          "stroke-width": "1.333",
          "fill-rule": "nonzero",
          "stroke-linejoin": "round",
          fill: _ctx._fill,
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Anhei = /* @__PURE__ */ _pluginVue_exportHelper(Anhei_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-efc1e88c"]]);
module.exports = Anhei;
