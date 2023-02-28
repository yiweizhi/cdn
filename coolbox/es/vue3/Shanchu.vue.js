import Shanchu$1 from "./Shanchu.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Shanchu.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-dc02073a"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = ["fill"];
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
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M4.667 2.667V1.333h6.666v1.334h3.334V4h-1.334v10a.667.667 0 0 1-.666.667H3.333A.667.667 0 0 1 2.667 14V4H1.333V2.667h3.334ZM4 4v9.333h8V4H4Zm2 2h1.333v5.333H6V6Zm2.667 0H10v5.333H8.667V6Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shanchu = /* @__PURE__ */ _export_sfc(Shanchu$1, [["render", _sfc_render], ["__scopeId", "data-v-dc02073a"]]);
export {
  Shanchu as default
};
