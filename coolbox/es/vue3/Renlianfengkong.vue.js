import Renlianfengkong$1 from "./Renlianfengkong.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Renlianfengkong.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-d3d9ce6e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M21.21 5h4.632C26.482 5 27 5.518 27 6.158v4.631m0 10.422v4.631c0 .64-.518 1.158-1.158 1.158h-4.631m-10.422 0H6.158C5.518 27 5 26.482 5 25.842v-4.631m0-10.422V6.158C5 5.518 5.518 5 6.158 5h4.631",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M16 24.105c3.837 0 6.947-3.628 6.947-8.105 0-4.476-3.11-8.105-6.947-8.105S9.053 11.524 9.053 16c0 4.477 3.11 8.105 6.947 8.105Z",
  "stroke-width": "2"
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M5.579 16h20.842",
  "stroke-linecap": "round"
}, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M13.724 19.535c.734.543 1.493.814 2.276.814.783 0 1.562-.271 2.338-.814",
  "stroke-width": "2",
  "stroke-linecap": "round"
}, null, -1));
const _hoisted_9 = [
  _hoisted_5,
  _hoisted_6,
  _hoisted_7,
  _hoisted_8
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M0 0h32v32H0z",
          "fill-opacity": ".01",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("g", {
          "data-follow-stroke": "#1D2129",
          stroke: _ctx._stroke
        }, _hoisted_9, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Renlianfengkong = /* @__PURE__ */ _export_sfc(Renlianfengkong$1, [["render", _sfc_render], ["__scopeId", "data-v-d3d9ce6e"]]);
export {
  Renlianfengkong as default
};
