import Liangse$1 from "./Liangse.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Liangse.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-334142f4"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill", "stroke"];
const _hoisted_5 = ["stroke"];
const _hoisted_6 = ["fill"];
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
        createElementVNode("circle", {
          "data-follow-stroke": "#272A31",
          "data-follow-fill": "#272A31",
          "stroke-width": "1.5",
          "fill-rule": "nonzero",
          cx: "8.37",
          cy: "8.38",
          r: "2.625",
          fill: _ctx._fill,
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-stroke": "#272A31",
          d: "M7.99 2h1v1h-1zm0 12h1v1h-1zm6.75-6v1h-1V8zM2.75 8v1h-1V8zm10.39 4.62-.707.707-.707-.707.707-.707zM4.66 4.14l-.707.707-.707-.707.707-.707zm-.53 9.01-.707-.707.707-.707.707.707zm8.48-8.48-.707-.707.707-.707.707.707z",
          "stroke-width": "1.5",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M7.99 2h1v1h-1zm0 12h1v1h-1zm6.75-6v1h-1V8zM2.75 8v1h-1V8zm10.39 4.62-.707.707-.707-.707.707-.707zM4.66 4.14l-.707.707-.707-.707.707-.707zm-.53 9.01-.707-.707.707-.707.707.707zm8.48-8.48-.707-.707.707-.707.707.707z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const Liangse = /* @__PURE__ */ _export_sfc(Liangse$1, [["render", _sfc_render], ["__scopeId", "data-v-334142f4"]]);
export {
  Liangse as default
};
