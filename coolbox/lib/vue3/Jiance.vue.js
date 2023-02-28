"use strict";
const Jiance_vue_vue_type_script_lang = require("./Jiance.vue2.js");
const vue = require("vue");
require("./Jiance.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-316fb0d6"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("rect", {
  width: "22.857",
  height: "16",
  rx: "3"
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M0 19.714h22.857M6 11.543v1.028m5.157-3.086v3.086m5.157-5.142v5.143M6.145 8.24l3.583-3.583 2.451 2.074.267-.266.266-.267L15.95 2.96" }, null, -1));
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h32v32H0V0Z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("g", {
          "data-follow-stroke": "#272A31",
          transform: "translate(5 6)",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          stroke: _ctx._stroke
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Jiance = /* @__PURE__ */ _pluginVue_exportHelper(Jiance_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-316fb0d6"]]);
module.exports = Jiance;
