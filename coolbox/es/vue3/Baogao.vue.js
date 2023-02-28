import Baogao$1 from "./Baogao.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Baogao.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
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
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          "fill-rule": "nonzero",
          "fill-opacity": ".01",
          d: "M0 0h32v32H0z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          "stroke-width": "2",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
          d: "M8 6.2c0-.584.464-1.057 1.036-1.057h10.357l5.178 5.286v14.8c0 .583-.463 1.057-1.035 1.057h-14.5A1.047 1.047 0 0 1 8 25.229V6.2Zm3.429 7.229H20M11.429 18H20m-8.571 4H16",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Baogao = /* @__PURE__ */ _export_sfc(Baogao$1, [["render", _sfc_render], ["__scopeId", "data-v-69d323a9"]]);
export {
  Baogao as default
};
