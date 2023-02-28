import Liebiao$1 from "./Liebiao.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId, createStaticVNode } from "vue";
import "./Liebiao.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-0eb175ea"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<path d="M7.6 2h7v1.4h-7z" data-v-0eb175ea></path><path d="M7.6 4.8h4.2v1.4H7.6z" opacity=".4" data-v-0eb175ea></path><path d="M7.6 9h7v1.4h-7z" data-v-0eb175ea></path><path d="M7.6 11.8h4.2v1.4H7.6z" opacity=".4" data-v-0eb175ea></path><path d="M2 2h4.2v4.2H2zm0 7h4.2v4.2H2z" data-v-0eb175ea></path>', 5);
const _hoisted_10 = [
  _hoisted_5
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
        _hoisted_3,
        createElementVNode("g", {
          "data-follow-fill": "#3B70FF",
          fill: _ctx._fill
        }, _hoisted_10, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Liebiao = /* @__PURE__ */ _export_sfc(Liebiao$1, [["render", _sfc_render], ["__scopeId", "data-v-0eb175ea"]]);
export {
  Liebiao as default
};
