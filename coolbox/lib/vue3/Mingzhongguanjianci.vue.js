"use strict";
const Mingzhongguanjianci_vue_vue_type_script_lang = require("./Mingzhongguanjianci.vue2.js");
const vue = require("vue");
require("./Mingzhongguanjianci.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-d18019bc"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = ["stroke"];
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
          d: "M10.667 2H14v3.333m-8.333 5.334L6.396 9m3.937 1.667L9.604 9M6.396 9 8 5.333 9.604 9M6.396 9h3.208M5.333 2H2v3.333M10.667 14H14v-3.333M5.333 14H2v-3.333",
          "data-follow-stroke": "#333",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "1.33",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Mingzhongguanjianci = /* @__PURE__ */ _pluginVue_exportHelper(Mingzhongguanjianci_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-d18019bc"]]);
module.exports = Mingzhongguanjianci;
