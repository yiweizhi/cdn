"use strict";
const Bofang_vue_vue_type_script_lang = require("./Bofang.vue2.js");
const vue = require("vue");
require("./Bofang.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-00b51e9c"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M0 0h32v32H0V0Z" }, null, -1));
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["fill"];
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
        vue.createElementVNode("circle", {
          "data-follow-stroke": "#272A31",
          "stroke-width": "2",
          cx: "16",
          cy: "16",
          r: "11",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M12 11.202v9.353c0 .924.952 1.5 1.714 1.04l7.715-4.677c.761-.462.761-1.617 0-2.079l-7.715-4.676C12.952 9.7 12 10.278 12 11.202Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Bofang = /* @__PURE__ */ _pluginVue_exportHelper(Bofang_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-00b51e9c"]]);
module.exports = Bofang;
