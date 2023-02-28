import Dingwei$1 from "./Dingwei.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Dingwei.vue3.js";
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
          d: "M2.953 11.586C1.746 11.948 1 12.448 1 13c0 1.105 2.985 2 6.667 2s6.666-.895 6.666-2c0-.552-.746-1.052-1.952-1.414",
          "stroke-width": "1.333",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M7.667 12.333S12 9.501 12 6.227C12 3.893 10.06 2 7.667 2 5.273 2 3.333 3.893 3.333 6.227c0 3.274 4.334 6.106 4.334 6.106Z",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M7.667 8a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const Dingwei = /* @__PURE__ */ _export_sfc(Dingwei$1, [["render", _sfc_render], ["__scopeId", "data-v-0a81b979"]]);
export {
  Dingwei as default
};
