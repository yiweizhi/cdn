"use strict";
const Source227_vue_vue_type_script_lang = require("./Source227.vue2.js");
const vue = require("vue");
require("./Source227.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { "data-name": "图层 2" };
const _hoisted_3 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 103.72 77.01",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        vue.createElementVNode("path", {
          d: "M10 77.01 0 65.67V30.62L30.62 0h73.1l-7.94 10H34.76L10 34.76v42.25z",
          "data-name": "Layer 2",
          "data-follow-fill": "#00b4eb",
          fill: _ctx._fill
        }, null, 8, _hoisted_3)
      ])
    ])
  ], 8, _hoisted_1);
}
const Source227 = /* @__PURE__ */ _pluginVue_exportHelper(Source227_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-a768be5b"]]);
module.exports = Source227;
