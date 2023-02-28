import Shaixuan$1 from "./Shaixuan.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./Shaixuan.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 12 13",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          d: "M-2-2h16v16H-2z",
          "fill-opacity": ".01",
          opacity: ".01",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-fill": "#000",
          d: "M12 .667V2h-.667L8 7v5.667H4V7L.667 2H0V.667h12ZM2.27 2l3.063 4.596v4.737h1.334V6.596L9.73 2H2.269Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const Shaixuan = /* @__PURE__ */ _export_sfc(Shaixuan$1, [["render", _sfc_render], ["__scopeId", "data-v-16692b16"]]);
export {
  Shaixuan as default
};
