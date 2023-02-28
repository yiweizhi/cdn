import HomeLine$1 from "./HomeLine.vue2.js";
import { openBlock, createElementBlock, pushScopeId, popScopeId, createElementVNode } from "vue";
import "./HomeLine.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-43ed35c1"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("g", null, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" })
], -1));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, _hoisted_3, 8, _hoisted_1);
}
const HomeLine = /* @__PURE__ */ _export_sfc(HomeLine$1, [["render", _sfc_render], ["__scopeId", "data-v-43ed35c1"]]);
export {
  HomeLine as default
};
