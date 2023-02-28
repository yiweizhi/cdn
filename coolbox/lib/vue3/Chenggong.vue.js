"use strict";
const Chenggong_vue_vue_type_script_lang = require("./Chenggong.vue2.js");
const vue = require("vue");
require("./Chenggong.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-9dbc4ec9"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M16 0H0v16h16V0Z",
  "fill-opacity": ".01",
  fill: "#FFF",
  "fill-rule": "nonzero",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = ["fill"];
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
          "data-follow-fill": "#00B42A",
          d: "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm2.38 4.126a.562.562 0 0 0-.777.066L6.626 8.644 5.282 7.518a.562.562 0 0 0-.77.047l-.37.4-.072.097a.528.528 0 0 0 .12.67l2.195 1.851.101.068c.226.118.514.07.684-.13l3.7-4.293.064-.09a.528.528 0 0 0-.131-.667Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Chenggong = /* @__PURE__ */ _pluginVue_exportHelper(Chenggong_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-9dbc4ec9"]]);
module.exports = Chenggong;
