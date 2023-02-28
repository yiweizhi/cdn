import Youxiang$1 from "./Youxiang.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Youxiang.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-a504c3cd"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M2 12.5h11.333V4H2v4.25z" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "m2 4 5.667 4.25L13.333 4",
  "stroke-linecap": "round"
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M7.667 4H2v4.25m11.333 0V4H7.667",
  "stroke-linecap": "round"
}, null, -1));
const _hoisted_8 = [
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
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
          "data-follow-fill": "#3B70FF",
          d: "M0 0h16v16H0z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("g", {
          "data-follow-stroke": "#3B70FF",
          "stroke-linejoin": "round",
          "stroke-width": "1.333",
          stroke: _ctx._stroke
        }, _hoisted_8, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Youxiang = /* @__PURE__ */ _export_sfc(Youxiang$1, [["render", _sfc_render], ["__scopeId", "data-v-a504c3cd"]]);
export {
  Youxiang as default
};
