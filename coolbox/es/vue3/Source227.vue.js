import Source227$1 from "./Source227.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Source227.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { "data-name": "图层 2" };
const _hoisted_3 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 103.72 77.01",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          d: "M10 77.01 0 65.67V30.62L30.62 0h73.1l-7.94 10H34.76L10 34.76v42.25z",
          "data-name": "Layer 2",
          "data-follow-fill": "#00b4eb",
          fill: _ctx._fill
        }, null, 8, _hoisted_3)
      ])
    ])
  ], 8, _hoisted_1);
}
const Source227 = /* @__PURE__ */ _export_sfc(Source227$1, [["render", _sfc_render], ["__scopeId", "data-v-a768be5b"]]);
export {
  Source227 as default
};
