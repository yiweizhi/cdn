import Xiazai$1 from "./Xiazai.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Xiazai.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 14 13",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M-1-1.5h16v16H-1z",
          "fill-opacity": ".01",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-fill": "#000",
          d: "M7.667 5.167H11l-4 4-4-4h3.333V.5h1.334v4.667Zm-6 6h10.666V6.5h1.334v5.333A.667.667 0 0 1 13 12.5H1a.667.667 0 0 1-.667-.667V6.5h1.334v4.667Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Xiazai = /* @__PURE__ */ _export_sfc(Xiazai$1, [["render", _sfc_render], ["__scopeId", "data-v-c65b95fa"]]);
export {
  Xiazai as default
};
