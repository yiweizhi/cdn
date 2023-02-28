import Suoxiao$1 from "./Suoxiao.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Suoxiao.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-2cbffb2e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["stroke"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
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
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-stroke": "#333",
          d: "M11.33 2v3.11h3.11M5.11 2v3.11H2m3.11 9.33v-3.11H2m9.33 3.11v-3.11h3.075",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Suoxiao = /* @__PURE__ */ _export_sfc(Suoxiao$1, [["render", _sfc_render], ["__scopeId", "data-v-2cbffb2e"]]);
export {
  Suoxiao as default
};
