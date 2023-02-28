import Touxiang$1 from "./Touxiang.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Touxiang.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-4026a67f"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  "fill-opacity": ".01",
  fill: "#FFF",
  opacity: ".01",
  width: "32",
  height: "32",
  rx: "3"
}, null, -1));
const _hoisted_4 = ["fill"];
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
          "data-follow-fill": "#272A31",
          d: "M16 4c3.613 0 6.552 3.004 6.552 6.697 0 3.694-2.94 6.698-6.552 6.698-3.613 0-6.552-3.004-6.552-6.698C9.448 7.004 12.388 4 16 4Zm3 6.5a.5.5 0 0 0-.5.5 2.5 2.5 0 1 1-5 0 .5.5 0 1 0-1 0 3.5 3.5 0 0 0 7 0 .5.5 0 0 0-.5-.5ZM4 27.984c.141-1.62.902-7.358 6.747-10.43A8.364 8.364 0 0 0 16 19.416a8.365 8.365 0 0 0 5.278-1.883c5.87 3.06 6.579 8.759 6.722 10.45-.035.034-23.965.003-24 0Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Touxiang = /* @__PURE__ */ _export_sfc(Touxiang$1, [["render", _sfc_render], ["__scopeId", "data-v-4026a67f"]]);
export {
  Touxiang as default
};
