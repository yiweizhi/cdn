"use strict";
const Xitong_vue_vue_type_script_lang = require("./Xitong.vue2.js");
const vue = require("vue");
require("./Xitong.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-abd7add1"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h16v16H0z",
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
          d: "M8.947 11.474v1.263h2.527V14H5.158v-1.263h2.526v-1.263H2.627A.63.63 0 0 1 2 10.838V2.636C2 2.285 2.287 2 2.627 2h11.378a.63.63 0 0 1 .627.636v8.202a.636.636 0 0 1-.627.636H8.947Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Xitong = /* @__PURE__ */ _pluginVue_exportHelper(Xitong_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-abd7add1"]]);
module.exports = Xitong;
