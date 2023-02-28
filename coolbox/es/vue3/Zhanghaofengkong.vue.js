import Zhanghaofengkong$1 from "./Zhanghaofengkong.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Zhanghaofengkong.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-88d43737"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h32v32H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  "fill-rule": "nonzero"
}, null, -1));
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke"];
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["stroke"];
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
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-stroke": "#1D2129",
          d: "M28 22h0v2c0 1.105-.86 2-1.92 2H5.92C4.86 26 4 25.105 4 24V9c0-1.105.86-2 1.92-2h8.64",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-stroke": "#1D2129",
          d: "M7.58 15.079h4.773M7.58 20.052h14.319",
          "stroke-width": "2",
          "stroke-linecap": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_5),
        createElementVNode("ellipse", {
          "data-follow-stroke": "#1D2129",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          cx: "21.899",
          cy: "9.729",
          rx: "3.58",
          ry: "3.729",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_6),
        createElementVNode("path", {
          "data-follow-stroke": "#1D2129",
          d: "M27.866 17.447c-1.166-2.372-3.58-3.989-5.967-3.989-2.386 0-3.575.704-4.803 1.864",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: _ctx._stroke
        }, null, 8, _hoisted_7)
      ])
    ])
  ], 8, _hoisted_1);
}
const Zhanghaofengkong = /* @__PURE__ */ _export_sfc(Zhanghaofengkong$1, [["render", _sfc_render], ["__scopeId", "data-v-88d43737"]]);
export {
  Zhanghaofengkong as default
};
