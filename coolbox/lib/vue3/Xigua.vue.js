"use strict";
const Xigua_vue_vue_type_script_lang = require("./Xigua.vue2.js");
const vue = require("vue");
require("./Xigua.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-707ef977"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h28v28H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill"];
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
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-fill": "#F62F19",
          d: "M14.182 3a11.18 11.18 0 0 0-11.18 11.18 3.023 3.023 0 0 0 1.805 2.888c1.129.654 3.17.542 4.58 1.805 1.41 1.264 1.501 3.328 1.795 4.332a3.26 3.26 0 0 0 3 2.155c6.175 0 11.18-5.005 11.18-11.18S20.357 3 14.182 3Zm4.423 12.128a10.345 10.345 0 0 1-2.166 1.77c-.9.533-1.867.94-2.877 1.208h-.102a1.85 1.85 0 0 1-2.256-1.421 13.87 13.87 0 0 1-.327-3.047 7.4 7.4 0 0 1 .485-2.809 1.873 1.873 0 0 1 1.974-1.128c.92.143 1.8.478 2.584.982a19.179 19.179 0 0 1 2.425 1.748h.068a1.861 1.861 0 0 1 .192 2.697Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Xigua = /* @__PURE__ */ _pluginVue_exportHelper(Xigua_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-707ef977"]]);
module.exports = Xigua;
