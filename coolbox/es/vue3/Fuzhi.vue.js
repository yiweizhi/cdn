import Fuzhi$1 from "./Fuzhi.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Fuzhi.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
const _hoisted_6 = ["stroke"];
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
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h16v16H0z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M3.95 12.55h9.1V5.4H9.475V1.5H3.95zM9.475 1.5l3.575 3.9",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M2 6.7v7.8h6.825",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M5.9 6.7h1.3M5.9 9.3h3.9",
          "stroke-linecap": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const Fuzhi = /* @__PURE__ */ _export_sfc(Fuzhi$1, [["render", _sfc_render], ["__scopeId", "data-v-7089e107"]]);
export {
  Fuzhi as default
};
