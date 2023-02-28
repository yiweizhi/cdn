"use strict";
const Tishi_vue_vue_type_script_lang = require("./Tishi.vue2.js");
const vue = require("vue");
require("./Tishi.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-72bbd9bf"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("g", null, [
  /* @__PURE__ */ vue.createElementVNode("g", {
    "fill-rule": "evenodd",
    fill: "none"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      opacity: ".01",
      fill: "#FFF",
      "fill-opacity": ".01",
      d: "M0 0h16v16H0z"
    }),
    /* @__PURE__ */ vue.createElementVNode("path", {
      fill: "#000",
      d: "M9.608 10.651H8.444V5.87a.491.491 0 0 0-.492-.491H6.641a.491.491 0 1 0 0 .983h.82v4.29H6.296a.491.491 0 1 0 0 .984h3.31a.491.491 0 1 0 0-.984ZM7.46 4.025a.492.492 0 1 0 .984 0 .492.492 0 0 0-.984 0Z"
    }),
    /* @__PURE__ */ vue.createElementVNode("path", {
      fill: "#000",
      d: "M7.993 1.014A6.993 6.993 0 0 0 1 8.007 6.993 6.993 0 0 0 7.993 15a6.993 6.993 0 0 0 6.993-6.993 6.993 6.993 0 0 0-6.993-6.993Zm4.25 11.242a5.98 5.98 0 0 1-4.25 1.76 5.975 5.975 0 0 1-4.249-1.759 5.979 5.979 0 0 1-1.288-1.91 5.963 5.963 0 0 1-.473-2.34 5.975 5.975 0 0 1 1.76-4.25 5.978 5.978 0 0 1 1.91-1.287 5.963 5.963 0 0 1 2.34-.473 5.975 5.975 0 0 1 4.25 1.76 5.98 5.98 0 0 1 1.76 4.25 5.975 5.975 0 0 1-1.76 4.249Z"
    })
  ])
], -1));
const _hoisted_3 = [
  _hoisted_2
];
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
  }, _hoisted_3, 8, _hoisted_1);
}
const Tishi = /* @__PURE__ */ _pluginVue_exportHelper(Tishi_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-72bbd9bf"]]);
module.exports = Tishi;
