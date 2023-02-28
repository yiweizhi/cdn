"use strict";
const Sousuo_vue_vue_type_script_lang = require("./Sousuo.vue2.js");
const vue = require("vue");
require("./Sousuo.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-fec0a489"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h32v32H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  "fill-rule": "nonzero"
}, null, -1));
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
const _hoisted_6 = ["fill"];
const _hoisted_7 = ["fill"];
const _hoisted_8 = ["stroke"];
const _hoisted_9 = ["stroke"];
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
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M16.571 25.143H6.286a1.714 1.714 0 0 1-1.715-1.714V8.57c0-.946.768-1.714 1.715-1.714h19.428c.947 0 1.715.768 1.715 1.714v7.967",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M4.571 8.571c0-.946.768-1.714 1.715-1.714h19.428c.947 0 1.715.768 1.715 1.714v5.143H4.57V8.571h.001Z",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        vue.createElementVNode("circle", {
          "data-follow-fill": "#272A31",
          "fill-rule": "nonzero",
          transform: "rotate(-90 8.572 10.286)",
          cx: "8.572",
          cy: "10.286",
          r: "1.143",
          fill: _ctx._fill
        }, null, 8, _hoisted_6),
        vue.createElementVNode("circle", {
          "data-follow-fill": "#272A31",
          "fill-rule": "nonzero",
          transform: "rotate(-90 12 10.285)",
          cx: "12",
          cy: "10.285",
          r: "1.143",
          fill: _ctx._fill
        }, null, 8, _hoisted_7),
        vue.createElementVNode("circle", {
          "data-follow-stroke": "#272A31",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          cx: "21.715",
          cy: "21.143",
          r: "3.429",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_8),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "m24.572 23.428 2.857 2.286",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_9)
      ])
    ])
  ], 8, _hoisted_1);
}
const Sousuo = /* @__PURE__ */ _pluginVue_exportHelper(Sousuo_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-fec0a489"]]);
module.exports = Sousuo;
