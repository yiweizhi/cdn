import SousuoBtn$1 from "./SousuoBtn.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./SousuoBtn.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-e9588675"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M-1-1h16v16H-1z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
}, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M.333.333h13.54v13.54H.333z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_5 = ["fill"];
const _hoisted_6 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 14 14",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        _hoisted_4,
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M6.133 10.18a4.049 4.049 0 0 0 4.048-4.047 4.053 4.053 0 1 0-4.048 4.048Zm0 1.741A5.794 5.794 0 1 0 6.123.333a5.794 5.794 0 0 0 .01 11.588Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_5),
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "m10.757 9.532 2.946 2.935a.584.584 0 0 1 0 .824l-.412.412a.584.584 0 0 1-.824 0l-2.935-2.935 1.225-1.236Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_6)
      ])
    ])
  ], 8, _hoisted_1);
}
const SousuoBtn = /* @__PURE__ */ _export_sfc(SousuoBtn$1, [["render", _sfc_render], ["__scopeId", "data-v-e9588675"]]);
export {
  SousuoBtn as default
};
