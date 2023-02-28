import Shudi$1 from "./Shudi.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Shudi.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-0aecf865"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  "fill-opacity": ".01",
  d: "M28 0H0v28h28z"
}, null, -1));
const _hoisted_4 = ["fill"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "m25.992 21.635-2.447-6.526c-.215-.602-.86-.988-1.59-.988h-1.888c-1.246 1.675-3.006 3.092-4.165 3.993l-.215.172a2.65 2.65 0 0 1-1.589.558c-.6 0-1.16-.215-1.631-.558l-.215-.172c-1.245-.987-2.92-2.318-4.122-3.95H6.026c-.73 0-1.417.386-1.632.987l-2.318 6.355c-.387 1.03.772 2.061 2.018 1.76l5.195-1.073c.515-.086 1.03 0 1.417.258l4.122 2.62c.43.257.945.343 1.46.257l8.502-1.847c.43-.085.816-.343 1.03-.687.258-.386.3-.772.172-1.159Z" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M14.055 3c3.22 0 5.883 2.576 5.883 5.797 0 3.563-3.521 6.74-5.367 8.458a.784.784 0 0 1-1.03 0c-1.89-1.76-5.368-4.895-5.368-8.458C8.173 5.577 10.835 3 14.055 3Zm0 3.607c-1.202 0-2.19.944-2.19 2.147a2.2 2.2 0 0 0 2.19 2.19c.773 0 1.546-.387 1.933-1.074a2.213 2.213 0 0 0 0-2.19c-.387-.687-1.16-1.073-1.933-1.073Z" }, null, -1));
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 28 28",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("g", {
          "data-follow-fill": "#3B70FF",
          fill: _ctx._fill
        }, _hoisted_7, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shudi = /* @__PURE__ */ _export_sfc(Shudi$1, [["render", _sfc_render], ["__scopeId", "data-v-0aecf865"]]);
export {
  Shudi as default
};
