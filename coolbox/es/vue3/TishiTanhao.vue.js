import TishiTanhao$1 from "./TishiTanhao.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./TishiTanhao.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = { fill: "none" };
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill"];
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
        createElementVNode("path", {
          "data-follow-fill": "#FFF",
          opacity: ".01",
          "fill-opacity": ".01",
          d: "M-1-1h16v16H-1z",
          fill: _ctx._fill
        }, null, 8, _hoisted_3),
        createElementVNode("path", {
          "data-follow-fill": "#272A31",
          d: "M7 0a7 7 0 1 0 .001 14.001A7 7 0 0 0 7 0Zm-.503 3.625c0-.068.057-.124.126-.124h.754c.07 0 .126.056.126.124v4.25A.126.126 0 0 1 7.377 8h-.754a.126.126 0 0 1-.126-.125v-4.25ZM7 10.5a.766.766 0 0 1-.526-.224.745.745 0 0 1-.206-.525c0-.197.069-.384.206-.525A.768.768 0 0 1 7 9a.768.768 0 0 1 .526.225c.137.14.206.328.206.525a.745.745 0 0 1-.206.525A.766.766 0 0 1 7 10.5Z",
          fill: _ctx._fill
        }, null, 8, _hoisted_4)
      ])
    ])
  ], 8, _hoisted_1);
}
const TishiTanhao = /* @__PURE__ */ _export_sfc(TishiTanhao$1, [["render", _sfc_render], ["__scopeId", "data-v-2f8d945f"]]);
export {
  TishiTanhao as default
};
