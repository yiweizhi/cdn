import Shijian$1 from "./Shijian.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Shijian.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-196603ac"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("filter", {
    "color-interpolation-filters": "auto",
    id: "b5b90__a"
  }, [
    /* @__PURE__ */ createElementVNode("feColorMatrix", {
      in: "SourceGraphic",
      values: "0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0.010000 0"
    })
  ])
], -1));
const _hoisted_3 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("g", {
  filter: "url(#b5b90__a)",
  opacity: ".01"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M0 0h16v16H0z" })
], -1));
const _hoisted_5 = ["fill"];
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
      _hoisted_2,
      createElementVNode("g", _hoisted_3, [
        _hoisted_4,
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M7.775 14.55a6.775 6.775 0 1 1 0-13.55 6.775 6.775 0 0 1 0 13.55Zm0-1.506a5.27 5.27 0 1 0 0-10.538 5.27 5.27 0 0 0 0 10.538Zm.502-5.054h2.51v1.29H7.021V4.765h1.255V7.99Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shijian = /* @__PURE__ */ _export_sfc(Shijian$1, [["render", _sfc_render], ["__scopeId", "data-v-196603ac"]]);
export {
  Shijian as default
};
