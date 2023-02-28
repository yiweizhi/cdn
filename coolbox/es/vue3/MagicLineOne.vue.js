import MagicLineOne$1 from "./MagicLineOne.vue2.js";
import { openBlock, createElementBlock, createElementVNode } from "vue";
import "./MagicLineOne.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = ["fill"];
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
      createElementVNode("path", {
        "data-follow-fill": "#fff",
        d: "M0 0h24v24H0V0z",
        opacity: ".01",
        fill: _ctx._fill
      }, null, 8, _hoisted_2),
      createElementVNode("path", {
        "data-follow-fill": "#ffd015",
        d: "M15.2 9.9c-.4-.4-.7-1-.8-1.6l-.4-3-2.7 1.5c-.5.3-1.1.4-1.7.3l-3.1-.6.6 3.1c.1.6 0 1.2-.3 1.7L5.3 14l3.1.4c.6.1 1.1.4 1.6.8l2.1 2.3 1.3-2.8c.3-.5.7-1 1.2-1.2l2.8-1.3c.1-.1-2.2-2.3-2.2-2.3zm0 5.6L13 20.2c-.1.3-.5.4-.8.3-.1 0-.1-.1-.2-.1l-3.5-3.7c-.1-.1-.2-.2-.4-.2L3 15.7c-.3 0-.6-.3-.5-.7 0-.1 0-.1.1-.2L5 10.3c.1-.1.1-.3.1-.4l-.9-5c-.1-.4.1-.7.4-.7h.2l5.1.9c.1 0 .3 0 .4-.1l4.5-2.5c.3-.2.7 0 .8.2 0 .1.1.1.1.2l.7 5.1c0 .1.1.3.2.4l3.7 3.5c.2.2.3.6 0 .8-.1.1-.1.1-.2.1L15.5 15c-.1.3-.2.4-.3.5z",
        fill: _ctx._fill
      }, null, 8, _hoisted_3),
      createElementVNode("path", {
        "data-follow-fill": "#ffd015",
        opacity: ".3",
        d: "m15.951 17.435 1.414-1.414 4.243 4.242-1.414 1.415z",
        fill: _ctx._fill
      }, null, 8, _hoisted_4)
    ])
  ], 8, _hoisted_1);
}
const MagicLineOne = /* @__PURE__ */ _export_sfc(MagicLineOne$1, [["render", _sfc_render], ["__scopeId", "data-v-4e246d89"]]);
export {
  MagicLineOne as default
};
