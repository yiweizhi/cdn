import Guojihua$1 from "./Guojihua.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Guojihua.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-1158c65a"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "m14.33 14.66-.79-2m-4.54 2 .79-2m3.75 0-.27-.66-1.39-3.34h-.43L10.06 12l-.27.66m3.75 0H9.79M6 2l.33 1.66M2 4h8.66M4 4s.63 2.61 2.2 4.05c1.57 1.45 4.13 2.61 4.13 2.61" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M8.66 4s-.63 2.61-2.2 4.05c-1.57 1.45-4.13 2.61-4.13 2.61" }, null, -1));
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
          "fill-opacity": ".01",
          d: "M0 0h16v16H0z",
          "data-follow-fill": "#FFF",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("g", {
          "stroke-width": "1.333",
          "data-follow-stroke": "#272A31",
          stroke: _ctx._stroke
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Guojihua = /* @__PURE__ */ _export_sfc(Guojihua$1, [["render", _sfc_render], ["__scopeId", "data-v-1158c65a"]]);
export {
  Guojihua as default
};
