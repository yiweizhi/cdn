import Kuaishou$1 from "./Kuaishou.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Kuaishou.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-6e4bf532"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h28v28H0z",
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
    viewBox: "0 0 28 28",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("path", {
          "data-follow-fill": "#FF7D00",
          d: "M19.678 14.554c2.117 0 3.831 1.729 3.831 3.86V21.5c0 2.13-1.716 3.859-3.83 3.859h-5.843c-1.848 0-3.39-1.316-3.753-3.07l-2.681 1.559c-1.07.622-2.45.276-3.087-.773A2.186 2.186 0 0 1 4 21.95v-3.836c0-1.218 1.008-2.207 2.253-2.207.405 0 .8.107 1.149.31l2.655 1.544c.308-1.818 1.881-3.203 3.776-3.203h5.845v-.003Zm0 2.124h-5.842a1.73 1.73 0 0 0-1.724 1.736V21.5a1.73 1.73 0 0 0 1.724 1.735h5.842a1.73 1.73 0 0 0 1.724-1.735v-3.087c0-.959-.77-1.736-1.724-1.736ZM6.253 17.73a.387.387 0 0 0-.391.384v3.838c0 .07.019.136.055.196.11.183.35.243.536.133l3.3-1.919a.412.412 0 0 0 .137-.133.383.383 0 0 0-.128-.522l-.008-.005-3.299-1.92a.427.427 0 0 0-.202-.052ZM11.28 3a5.325 5.325 0 0 1 4.751 2.915 4.504 4.504 0 0 1 7.63 3.24 4.502 4.502 0 0 1-8.233 2.517A5.329 5.329 0 1 1 11.28 3Zm7.879 3.76a2.396 2.396 0 1 0 0 4.791 2.396 2.396 0 0 0 0-4.792ZM11.28 5.111a3.216 3.216 0 1 0 0 6.432 3.216 3.216 0 0 0 0-6.432Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Kuaishou = /* @__PURE__ */ _export_sfc(Kuaishou$1, [["render", _sfc_render], ["__scopeId", "data-v-6e4bf532"]]);
export {
  Kuaishou as default
};
