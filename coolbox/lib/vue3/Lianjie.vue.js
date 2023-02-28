"use strict";
const Lianjie_vue_vue_type_script_lang = require("./Lianjie.vue2.js");
const vue = require("vue");
require("./Lianjie.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-ef425bd7"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("defs", null, [
  /* @__PURE__ */ vue.createElementVNode("filter", {
    id: "b5b5e__a",
    "color-interpolation-filters": "auto"
  }, [
    /* @__PURE__ */ vue.createElementVNode("feColorMatrix", {
      values: "0 0 0 0 0.270588 0 0 0 0 0.286275 0 0 0 0 0.317647 0 0 0 1.000000 0",
      in: "SourceGraphic"
    })
  ])
], -1));
const _hoisted_3 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_4 = ["fill"];
const _hoisted_5 = {
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
  filter: "url(#b5b5e__a)"
};
const _hoisted_6 = ["stroke"];
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
      _hoisted_2,
      vue.createElementVNode("g", _hoisted_3, [
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          opacity: ".01",
          "fill-rule": "nonzero",
          "fill-opacity": ".01",
          d: "M0 0h16v16H0z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4),
        vue.createElementVNode("g", _hoisted_5, [
          vue.createElementVNode("path", {
            "data-follow-stroke": "#272A31",
            d: "M8.44 5.404 5.637 2.6c-.817-.817-2.158-.799-2.996.04-.839.838-.857 2.18-.04 2.996L5.034 8.07m5.449-.633 2.434 2.434c.816.816.798 2.157-.04 2.995-.839.839-2.18.857-2.996.04l-2.804-2.802M8.4 8.4c.838-.839.856-2.18.04-2.996M7.078 7.068c-.839.838-.857 2.18-.04 2.995",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_6)
        ])
      ])
    ])
  ], 8, _hoisted_1);
}
const Lianjie = /* @__PURE__ */ _pluginVue_exportHelper(Lianjie_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-ef425bd7"]]);
module.exports = Lianjie;
