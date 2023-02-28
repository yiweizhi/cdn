"use strict";
const Shuaxin_vue_vue_type_script_lang = require("./Shuaxin.vue2.js");
const vue = require("vue");
require("./Shuaxin.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-94c896ce"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
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
          "data-follow-fill": "#272A31",
          d: "M13.982 6.714v-3l-.979.979A5.996 5.996 0 0 0 8 2a6 6 0 1 0 5.56 8.257.514.514 0 1 0-.952-.387A4.973 4.973 0 0 1 3.028 8a4.972 4.972 0 0 1 9.23-2.563l-1.276 1.277h3Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shuaxin = /* @__PURE__ */ _pluginVue_exportHelper(Shuaxin_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-94c896ce"]]);
module.exports = Shuaxin;
