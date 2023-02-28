import Bianzu3$1 from "./Bianzu3.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Bianzu3.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-490c2a41"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h16v16H0z",
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01"
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
          "data-follow-fill": "#000",
          d: "M4.036 10.297H1.62c-.343 0-.621-.299-.621-.667v-4c0-.368.278-.666.62-.666h2.416l3.287-2.888a.293.293 0 0 1 .33-.044.336.336 0 0 1 .177.302v10.593c0 .129-.07.246-.178.301a.293.293 0 0 1-.33-.043l-3.286-2.888Zm8.392 2.756-.879-.944c1.19-1.138 1.871-2.768 1.87-4.479 0-1.8-.753-3.507-2.052-4.645l.881-.947C13.78 3.43 14.662 5.476 14.66 7.63c0 2.149-.86 4.082-2.232 5.423Zm-2.2-2.362-.882-.948c.61-.505.968-1.285.968-2.113 0-.953-.466-1.79-1.168-2.261l.894-.96c.954.754 1.516 1.95 1.515 3.221 0 1.228-.515 2.327-1.326 3.06Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Bianzu3 = /* @__PURE__ */ _export_sfc(Bianzu3$1, [["render", _sfc_render], ["__scopeId", "data-v-490c2a41"]]);
export {
  Bianzu3 as default
};
