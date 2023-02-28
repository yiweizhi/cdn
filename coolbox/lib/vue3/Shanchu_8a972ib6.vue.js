"use strict";
const Shanchu_8a972ib6_vue_vue_type_script_lang = require("./Shanchu_8a972ib6.vue2.js");
const vue = require("vue");
require("./Shanchu_8a972ib6.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-a9c59f49"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M0 0h20v20H0Z",
  "data-name": "路径 16137",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 20 20",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      _hoisted_2,
      vue.createElementVNode("path", {
        d: "M14 5.2h4v1.6h-1.6v10.4a.8.8 0 0 1-.8.8H4.4a.8.8 0 0 1-.8-.8V6.8H2V5.2h4V2.8a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 .8.8Zm.8 1.6H5.2v9.6h9.6ZM7.6 9.2h1.6V14H7.6Zm3.2 0h1.6V14h-1.6ZM7.6 3.6v1.6h4.8V3.6Z",
        "data-name": "路径 16138",
        "data-follow-fill": "#595959",
        fill: _ctx._fill
      }, null, 8, _hoisted_3)
    ])
  ], 8, _hoisted_1);
}
const Shanchu_8a972ib6 = /* @__PURE__ */ _pluginVue_exportHelper(Shanchu_8a972ib6_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-a9c59f49"]]);
module.exports = Shanchu_8a972ib6;
