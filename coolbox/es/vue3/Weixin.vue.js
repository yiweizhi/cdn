import Weixin$1 from "./Weixin.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Weixin.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-623388a5"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  opacity: ".01",
  fill: "#FFF",
  d: "M0 0h16v16H0z"
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
          "data-follow-fill": "#07D167",
          d: "M12.183 9.632c.31 0 .564-.246.572-.556a.562.562 0 0 0-.572-.556.562.562 0 0 0-.571.556c0 .31.255.556.571.556Zm-2.815 0c.31 0 .563-.247.571-.556a.562.562 0 0 0-.571-.556.561.561 0 0 0-.572.556c0 .31.254.556.572.556Zm4.179 3.12a.213.213 0 0 0-.11.23c0 .03 0 .06.016.09.062.259.187.67.187.685 0 .045.016.076.016.107 0 .036-.015.07-.041.096a.142.142 0 0 1-.1.04c-.031 0-.047-.015-.078-.03l-.922-.517a.52.52 0 0 0-.219-.061c-.046 0-.093 0-.125.015-.437.122-.89.182-1.375.182-2.329 0-4.204-1.52-4.204-3.408 0-1.887 1.875-3.408 4.204-3.408C13.125 6.773 15 8.294 15 10.18c0 1.02-.563 1.948-1.453 2.572Zm-2.573-6.595a5.955 5.955 0 0 0-.178-.003c-2.657 0-4.84 1.77-4.84 4.028 0 .343.05.675.144.99h-.056a6.504 6.504 0 0 1-1.645-.228c-.047-.015-.094-.015-.14-.015a.54.54 0 0 0-.267.076l-1.112.622a.222.222 0 0 1-.094.031.171.171 0 0 1-.172-.167c0-.046.015-.076.031-.122.015-.015.157-.516.235-.82 0-.03.015-.076.015-.106a.341.341 0 0 0-.14-.274C1.672 9.424 1 8.316 1 7.085 1 4.823 3.272 3 6.06 3c2.395 0 4.41 1.343 4.914 3.156v.001Zm-3.28.259a.649.649 0 0 0 .653-.635.64.64 0 0 0-.653-.636.64.64 0 0 0-.653.636.64.64 0 0 0 .653.635Zm-3.347 0A.65.65 0 0 0 5 5.78a.64.64 0 0 0-.653-.636.64.64 0 0 0-.653.636.64.64 0 0 0 .653.635v.001Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Weixin = /* @__PURE__ */ _export_sfc(Weixin$1, [["render", _sfc_render], ["__scopeId", "data-v-623388a5"]]);
export {
  Weixin as default
};
