import Wushuju$1 from "./Wushuju.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Wushuju.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-9b48dba3"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = { "fill-rule": "nonzero" };
const _hoisted_4 = ["stroke"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  fill: "#F1F3F9",
  d: "M32.147 14.346a1.9 1.9 0 0 0 1.902-1.902 1.9 1.9 0 0 0-1.902-1.902 1.9 1.9 0 0 0-1.902 1.902 1.9 1.9 0 0 0 1.902 1.902ZM20.532 51.025a3.533 3.533 0 1 0-.001-7.066 3.533 3.533 0 0 0 .001 7.066Z"
}, null, -1));
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["stroke"];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  fill: "#9FA8BA",
  d: "M56.086 37.474a1.807 1.807 0 1 0 .001-3.614 1.807 1.807 0 0 0 0 3.614Zm17.979 0a1.807 1.807 0 1 0 .002-3.614 1.807 1.807 0 0 0-.002 3.614Zm-6.058 11.873H62.34c-.88 0-1.612-.733-1.612-1.61 0-.883.733-1.616 1.612-1.616h5.618c.88 0 1.613.733 1.613 1.616.049.877-.684 1.61-1.564 1.61ZM35.42 20.275a.732.732 0 0 0 .733-.733c0-.4-.328-.734-.733-.734a.736.736 0 0 0-.733.734c0 .407.328.733.733.733Zm2.296 0a.732.732 0 0 0 .733-.733c0-.4-.329-.734-.733-.734a.736.736 0 0 0-.733.734c0 .407.328.733.733.733Zm2.345 0a.732.732 0 0 0 .733-.733c0-.4-.328-.734-.733-.734a.736.736 0 0 0-.733.734c0 .407.328.733.733.733Zm54.867-8.694a.879.879 0 0 1-.88-.883V.883a.879.879 0 1 1 1.76 0v9.815c0 .49-.392.883-.88.883Zm7.133 7.526c0-.489.39-.883.88-.883h9.82a.879.879 0 1 1 0 1.76h-9.82a.877.877 0 0 1-.88-.877Zm-.781-6.357a.914.914 0 0 1 0-1.27l6.985-6.936a.92.92 0 0 1 1.271 0c.342.34.342.93 0 1.27l-6.938 6.935c-.39.347-.977.347-1.319 0Z"
}, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M0 0h142v72H0z" }, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 142 73",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        createElementVNode("g", _hoisted_3, [
          createElementVNode("path", {
            fill: "#F1F3F9",
            "stroke-width": "2",
            d: "M64.75 71.538c19.02 0 34.439-15.419 34.439-34.506 0-19.086-15.487-34.505-34.438-34.505-19.019 0-34.438 15.419-34.438 34.505 0 19.087 15.42 34.506 34.438 34.506Z",
            "data-follow-stroke": "#D6DCE8",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_4),
          _hoisted_5,
          createElementVNode("path", {
            fill: "#FFF",
            "stroke-width": "2",
            d: "M97.566 18.91v39.967a2.169 2.169 0 0 1-2.15 2.146h-60.73c-1.172.048-2.149-.93-2.149-2.098V18.91a2.14 2.14 0 0 1 2.15-2.153h60.73c1.22 0 2.149.978 2.149 2.153Z",
            "data-follow-stroke": "#D6DCE8",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_6),
          createElementVNode("path", {
            fill: "#F1F3F9",
            "stroke-width": "2",
            d: "M97.566 18.91v3.077H32.537V18.91a2.14 2.14 0 0 1 2.15-2.153h60.73c1.22 0 2.149.978 2.149 2.153Z",
            "data-follow-stroke": "#D6DCE8",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_7),
          _hoisted_8
        ]),
        _hoisted_9
      ])
    ])
  ], 8, _hoisted_1);
}
const Wushuju = /* @__PURE__ */ _export_sfc(Wushuju$1, [["render", _sfc_render], ["__scopeId", "data-v-9b48dba3"]]);
export {
  Wushuju as default
};
