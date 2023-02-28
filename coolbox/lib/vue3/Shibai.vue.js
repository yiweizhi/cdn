"use strict";
const Shibai_vue_vue_type_script_lang = require("./Shibai.vue2.js");
const vue = require("vue");
require("./Shibai.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-bc686d82"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M17 0H0v17h17V0Z",
  "fill-opacity": ".01",
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
    viewBox: "0 0 17 17",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-fill": "#D93026",
          d: "M9 2a7 7 0 1 1 0 14A7 7 0 0 1 9 2Zm2.337 4.127a.433.433 0 0 0-.613 0L8.999 7.85 7.276 6.128a.433.433 0 0 0-.613 0l-.536.536a.433.433 0 0 0 0 .613l1.722 1.722-1.722 1.724a.433.433 0 0 0 0 .613l.536.536c.17.17.444.17.613 0L9 10.15l1.725 1.724c.17.17.444.17.613 0l.536-.536a.433.433 0 0 0 0-.613L10.15 9l1.724-1.724a.433.433 0 0 0 0-.613Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shibai = /* @__PURE__ */ _pluginVue_exportHelper(Shibai_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-bc686d82"]]);
module.exports = Shibai;
