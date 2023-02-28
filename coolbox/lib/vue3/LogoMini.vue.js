"use strict";
const LogoMini_vue_vue_type_script_lang = require("./LogoMini.vue2.js");
const vue = require("vue");
require("./LogoMini.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-17e45b3d"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ vue.createStaticVNode('<defs data-v-17e45b3d><linearGradient x1=".007%" y1="50.048%" x2="99.993%" y2="50.048%" id="b5b38__a" data-v-17e45b3d><stop stop-color="#0025FC" offset="0%" data-v-17e45b3d></stop><stop stop-color="#002DFC" offset="8.222%" data-v-17e45b3d></stop><stop stop-color="#004BFC" offset="45.74%" data-v-17e45b3d></stop><stop stop-color="#005EFC" offset="77.66%" data-v-17e45b3d></stop><stop stop-color="#0065FC" offset="100%" data-v-17e45b3d></stop></linearGradient></defs>', 1);
const _hoisted_3 = { fill: "none" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M23.57 7.591 27.434.928a.61.61 0 0 0-.53-.91L.607 0a.612.612 0 0 0-.53.909l13.157 22.774a.604.604 0 0 0 1.042 0l3.862-6.702a1.253 1.253 0 0 0 0-1.211l-3.995-6.93a.454.454 0 0 1 .398-.68h7.989c.435.037.833-.19 1.04-.569Z",
  fill: "url(#b5b38__a)"
}, null, -1));
const _hoisted_5 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 33 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      _hoisted_2,
      vue.createElementVNode("g", _hoisted_3, [
        _hoisted_4,
        vue.createElementVNode("path", {
          "data-follow-fill": "#00E9E9",
          d: "M31.673 8.216h-7.742a1.18 1.18 0 0 0-1.042.606l-4.05 6.967a1.253 1.253 0 0 0 0 1.211l3.861 6.702a.604.604 0 0 0 1.041 0l8.444-14.577c.227-.417-.057-.909-.512-.909Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const LogoMini = /* @__PURE__ */ _pluginVue_exportHelper(LogoMini_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-17e45b3d"]]);
module.exports = LogoMini;
