import Fenximokuai$1 from "./Fenximokuai.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Fenximokuai.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-a320bd55"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M19-2H-1v20h20z" }, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 18 16",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-fill": "#454951",
          opacity: ".3",
          "fill-rule": "nonzero",
          d: "M.667 6.333v8.334c0 .46.373.833.833.833h10V6.333H.667ZM1.5.5a.833.833 0 0 0-.833.833v3.334h16.666V1.333A.833.833 0 0 0 16.5.5h-15Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-fill": "#454951",
          d: "M13.167 15.5h3.166a1 1 0 0 0 1-1v-4h-4.166v5Zm0-9.167h4.167v3.333h-4.167z",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Fenximokuai = /* @__PURE__ */ _export_sfc(Fenximokuai$1, [["render", _sfc_render], ["__scopeId", "data-v-a320bd55"]]);
export {
  Fenximokuai as default
};
