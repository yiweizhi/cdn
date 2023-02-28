"use strict";
const MagicLineTwo_vue_vue_type_script_lang = require("./MagicLineTwo.vue2.js");
const vue = require("vue");
require("./MagicLineTwo.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-a9239e44"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("g", null, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "#fff",
    opacity: ".01",
    d: "M0 0h24v24H0V0z"
  }),
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "#ff1540",
    d: "M15.2 9.9c-.4-.4-.7-1-.8-1.6l-.4-3-2.7 1.5c-.5.3-1.1.4-1.7.3l-3.1-.6.6 3.1c.1.6 0 1.2-.3 1.7L5.3 14l3.1.4c.6.1 1.1.4 1.6.8l2.1 2.3 1.3-2.8c.3-.5.7-1 1.2-1.2l2.8-1.3c.1-.1-2.2-2.3-2.2-2.3zm0 5.6L13 20.2c-.1.3-.5.4-.8.3-.1 0-.1-.1-.2-.1l-3.5-3.7c-.1-.1-.2-.2-.4-.2L3 15.7c-.3 0-.6-.3-.5-.7 0-.1 0-.1.1-.2L5 10.3c.1-.1.1-.3.1-.4l-.9-5c-.1-.4.1-.7.4-.7h.2l5.1.9c.1 0 .3 0 .4-.1l4.5-2.5c.3-.2.7 0 .8.2 0 .1.1.1.1.2l.7 5.1c0 .1.1.3.2.4l3.7 3.5c.2.2.3.6 0 .8-.1.1-.1.1-.2.1L15.5 15c-.1.3-.2.4-.3.5z"
  }),
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "m15.96 17.357 1.414-1.415 4.242 4.243-1.414 1.414z",
    fill: "#ff1540",
    opacity: ".3"
  })
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
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, _hoisted_3, 8, _hoisted_1);
}
const MagicLineTwo = /* @__PURE__ */ _pluginVue_exportHelper(MagicLineTwo_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-a9239e44"]]);
module.exports = MagicLineTwo;
