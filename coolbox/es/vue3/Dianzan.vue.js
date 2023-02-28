import Dianzan$1 from "./Dianzan.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Dianzan.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-4fa10621"), n = n(), popScopeId(), n);
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
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
          "stroke-width": "1.333",
          d: "m11.97 14.181 1.79-6.333A.667.667 0 0 0 13.12 7H9.292a.365.365 0 0 1-.356-.447l.167-.721a6.56 6.56 0 0 0 .145-2.02l-.03-.368A1.673 1.673 0 0 0 8.733 2.4a1.365 1.365 0 0 0-.965-.4h-.08a.603.603 0 0 0-.527.31l-.886 1.595A4.32 4.32 0 0 1 4.567 5.6l-2.22 1.21A.667.667 0 0 0 2 7.397V14c0 .368.298.667.667.667h8.662c.298 0 .56-.199.641-.486Z",
          "data-follow-stroke": "#272A31",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4)
      ], 8, _hoisted_2)
    ])
  ], 8, _hoisted_1);
}
const Dianzan = /* @__PURE__ */ _export_sfc(Dianzan$1, [["render", _sfc_render], ["__scopeId", "data-v-4fa10621"]]);
export {
  Dianzan as default
};
