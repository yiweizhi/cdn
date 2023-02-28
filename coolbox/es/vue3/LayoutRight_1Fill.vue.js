import LayoutRight_1Fill$1 from "./LayoutRight_1Fill.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./LayoutRight_1Fill.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-84a143ed"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1));
const _hoisted_3 = ["fill"];
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
        d: "M21 3c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h18zm-2 3h-2v12h2V6z",
        "data-follow-fill": "#fff",
        fill: _ctx._fill
      }, null, 8, _hoisted_3)
    ])
  ], 8, _hoisted_1);
}
const LayoutRight_1Fill = /* @__PURE__ */ _export_sfc(LayoutRight_1Fill$1, [["render", _sfc_render], ["__scopeId", "data-v-84a143ed"]]);
export {
  LayoutRight_1Fill as default
};
