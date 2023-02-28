import Redu$1 from "./Redu.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Redu.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-6422a54e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M0 0h24v24H0z" }, null, -1));
const _hoisted_4 = ["fill"];
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
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-fill": "#D93026",
          d: "m16.961 8.49-1.497 1.497s0-5.99-4.992-7.987c0 0-.5 5.491-2.995 7.488-2.496 1.996-7.488 7.987 2.496 12.48 0 0-4.992-5.492 1.497-9.485 0 0-.5 1.996 1.997 3.993 2.496 1.997 0 5.491 0 5.491s11.98-2.995 3.494-13.478Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Redu = /* @__PURE__ */ _export_sfc(Redu$1, [["render", _sfc_render], ["__scopeId", "data-v-6422a54e"]]);
export {
  Redu as default
};
