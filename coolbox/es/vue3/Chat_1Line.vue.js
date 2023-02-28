import Chat_1Line$1 from "./Chat_1Line.vue2.js";
import { openBlock, createElementBlock, pushScopeId, popScopeId, createElementVNode } from "vue";
import "./Chat_1Line.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-7df8356b"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("g", null, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z" })
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
const Chat_1Line = /* @__PURE__ */ _export_sfc(Chat_1Line$1, [["render", _sfc_render], ["__scopeId", "data-v-7df8356b"]]);
export {
  Chat_1Line as default
};
