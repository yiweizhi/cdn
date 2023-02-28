"use strict";
const Dianhua_vue_vue_type_script_lang = require("./Dianhua.vue2.js");
const vue = require("vue");
require("./Dianhua.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
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
        vue.createElementVNode("path", {
          "data-follow-fill": "#3B70FF",
          d: "M0 0h16v16H0z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-stroke": "#3B70FF",
          "stroke-linejoin": "round",
          "stroke-width": "1.333",
          d: "M5.965 3c.242 0 .465.131.583.343l.815 1.469a.667.667 0 0 1 .014.622L6.59 7.005s.228 1.17 1.18 2.123a4.534 4.534 0 0 0 2.12 1.177l1.57-.786a.667.667 0 0 1 .623.014l1.473.819c.211.118.343.34.343.583v1.69c0 .862-.8 1.484-1.616 1.209-1.676-.566-4.278-1.643-5.927-3.292-1.649-1.648-2.726-4.25-3.291-5.926C2.791 3.8 3.413 3 4.274 3h1.69Z",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Dianhua = /* @__PURE__ */ _pluginVue_exportHelper(Dianhua_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-7b87c597"]]);
module.exports = Dianhua;
