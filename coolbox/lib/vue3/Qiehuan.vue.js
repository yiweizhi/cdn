"use strict";
const Qiehuan_vue_vue_type_script_lang = require("./Qiehuan.vue2.js");
const vue = require("vue");
require("./Qiehuan.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 16 14",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          "data-follow-fill": "#FFF",
          opacity: ".01",
          "fill-opacity": ".01",
          d: "M0-1h16v16H0z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        vue.createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M1.549 5.648h12.937a.677.677 0 0 0 .42-1.208.68.68 0 0 0-.143-.136L9.93.912a.677.677 0 1 0-.78 1.108l3.24 2.272H1.548a.677.677 0 0 0 0 1.355Zm12.937 2.705H1.55a.677.677 0 0 0-.42 1.207c.04.052.088.098.144.137l4.832 3.392a.677.677 0 1 0 .779-1.109l-3.24-2.273h10.841a.677.677 0 0 0 0-1.354Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Qiehuan = /* @__PURE__ */ _pluginVue_exportHelper(Qiehuan_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-6e246ff1"]]);
module.exports = Qiehuan;
