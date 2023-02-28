"use strict";
const Rengongyujing_vue_vue_type_script_lang = require("./Rengongyujing.vue2.js");
const vue = require("vue");
require("./Rengongyujing.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-f7fd2493"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h24v24H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M16.391 14.302c-1.909 0-3.461 1.511-3.461 3.382v2.744c0 .242.196.438.437.438h6.049a.438.438 0 0 0 .437-.438v-2.744c0-.9-.366-1.762-1.018-2.396a3.499 3.499 0 0 0-2.216-.979l-.228-.007Zm0 .875a2.63 2.63 0 0 1 1.834.738l.138.146a2.46 2.46 0 0 1 .615 1.623v2.306h-5.173v-2.306c0-1.325 1.061-2.413 2.41-2.502l.177-.005Z" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M16.391 15.425a.547.547 0 1 1 0 1.094 1.25 1.25 0 0 0-1.248 1.254.547.547 0 0 1-1.094 0 2.345 2.345 0 0 1 2.342-2.348Zm0-2.925a.44.44 0 0 1 .43.35l.008.088v.948a.437.437 0 0 1-.866.088l-.009-.088v-.948c0-.242.196-.438.437-.438Zm-4.184 1.738a.438.438 0 0 1 .55-.055l.068.056.663.665a.437.437 0 0 1-.551.674l-.069-.056-.662-.665a.437.437 0 0 1 0-.619Zm7.655.002a.437.437 0 0 1 .676.548l-.056.07-.663.664a.438.438 0 0 1-.675-.55l.055-.068.663-.665Zm.31 5.75a.437.437 0 0 1 .088.866l-.088.01h-7.56a.437.437 0 0 1-.09-.867l.09-.009h7.56ZM11.422 2a5.469 5.469 0 1 1 0 10.938 5.469 5.469 0 0 1 0-10.938Zm0 1.531a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.875Z" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", { d: "M10.955 11.625a.698.698 0 1 1 0 1.397 6.558 6.558 0 0 0-6.554 6.323l-.004.235v2.023h9.28a.7.7 0 0 1 .692.604l.006.095a.699.699 0 0 1-.604.692l-.094.006H3v-3.42a7.955 7.955 0 0 1 7.955-7.955Z" }, null, -1));
const _hoisted_8 = [
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
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
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("g", {
          "data-follow-fill": "#272A31",
          fill: _ctx._fill
        }, _hoisted_8, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Rengongyujing = /* @__PURE__ */ _pluginVue_exportHelper(Rengongyujing_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-f7fd2493"]]);
module.exports = Rengongyujing;
