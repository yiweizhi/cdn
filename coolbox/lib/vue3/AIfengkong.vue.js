"use strict";
const AIfengkong_vue_vue_type_script_lang = require("./AIfengkong.vue2.js");
const vue = require("vue");
require("./AIfengkong.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-5cebbb0a"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("g", null, [
  /* @__PURE__ */ vue.createElementVNode("g", { fill: "none" }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      opacity: ".01",
      fill: "#202425",
      d: "M0 0h28v28H0z"
    }),
    /* @__PURE__ */ vue.createElementVNode("path", {
      fill: "#3B70FF",
      d: "M23.8 4.764c-.026 0-2.443-.053-4.942-1.066-2.563-1.038-4.214-2.232-4.228-2.247L13.977.98l-.647.471c-.014.012-1.667 1.206-4.228 2.247-2.496 1.013-4.916 1.066-4.94 1.066a1.1 1.1 0 0 0-1.082 1.1v9.902c0 5.516 7.09 11.348 10.9 11.348 3.813 0 10.903-5.832 10.903-11.348.002.004.001-3.298-.002-9.905 0-.6-.481-1.088-1.08-1.097Z"
    }),
    /* @__PURE__ */ vue.createElementVNode("path", {
      fill: "#FFF",
      d: "m8.4 18.594 1.051-2.415h3.764l.313 2.415h2.697L15.034 9.72H8.856l.454.44-3.465 8.435h2.556Zm4.674-3.92h-3.011l1.505-3.45h1.05l.456 3.45Zm7.463 3.92 1.365-8.875h-3.623l.455.596-1.05 8.28h2.853Z"
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
    viewBox: "0 0 28 28",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, _hoisted_3, 8, _hoisted_1);
}
const AIfengkong = /* @__PURE__ */ _pluginVue_exportHelper(AIfengkong_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-5cebbb0a"]]);
module.exports = AIfengkong;
