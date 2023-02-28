import ChatLineOne$1 from "./ChatLineOne.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./ChatLineOne.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
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
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          "fill-opacity": ".01",
          d: "M0 0h24v24H0z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-fill": "#000",
          "fill-rule": "nonzero",
          d: "M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3Zm.535 2-4.666 7 4.666 7H20V5H7.07ZM13 10.586l2.828-2.829 1.415 1.415L14.414 12l2.829 2.828-1.415 1.415L13 13.414l-2.828 2.829-1.415-1.415L11.586 12 8.757 9.172l1.415-1.415L13 10.586Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const ChatLineOne = /* @__PURE__ */ _export_sfc(ChatLineOne$1, [["render", _sfc_render], ["__scopeId", "data-v-24893287"]]);
export {
  ChatLineOne as default
};
