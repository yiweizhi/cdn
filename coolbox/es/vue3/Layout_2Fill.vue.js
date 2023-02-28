import Layout_2Fill$1 from "./Layout_2Fill.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Layout_2Fill.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-d8cdc788"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
const _hoisted_5 = ["fill"];
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
  }, [
    createElementVNode("g", null, [
      _hoisted_2,
      createElementVNode("path", {
        d: "M11 3v18H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7z",
        "data-follow-fill": "#42009b",
        fill: _ctx._fill
      }, null, 8, _hoisted_3),
      createElementVNode("path", {
        d: "M21 13v7c0 .6-.4 1-1 1h-7v-8h8z",
        opacity: ".3",
        "data-follow-fill": "#42009b",
        fill: _ctx._fill
      }, null, 8, _hoisted_4),
      createElementVNode("path", {
        d: "M20 3c.6 0 1 .4 1 1v7h-8V3h7z",
        opacity: ".6",
        "data-follow-fill": "#42009b",
        fill: _ctx._fill
      }, null, 8, _hoisted_5)
    ])
  ], 8, _hoisted_1);
}
const Layout_2Fill = /* @__PURE__ */ _export_sfc(Layout_2Fill$1, [["render", _sfc_render], ["__scopeId", "data-v-d8cdc788"]]);
export {
  Layout_2Fill as default
};
