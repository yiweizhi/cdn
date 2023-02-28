import Xiaoxi$1 from "./Xiaoxi.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Xiaoxi.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-251511b6"), n = n(), popScopeId(), n);
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
const _hoisted_4 = ["fill", "stroke"];
const _hoisted_5 = ["stroke"];
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
          "data-follow-stroke": "#272A31",
          "data-follow-fill": "#272A31",
          d: "M8 2.67c2.39 0 4.33 1.94 4.33 4.33v4.34H3.67V7c0-2.39 1.94-4.33 4.33-4.33Z",
          "stroke-width": "1.333",
          fill: _ctx._fill,
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M8 2.67V1M2 11.34h12m-8.33 2.33h4.66",
          "stroke-width": "1.333",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Xiaoxi = /* @__PURE__ */ _export_sfc(Xiaoxi$1, [["render", _sfc_render], ["__scopeId", "data-v-251511b6"]]);
export {
  Xiaoxi as default
};
