"use strict";
const Shoucangjiasvg_vue_vue_type_script_lang = require("./Shoucangjiasvg.vue2.js");
const vue = require("vue");
require("./Shoucangjiasvg.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-07e8756e"), n = n(), vue.popScopeId(), n);
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
const _hoisted_4 = {
  "fill-rule": "nonzero",
  "stroke-linejoin": "round",
  "stroke-width": "1.333"
};
const _hoisted_5 = ["fill", "stroke"];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "m7.5 6 .737 1.71L10 7.922l-1.308 1.27.353 1.842L7.5 10.11l-1.545.924.353-1.841L5 7.924l1.763-.215z",
  stroke: "#FFF",
  fill: "#FFF",
  "stroke-linecap": "round"
}, null, -1));
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
        vue.createElementVNode("g", _hoisted_4, [
          vue.createElementVNode("path", {
            "data-follow-stroke": "#272A31",
            "data-follow-fill": "#272A31",
            d: "M2 2.615c0-.34.283-.615.632-.615h3.79L8 3.846h5.368c.35 0 .632.276.632.616v8c0 .34-.283.615-.632.615H2.632A.624.624 0 0 1 2 12.462V2.615Z",
            fill: _ctx._fill,
            stroke: _ctx._stroke
          }, null, 8, _hoisted_5),
          _hoisted_6
        ])
      ])
    ])
  ], 8, _hoisted_1);
}
const Shoucangjiasvg = /* @__PURE__ */ _pluginVue_exportHelper(Shoucangjiasvg_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-07e8756e"]]);
module.exports = Shoucangjiasvg;
