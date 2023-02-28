"use strict";
const Zhanghaozongshu_vue_vue_type_script_lang = require("./Zhanghaozongshu.vue2.js");
const vue = require("vue");
require("./Zhanghaozongshu.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-437f8d2a"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  opacity: ".01",
  fill: "#FFF",
  d: "M0 0h32v32H0z"
}, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  "fill-rule": "nonzero",
  fill: "#FFF",
  d: "M20.02 13.18H8.91a.915.915 0 0 0 0 1.83h11.11a.915.915 0 1 0 0-1.83ZM15.46 9.6h-6.6c-.48 0-.86.38-.86.86 0 .47.38.85.86.85h6.6c.48 0 .86-.38.86-.85 0-.48-.38-.86-.86-.86ZM24 18.68c0-.74-.51-1.34-1.14-1.34H9.14c-.63 0-1.14.6-1.14 1.34v2.96c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-2.96Z"
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  opacity: ".6",
  "fill-rule": "nonzero",
  fill: "#FFF",
  "fill-opacity": ".6",
  d: "M24.54 9.31H28L22.54 4v3.31a2 2 0 0 0 2 2Z"
}, null, -1));
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
          "data-follow-fill": "#3B70FF",
          d: "M22.56 4.01H8c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V9.31l-5.44-5.3Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4),
        _hoisted_5,
        _hoisted_6
      ])
    ])
  ], 8, _hoisted_1);
}
const Zhanghaozongshu = /* @__PURE__ */ _pluginVue_exportHelper(Zhanghaozongshu_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-437f8d2a"]]);
module.exports = Zhanghaozongshu;
