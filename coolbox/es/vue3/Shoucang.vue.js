import Shoucang$1 from "./Shoucang.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Shoucang.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-924738ef"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = ["fill"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  opacity: ".01",
  "fill-rule": "nonzero",
  "fill-opacity": ".01",
  d: "M0 0h16v16H0z"
}, null, -1));
const _hoisted_4 = ["stroke"];
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
      createElementVNode("g", {
        "fill-rule": "evenodd",
        "data-follow-fill": "#FFF",
        fill: _ctx._fill
      }, [
        _hoisted_3,
        createElementVNode("path", {
          d: "M8 2 6.166 5.94 2 6.576l3.018 3.106L4.296 14 8 11.922 11.704 14l-.716-4.318L14 6.576 9.857 5.94z",
          "stroke-width": "1.333",
          "stroke-linejoin": "round",
          "data-follow-stroke": "#333",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ], 8, _hoisted_2)
    ])
  ], 8, _hoisted_1);
}
const Shoucang = /* @__PURE__ */ _export_sfc(Shoucang$1, [["render", _sfc_render], ["__scopeId", "data-v-924738ef"]]);
export {
  Shoucang as default
};
