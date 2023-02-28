import Tianjia$1 from "./Tianjia.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Tianjia.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-d104adc6"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  opacity: ".01",
  fill: "#FFF",
  "fill-opacity": ".01",
  d: "M0 0h16v16H0z"
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
          "data-follow-fill": "#000",
          d: "M2.667 2h10.666c.369 0 .667.298.667.667v10.666a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 13.333V2.667C2 2.298 2.298 2 2.667 2Zm.666 1.333v9.334h9.334V3.333H3.333Zm4 4V4.667h1.334v2.666h2.666v1.334H8.667v2.666H7.333V8.667H4.667V7.333h2.666Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Tianjia = /* @__PURE__ */ _export_sfc(Tianjia$1, [["render", _sfc_render], ["__scopeId", "data-v-d104adc6"]]);
export {
  Tianjia as default
};
