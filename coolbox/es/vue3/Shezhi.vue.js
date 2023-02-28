import Shezhi$1 from "./Shezhi.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Shezhi.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-e5d7be72"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M16 0H0v16h16z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill"];
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
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M9.186 1.268a.667.667 0 0 1 .771-.34 7.285 7.285 0 0 1 3.038 1.705.667.667 0 0 1 .141.785c-.09.182-.14.38-.14.582a1.34 1.34 0 0 0 1.334 1.333h.03c.29 0 .548.188.635.465a7.256 7.256 0 0 1 .188 3.679.667.667 0 0 1-.653.53c-.048 0-.09-.003-.145-.007l-.047-.003-.136.006a1.34 1.34 0 0 0-1.205 1.327c0 .316.113.62.316.865.216.26.203.64-.03.884a7.263 7.263 0 0 1-3.183 1.95.667.667 0 0 1-.825-.435l-.046-.124a1.34 1.34 0 0 0-2.504.124l-.037.09a.667.667 0 0 1-.788.345 7.263 7.263 0 0 1-3.183-1.95.667.667 0 0 1-.03-.884c.203-.246.316-.549.316-.865A1.34 1.34 0 0 0 1.67 9.997l-.2.01a.667.667 0 0 1-.653-.53 7.213 7.213 0 0 1 .188-3.679.667.667 0 0 1 .635-.465l.158-.006A1.34 1.34 0 0 0 3.003 4a1.3 1.3 0 0 0-.14-.582.667.667 0 0 1 .142-.785A7.285 7.285 0 0 1 6.043.927a.667.667 0 0 1 .771.341c.228.449.681.735 1.186.735a1.33 1.33 0 0 0 1.186-.735ZM8 5.003A2.993 2.993 0 0 0 5.003 8 2.993 2.993 0 0 0 8 10.997 2.993 2.993 0 0 0 10.997 8 2.993 2.993 0 0 0 8 5.003Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shezhi = /* @__PURE__ */ _export_sfc(Shezhi$1, [["render", _sfc_render], ["__scopeId", "data-v-e5d7be72"]]);
export {
  Shezhi as default
};
