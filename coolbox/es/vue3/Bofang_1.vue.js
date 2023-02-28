import Bofang_1$1 from "./Bofang_1.vue2.js";
import { openBlock, createElementBlock, createElementVNode, createStaticVNode, pushScopeId, popScopeId } from "vue";
import "./Bofang_1.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-8d2f30ec"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<defs data-v-8d2f30ec><filter id="b5b55__a" filterUnits="objectBoundingBox" height="218.2%" width="218.2%" y="-59.1%" x="-59.1%" data-v-8d2f30ec><feOffset result="shadowOffsetOuter1" in="SourceAlpha" data-v-8d2f30ec></feOffset><feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="3" data-v-8d2f30ec></feGaussianBlur><feColorMatrix result="shadowMatrixOuter1" in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" data-v-8d2f30ec></feColorMatrix><feMerge data-v-8d2f30ec><feMergeNode in="shadowMatrixOuter1" data-v-8d2f30ec></feMergeNode><feMergeNode in="SourceGraphic" data-v-8d2f30ec></feMergeNode></feMerge></filter></defs>', 1);
const _hoisted_3 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M1 1h40v40H1z" }, null, -1));
const _hoisted_5 = {
  transform: "translate(10 10)",
  filter: "url(#b5b55__a)"
};
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 42 42",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      _hoisted_2,
      createElementVNode("g", _hoisted_3, [
        _hoisted_4,
        createElementVNode("g", _hoisted_5, [
          createElementVNode("circle", {
            "data-follow-stroke": "#272A31",
            r: "11",
            cy: "11",
            cx: "11",
            "stroke-width": "2",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_6),
          createElementVNode("path", {
            "data-follow-fill": "#272A31",
            "fill-rule": "nonzero",
            d: "M7 6.202v9.353c0 .924.952 1.5 1.714 1.04l7.715-4.677c.761-.462.761-1.617 0-2.079L8.714 5.163C7.952 4.7 7 5.278 7 6.202Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_7)
        ])
      ])
    ])
  ], 8, _hoisted_1);
}
const Bofang_1 = /* @__PURE__ */ _export_sfc(Bofang_1$1, [["render", _sfc_render], ["__scopeId", "data-v-8d2f30ec"]]);
export {
  Bofang_1 as default
};
