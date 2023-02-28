import Bianji$1 from "./Bianji.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Bianji.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-b9ef6472"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M13 8.556v3.888a.556.556 0 0 1-.556.556H3.556A.556.556 0 0 1 3 12.444V3.556C3 3.249 3.249 3 3.556 3h3.888",
  "stroke-linecap": "round"
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M6.222 7.756v2.022h2.033L14 4.03 11.97 2z" }, null, -1));
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
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
        createElementVNode("g", {
          "data-follow-stroke": "#272A31",
          "stroke-linejoin": "round",
          "stroke-width": "1.333",
          stroke: _ctx._stroke
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Bianji = /* @__PURE__ */ _export_sfc(Bianji$1, [["render", _sfc_render], ["__scopeId", "data-v-b9ef6472"]]);
export {
  Bianji as default
};
