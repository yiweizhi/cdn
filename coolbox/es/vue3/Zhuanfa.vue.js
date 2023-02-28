import Zhuanfa$1 from "./Zhuanfa.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Zhuanfa.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
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
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h16v16H0z",
          "fill-opacity": ".01",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "m8.667 2 6 6-6 5.667V10C4 10 2 15 2 15c0-5.667 1.667-9.333 6.667-9.333V2Z",
          "stroke-width": "1.333",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Zhuanfa = /* @__PURE__ */ _export_sfc(Zhuanfa$1, [["render", _sfc_render], ["__scopeId", "data-v-87fdb48d"]]);
export {
  Zhuanfa as default
};
