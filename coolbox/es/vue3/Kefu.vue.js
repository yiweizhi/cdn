import Kefu$1 from "./Kefu.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Kefu.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-dd81ce00"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF"
}, null, -1));
const _hoisted_4 = ["fill"];
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
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M14 5.333c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334h-.708A5.334 5.334 0 0 1 8 15.333V14a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v4.667H2A1.333 1.333 0 0 1 .667 9.333V6.667c0-.737.597-1.334 1.333-1.334h.708a5.334 5.334 0 0 1 10.584 0H14Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4),
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "m5.173 10.523.707-1.13a4 4 0 0 0 4.24 0l.707 1.13a5.309 5.309 0 0 1-2.827.81c-1 .002-1.98-.279-2.827-.81Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_5)
      ])
    ])
  ], 8, _hoisted_1);
}
const Kefu = /* @__PURE__ */ _export_sfc(Kefu$1, [["render", _sfc_render], ["__scopeId", "data-v-dd81ce00"]]);
export {
  Kefu as default
};
